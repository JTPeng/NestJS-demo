import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path' // 方法二 需要引入的文件

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
  
  await app.listen(3000);
}
bootstrap();
