import { Test, TestingModule } from '@nestjs/testing';
import { SetcookieService } from './setcookie.service';

describe('SetcookieService', () => {
  let service: SetcookieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetcookieService],
    }).compile();

    service = module.get<SetcookieService>(SetcookieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
