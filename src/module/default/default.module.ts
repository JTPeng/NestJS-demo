import { Module } from '@nestjs/common';
import { AdminarticleController } from './controller/adminarticle/adminarticle.controller';
import { AdminuserController } from './controller/adminuser/adminuser.controller';
import { ShareModule } from '../share/share.module'
@Module({
  imports: [ShareModule],
  controllers: [AdminarticleController, AdminuserController]
})
export class DefaultModule { }
