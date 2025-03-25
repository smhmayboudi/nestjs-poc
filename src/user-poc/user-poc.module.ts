// import { Module, ValidationPipe } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { UserPocService } from './user-poc.service';
import { UserPocController } from './user-poc.controller';
// import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
// import { LoggingInterceptor } from '../../src/logging/logging.interceptor';
// import { RolesGuard } from '../../src/roles/roles.guard';
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
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: LoggingInterceptor,
    // },
  ],
})
export class UserPocModule {}
