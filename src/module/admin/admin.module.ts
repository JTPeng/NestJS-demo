import { Module } from '@nestjs/common';
import { AdminuserController } from './controller/adminuser/adminuser.controller';
import { AdminarticleController } from './controller/adminarticle/adminarticle.controller';
import { AdminuserService } from './service/adminuser/adminuser.service';
import { AdminarticleService } from './service/adminarticle/adminarticle.service';

@Module({
  controllers: [AdminuserController, AdminarticleController],
  providers: [AdminuserService, AdminarticleService]
})
export class AdminModule {}
