/*
 * @Author: kewin.Pengjiantian 
 * @Date: 2020-04-11 23:36:57 
 * @Last Modified by:   kewin.Pengjiantian 
 * @Last Modified time: 2020-04-11 23:36:57 
 */
import { Controller, Get, Param, UseGuards } from '@nestjs/common';

// 引入守卫
import { BookguardGuard } from '../../guard/bookguard.guard'
// 动态路由
@Controller('book')
// @UseGuards(BookguardGuard) // 配置整个中间件的守卫
export class BookController {

  @Get()
  // @UseGuards(BookguardGuard) // 配置具体路由的守卫
  tempIndex() {
    return { 'guard': '守卫' }
  }

  // 通过@Param()可以获取到动态路由的参数
  @Get(':id')
  index(@Param() params) {
    console.log(params.id)
    return 'book的的动态路由'
  }
}
