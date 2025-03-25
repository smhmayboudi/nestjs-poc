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
  ParseIntPipe,
  HttpStatus,
  UsePipes,
  ValidationPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { UserPocService } from './user-poc.service';
import {
  CreateUserPocDto2,
  createUserPocSchema,
} from './dto/create-user-poc.dto';
import { UpdateUserPocDto } from './dto/update-user-poc.dto';
import { Observable, of } from 'rxjs';
import { HttpExceptionFilter } from 'src/http-exception/http-exception.filter';
import { ZodValidationPipe } from 'src/zod-validation/zod-validation.pipe';

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
  @UsePipes(new ZodValidationPipe(createUserPocSchema))
  create(@Body() createUserPocDto: CreateUserPocDto2) {
    return this.userPocService.create(createUserPocDto);
  }

  @Get()
  findAll() {
    return this.userPocService.findAll();
  }

  @Get(':id')
  findOne(
    // @Param('id', ParseIntPipe)
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.userPocService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateUserPocDto: UpdateUserPocDto,
  ) {
    return this.userPocService.update(+id, updateUserPocDto);
  }

  @Delete(':id')
  remove(@Param('id', new DefaultValuePipe(0)) id: string) {
    return this.userPocService.remove(+id);
  }
}
