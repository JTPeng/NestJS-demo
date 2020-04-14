import { Test, TestingModule } from '@nestjs/testing';
import { SetloginController } from './setlogin.controller';

describe('Setlogin Controller', () => {
  let controller: SetloginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SetloginController],
    }).compile();

    controller = module.get<SetloginController>(SetloginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
