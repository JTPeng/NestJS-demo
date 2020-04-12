import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path' // 方法二 需要引入的文件
// 引入cookie-parser
import * as CookieParser from 'cookie-parser'

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

  await app.listen(3000);
}
bootstrap();
