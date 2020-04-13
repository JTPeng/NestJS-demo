import { Controller, Get } from '@nestjs/common';

// 避免各个模块中拥有相同的路由,所以在根路由前增加模块前缀进行区分
@Controller('api/adminarticle')
export class AdminarticleController {
  @Get()
  index() {
    return '我是api模块中的adminarticle控制器的路由'
  }

  @Get('userIndex')
  userIndex() {
    return '我是api模块中的adminarticle控制器的路由userIndex'
  }
}
