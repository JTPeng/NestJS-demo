import { Test, TestingModule } from '@nestjs/testing';
import { TotalserviceService } from './totalservice.service';

describe('TotalserviceService', () => {
  let service: TotalserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TotalserviceService],
    }).compile();

    service = module.get<TotalserviceService>(TotalserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
