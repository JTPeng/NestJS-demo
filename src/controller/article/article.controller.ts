/*
 * @Author: kewin.Pengjiantian 
 * @Date: 2020-04-11 22:22:17 
 * @Last Modified by: kewin.Pengjiantian
 * @Last Modified time: 2020-04-11 22:29:29
 */
import { Controller, Get } from '@nestjs/common';

// 只有用Controller装饰的类才是控制器
@Controller('article')
export class ArticleController {
  // 配置路由
  // 配置了装饰器才会访问到路由
  // 如果为空则会匹配到article路由
  
  @Get()
  index() {
    return 'this is articlePage'
  }

  // 不为空则匹配到对应的路由。如:@Get('add') => 匹配到的路由就是artilce/add
  @Get('add')
  addArticle() {
    return 'this is addArticlePage'
  }
}
