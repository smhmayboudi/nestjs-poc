import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserPocModule } from './user-poc/user-poc.module';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  controllers: [AppController],
  imports: [UserPocModule],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(middlewareConsumer: MiddlewareConsumer) {
    middlewareConsumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
