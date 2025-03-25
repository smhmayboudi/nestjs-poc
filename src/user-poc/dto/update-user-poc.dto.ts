import { PartialType } from '@nestjs/mapped-types';
import { CreateUserPocDto } from './create-user-poc.dto';

export class UpdateUserPocDto extends PartialType(CreateUserPocDto) {}
