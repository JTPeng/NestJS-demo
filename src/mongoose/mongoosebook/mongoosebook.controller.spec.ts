import { Test, TestingModule } from '@nestjs/testing';
import { MongoosebookController } from './mongoosebook.controller';

describe('Mongoosebook Controller', () => {
  let controller: MongoosebookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MongoosebookController],
    }).compile();

    controller = module.get<MongoosebookController>(MongoosebookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
