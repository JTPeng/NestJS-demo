import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    // 将appService注入
    return this.appService.getHello();
  }

  @Get('news')
  getNews(): string {
    return 'this is a newsPage'
  }

  @Get('product')
  getProduct(): string {
    return this.appService.getProduct()
  }

  @Get('getProductAdd')
  getProductAdd(): string {
    return 'getProductAdd'
  }

  @Get('ejs')
  @Render('default/index')
  getEjs() {
    return { name: '小白', age: '18' }
  }
}
