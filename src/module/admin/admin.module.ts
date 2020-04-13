import { Module } from '@nestjs/common';
import { AdminuserController } from './controller/adminuser/adminuser.controller';
import { AdminarticleController } from './controller/adminarticle/adminarticle.controller';

@Module({
  controllers: [AdminuserController, AdminarticleController]
})
export class AdminModule {}
