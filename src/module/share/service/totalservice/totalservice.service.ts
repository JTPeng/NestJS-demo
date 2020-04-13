import { Injectable } from '@nestjs/common';

@Injectable()
export class TotalserviceService {
  getTotalService(){
    return '我是公共模块里的服务'
  }
}
