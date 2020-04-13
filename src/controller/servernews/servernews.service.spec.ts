import { Test, TestingModule } from '@nestjs/testing';
import { ServernewsService } from './servernews.service';

describe('ServernewsService', () => {
  let service: ServernewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServernewsService],
    }).compile();

    service = module.get<ServernewsService>(ServernewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
