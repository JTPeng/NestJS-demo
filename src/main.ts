import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path' // 方法二 需要引入的文件
// 引入cookie-parser
import * as CookieParser from 'cookie-parser'
// 引入express-session
import * as session from 'express-session'

// 全局中间件配置
import { logger } from './middleware/func.middleware'
// 配置全局守卫
import { BookguardGuard } from './guard/bookguard.guard'
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 方法一:
  // http://localhost:3000/love.jpg 可访问
  // app.useStaticAssets('public',{
  //   // http://localhost:3000/static/love.jpg 可访问
  //   prefix:'/static/' // 配置虚拟路径
  // }) // 配置静态资源目录

  // 方法二:
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    // http://localhost:3000/static/love.jpg 可访问
    prefix: '/static/' // 配置虚拟路径
  }) // 配置静态资源目录

  // 配置模板引擎的基本目录(存放模板引擎的路径)
  app.setBaseViewsDir('views')
  app.setViewEngine('ejs')
  // 通过中间件的方式使用cookieparser ---- 和express使用方法一致
  // 不传参代表不对cookie进行加密
  // app.use(CookieParser())
  // 传任意参数对cookie进行加密 CookieParser会对参数进行算法加密 此时获取和设置cookie的方法需要添加新的参数否则无法生效
  app.use(CookieParser('encrypet cookie'))

  // session配置中间件
  // 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false）
  app.use(session({ secret: 'session cat', cookie: { maxAge: 106000, httpOnly: true }, rolling: true }))

  // 全局中间件(只能引入函数式中间件)
  app.use(logger)

  // 全局守卫配置 需要实例化守卫
  // app.useGlobalGuards(new BookguardGuard())

  await app.listen(3000);
}
bootstrap();
