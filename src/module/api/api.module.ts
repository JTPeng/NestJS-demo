import { Module } from '@nestjs/common';
import { AdminusrController } from './controller/adminusr/adminusr.controller';
import { AdminarticleController } from './controller/adminarticle/adminarticle.controller';

@Module({
  controllers: [AdminusrController, AdminarticleController]
})
export class ApiModule {}
