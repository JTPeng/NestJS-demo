import { Test, TestingModule } from '@nestjs/testing';
import { MongoosebookService } from './mongoosebook.service';

describe('MongoosebookService', () => {
  let service: MongoosebookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongoosebookService],
    }).compile();

    service = module.get<MongoosebookService>(MongoosebookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
