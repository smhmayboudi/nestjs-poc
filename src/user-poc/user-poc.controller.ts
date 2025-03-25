import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserPocService } from './user-poc.service';
import { CreateUserPocDto } from './dto/create-user-poc.dto';
import { UpdateUserPocDto } from './dto/update-user-poc.dto';

@Controller('user-poc')
export class UserPocController {
  constructor(private readonly userPocService: UserPocService) {}

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
