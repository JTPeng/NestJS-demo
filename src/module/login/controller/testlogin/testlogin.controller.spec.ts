import { Test, TestingModule } from '@nestjs/testing';
import { TestloginController } from './testlogin.controller';

describe('Testlogin Controller', () => {
  let controller: TestloginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestloginController],
    }).compile();

    controller = module.get<TestloginController>(TestloginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
