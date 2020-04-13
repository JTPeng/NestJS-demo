import { Controller, Get } from '@nestjs/common';

import { AdminuserService } from '../../service/adminuser/adminuser.service';
// 避免各个模块中拥有相同的路由,所以在根路由前增加模块前缀进行区分
@Controller('admin/adminuser')
export class AdminuserController {
  constructor(private adminuserService: AdminuserService) { }
  @Get()
  index() {
    console.log(this.adminuserService.getUser())
    return '我是admin模块的user控制器路由'
  }
}
