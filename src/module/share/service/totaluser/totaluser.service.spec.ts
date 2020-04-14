import { Test, TestingModule } from '@nestjs/testing';
import { TotaluserService } from './totaluser.service';

describe('TotaluserService', () => {
  let service: TotaluserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TotaluserService],
    }).compile();

    service = module.get<TotaluserService>(TotaluserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
