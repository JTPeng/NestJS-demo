import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './controller/article/article.controller'
import { UserController } from './controller/user/user.controller';
import { BookController } from './controller/book/book.controller';
import { ShopController } from './controller/shop/shop.controller';
import { ServernewsService } from './controller/servernews/servernews.service';
import { ServernewsController } from './controller/servernews/servernews.controller';
import { SetcookieController } from './controller/setcookie/setcookie.controller';
import { SetcookieService } from './controller/setcookie/setcookie.service';
import { SetsessionController } from './controller/setsession/setsession.controller';
import { UploadController } from './controller/upload/upload.controller';
import { UploadmanyController } from './controller/uploadmany/uploadmany.controller';

// 中间件
import { InitMiddleware } from './middleware/init.middleware'
import { UserMiddleware } from './middleware/user.middleware'


// 函数式中间件
import { logger } from './middleware/func.middleware'
import { PipsuserController } from './controller/pipsuser/pipsuser.controller';

// 全局中间(只能引入函数式中间件)


// 根模块既可以引入类中间和函数式中间件
@Module({
  imports: [],
  controllers: [AppController, ArticleController, UserController, BookController, ShopController, ServernewsController, SetcookieController, SetsessionController, UploadController, UploadmanyController, PipsuserController],
  providers: [AppService, ServernewsService, SetcookieService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // forRoutes('xxx') xxx传入具体路由表示匹配指定的路由
    // forRoutes(controller) controller传入控制器表示 只有该控制器会配到当前路由
    // consumer.apply(InitMiddleware).forRoutes('*') // *号代表匹配所有路由

    // path 表示匹配的了路由 
    // method表示匹配那些请求RequestMethod.GET(POST/ALL)表示匹配GET请求 
    // 匹配多个路由写法 forRoutes({ path: 'user', method: RequestMethod.ALL }{ path: 'product', method: RequestMethod.ALL })
    // consumer.apply(InitMiddleware).forRoutes({ path: 'user', method: RequestMethod.ALL })

    // 配置多个中间件(多个中间件的匹配方式)
    // consumer
    //   .apply(InitMiddleware)
    //   .forRoutes('*')
    //   .apply(UserMiddleware)
    //   .forRoutes('user')

    // 函数中间件使用
    consumer
      .apply(logger)
      .forRoutes('user')
      .apply(InitMiddleware)
      .forRoutes('')

    // apply可以一次配置多个中间件
    // consumer
    //   .apply(InitMiddleware, UserMiddleware)
    //   .forRoutes('product')

    // 函数中间件
    // consumer
    //   .apply(logger, UserMiddleware)
    //   .forRoutes('user')
  }
}
