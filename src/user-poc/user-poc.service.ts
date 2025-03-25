import { Injectable } from '@nestjs/common';
import { CreateUserPocDto } from './dto/create-user-poc.dto';
import { UpdateUserPocDto } from './dto/update-user-poc.dto';

@Injectable()
export class UserPocService {
  create(createUserPocDto: CreateUserPocDto) {
    return `This action adds a new userPoc with fullname of ${createUserPocDto.fullname}`;
  }

  findAll() {
    return `This action returns all userPoc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userPoc`;
  }

  update(id: number, updateUserPocDto: UpdateUserPocDto) {
    return `This action updates a #${id} userPoc with fullname of ${updateUserPocDto.fullname}`;
  }

  remove(id: number) {
    return `This action removes a #${id} userPoc`;
  }
}
