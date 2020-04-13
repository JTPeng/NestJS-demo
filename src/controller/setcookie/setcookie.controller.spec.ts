import { Test, TestingModule } from '@nestjs/testing';
import { SetcookieController } from './setcookie.controller';

describe('Setcookie Controller', () => {
  let controller: SetcookieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SetcookieController],
    }).compile();

    controller = module.get<SetcookieController>(SetcookieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
