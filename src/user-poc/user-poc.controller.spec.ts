import { Test, TestingModule } from '@nestjs/testing';
import { UserPocController } from './user-poc.controller';
import { UserPocService } from './user-poc.service';

describe('UserPocController', () => {
  let controller: UserPocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPocController],
      providers: [UserPocService],
    }).compile();

    controller = module.get<UserPocController>(UserPocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
