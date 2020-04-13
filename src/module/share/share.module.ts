import { Module } from '@nestjs/common';
import { TotalserviceService } from './service/totalservice/totalservice.service';

@Module({
  providers: [TotalserviceService],
  exports: [TotalserviceService]
})
export class ShareModule { }
