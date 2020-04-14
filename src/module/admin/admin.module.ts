import { Module } from '@nestjs/common';
import { AdminuserController } from './controller/adminuser/adminuser.controller';
import { AdminarticleController } from './controller/adminarticle/adminarticle.controller';
import { AdminuserService } from './service/adminuser/adminuser.service';
import { AdminarticleService } from './service/adminarticle/adminarticle.service';

// 引入公共服务
import { TotaluserService } from '../share/service/totaluser/totaluser.service';
@Module({
  controllers: [AdminuserController, AdminarticleController],
  providers: [AdminuserService, AdminarticleService, TotaluserService] // 声明使用该服务
})
export class AdminModule { }
