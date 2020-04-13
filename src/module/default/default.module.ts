import { Module } from '@nestjs/common';
import { AdminarticleController } from './controller/adminarticle/adminarticle.controller';
import { AdminuserController } from './controller/adminuser/adminuser.controller';

@Module({
  controllers: [AdminarticleController, AdminuserController]
})
export class DefaultModule {}
