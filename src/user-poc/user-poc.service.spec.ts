import { Test, TestingModule } from '@nestjs/testing';
import { UserPocService } from './user-poc.service';

describe('UserPocService', () => {
  let service: UserPocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPocService],
    }).compile();

    service = module.get<UserPocService>(UserPocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
