import { Test, TestingModule } from '@nestjs/testing';
import { AdminarticleController } from './adminarticle.controller';

describe('Adminarticle Controller', () => {
  let controller: AdminarticleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminarticleController],
    }).compile();

    controller = module.get<AdminarticleController>(AdminarticleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
