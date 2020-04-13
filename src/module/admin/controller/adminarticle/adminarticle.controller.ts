import { Controller, Get } from '@nestjs/common';

// 避免各个模块中拥有相同的路由,所以在根路由前增加模块前缀进行区分
@Controller('admin/adminarticle')
export class AdminarticleController {
  @Get()
  index(){
    return '我是admin模块内的article控制器的路由'
  }
}
