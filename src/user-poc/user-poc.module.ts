// import { Module, ValidationPipe } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { UserPocService } from './user-poc.service';
import { UserPocController } from './user-poc.controller';
// import { APP_PIPE } from '@nestjs/core';
// import { APP_FILTER } from '@nestjs/core';
// import { HttpExceptionFilter } from '../../src/http-exception/http-exception.filter';

@Module({
  controllers: [UserPocController],
  providers: [
    UserPocService,
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    // },
  ],
})
export class UserPocModule {}
