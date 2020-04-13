import { Test, TestingModule } from '@nestjs/testing';
import { PipsuserController } from './pipsuser.controller';

describe('Pipsuser Controller', () => {
  let controller: PipsuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PipsuserController],
    }).compile();

    controller = module.get<PipsuserController>(PipsuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
