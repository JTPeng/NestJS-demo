import { Test, TestingModule } from '@nestjs/testing';
import { AdminusrController } from './adminusr.controller';

describe('Adminusr Controller', () => {
  let controller: AdminusrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminusrController],
    }).compile();

    controller = module.get<AdminusrController>(AdminusrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
