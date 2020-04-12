import { Controller, Get, Post, Body, Response, Render } from '@nestjs/common';
// 1.服务引入
import { ServernewsService } from '../servernews/servernews.service'

@Controller('shop')
export class ShopController {
  // 2.注入服务
  constructor(private servernews: ServernewsService) { }

  @Get()
  @Render('default/shop')
  index() {

  }

  @Post('add')
  addShop(@Body() body, @Response() res) {
    console.log(body)
    res.redirect('/shop') // 重定向到shop页面
  }

  @Get('other')
  otherShop() {
    // 使用
    return this.servernews.allserverNews()
  }
}
