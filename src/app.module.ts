import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserPocModule } from './user-poc/user-poc.module';

@Module({
  controllers: [AppController],
  imports: [UserPocModule],
  providers: [AppService],
})
export class AppModule {}
