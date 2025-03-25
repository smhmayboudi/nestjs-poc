import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserPocModule } from './user-poc/user-poc.module';

@Module({
  imports: [UserPocModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
