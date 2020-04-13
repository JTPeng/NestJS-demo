import { Module } from '@nestjs/common';
import { AdminusrController } from './controller/adminusr/adminusr.controller';
import { AdminarticleController } from './controller/adminarticle/adminarticle.controller';
import { AdminarticleService } from './service/adminarticle/adminarticle.service';
import { AdminuserService } from './service/adminuser/adminuser.service';

// 引入公共服务
import { AppService } from '../../app.service'

@Module({
  controllers: [AdminusrController, AdminarticleController],
  providers: [AdminarticleService, AdminuserService, AppService]
})
export class ApiModule { }
