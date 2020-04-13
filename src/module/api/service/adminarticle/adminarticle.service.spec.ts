import { Test, TestingModule } from '@nestjs/testing';
import { AdminarticleService } from './adminarticle.service';

describe('AdminarticleService', () => {
  let service: AdminarticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminarticleService],
    }).compile();

    service = module.get<AdminarticleService>(AdminarticleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
