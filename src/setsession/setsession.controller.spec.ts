import { Test, TestingModule } from '@nestjs/testing';
import { SetsessionController } from './setsession.controller';

describe('Setsession Controller', () => {
  let controller: SetsessionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SetsessionController],
    }).compile();

    controller = module.get<SetsessionController>(SetsessionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
