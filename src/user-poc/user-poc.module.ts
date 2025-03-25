import { Module } from '@nestjs/common';
import { UserPocService } from './user-poc.service';
import { UserPocController } from './user-poc.controller';

@Module({
  controllers: [UserPocController],
  providers: [UserPocService],
})
export class UserPocModule {}
