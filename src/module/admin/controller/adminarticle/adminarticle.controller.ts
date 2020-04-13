import { Controller, Get } from '@nestjs/common';
// 引入
import { AdminarticleService } from '../../service/adminarticle/adminarticle.service';
// 避免各个模块中拥有相同的路由,所以在根路由前增加模块前缀进行区分
@Controller('admin/adminarticle')
export class AdminarticleController {
  constructor(private adminarticleService: AdminarticleService) { }
  @Get()
  index() {
    console.log(this.adminarticleService.getArticle())
    return '我是admin模块内的article控制器的路由'
  }
}
