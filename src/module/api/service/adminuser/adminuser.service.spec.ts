import { Test, TestingModule } from '@nestjs/testing';
import { AdminuserService } from './adminuser.service';

describe('AdminuserService', () => {
  let service: AdminuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminuserService],
    }).compile();

    service = module.get<AdminuserService>(AdminuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
