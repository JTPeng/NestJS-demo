import { Test, TestingModule } from '@nestjs/testing';
import { ServernewsController } from './servernews.controller';

describe('Servernews Controller', () => {
  let controller: ServernewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServernewsController],
    }).compile();

    controller = module.get<ServernewsController>(ServernewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
