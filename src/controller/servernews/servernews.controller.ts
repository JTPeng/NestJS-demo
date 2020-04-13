import { Controller, Get, Render } from '@nestjs/common';
// 1.引入服务
import { ServernewsService } from './servernews.service';

@Controller('servernews')
export class ServernewsController {
  // 2.服务注入(实例化)
  constructor(private servernews: ServernewsService) { }
  @Get()
  @Render('default/servernews')
  index() {
    console.log(this.servernews.allserverNews())
    return {
      newsList: this.servernews.allserverNews()
    }
  }
}
