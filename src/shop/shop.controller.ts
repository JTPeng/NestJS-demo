import { Controller, Get, Post, Body, Response, Render } from '@nestjs/common';

@Controller('shop')
export class ShopController {
  @Get()
  @Render('default/shop')
  index() {

  }

  @Post('add')
  addShop(@Body() body, @Response() res) {
    console.log(body)
    res.redirect('/shop') // 重定向到shop页面
  }

}
