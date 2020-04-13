/*
 * @Author: kewin.Pengjiantian 
 * @Date: 2020-04-11 23:36:57 
 * @Last Modified by:   kewin.Pengjiantian 
 * @Last Modified time: 2020-04-11 23:36:57 
 */
import { Controller, Get, Param } from '@nestjs/common';

// 动态路由
@Controller('book')
export class BookController {

  // 通过@Param()可以获取到动态路由的参数
  @Get(':id')
  index(@Param() params) {
    console.log(params.id)
    return 'book的的动态路由'
  }
}
