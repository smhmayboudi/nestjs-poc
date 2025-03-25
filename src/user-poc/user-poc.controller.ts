import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Header,
  Redirect,
  Query,
  PipeTransform,
  ArgumentMetadata,
  UseFilters,
  ForbiddenException,
} from '@nestjs/common';
import { UserPocService } from './user-poc.service';
import { CreateUserPocDto } from './dto/create-user-poc.dto';
import { UpdateUserPocDto } from './dto/update-user-poc.dto';
import { Observable, of } from 'rxjs';
import { HttpExceptionFilter } from 'src/http-exception/http-exception.filter';

class StringToNumber implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    // console.log('metadata.metatype', metadata.metatype);
    if (metadata.type === 'query' && metadata.data === 'version') {
      return Number.parseInt(value, 10);
    }

    return 0;
  }
}

@Controller('user-poc')
@UseFilters(new HttpExceptionFilter())
export class UserPocController {
  constructor(private readonly userPocService: UserPocService) {}

  @Get('throw')
  @UseFilters(new HttpExceptionFilter())
  throw() {
    throw new ForbiddenException();
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  docs(@Query('version', StringToNumber) version: number) {
    if (version && version === 5) {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get('all-promise')
  allPromise(): Promise<any[]> {
    return new Promise((resolve) => resolve([]));
  }

  @Get('all-observable')
  allObservable(): Observable<any[]> {
    return of([]);
  }

  @Header('Cache-Control', 'no-store')
  @HttpCode(201)
  @Post()
  create(@Body() createUserPocDto: CreateUserPocDto) {
    return this.userPocService.create(createUserPocDto);
  }

  @Get()
  findAll() {
    return this.userPocService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userPocService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserPocDto: UpdateUserPocDto) {
    return this.userPocService.update(+id, updateUserPocDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userPocService.remove(+id);
  }
}
