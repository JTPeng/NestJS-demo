import { Module } from '@nestjs/common';
import { TotalserviceService } from './service/totalservice/totalservice.service';
import { TotaluserService } from './service/totaluser/totaluser.service';

@Module({
  providers: [TotalserviceService, TotaluserService],
  exports: [TotalserviceService, TotaluserService] // 向外暴露服务
})
export class ShareModule { }
