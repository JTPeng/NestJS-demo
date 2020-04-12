import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './article/article.controller'
import { UserController } from './user/user.controller';
import { BookController } from './book/book.controller';
import { ShopController } from './shop/shop.controller';
import { ServernewsService } from './servernews/servernews.service';
import { ServernewsController } from './servernews/servernews.controller';
import { SetcookieController } from './setcookie/setcookie.controller';
import { SetcookieService } from './setcookie/setcookie.service';
import { SetsessionController } from './setsession/setsession.controller';
import { UploadController } from './upload/upload.controller';
import { UploadmanyController } from './uploadmany/uploadmany.controller';

@Module({
  imports: [],
  controllers: [AppController, ArticleController, UserController, BookController, ShopController, ServernewsController, SetcookieController, SetsessionController, UploadController, UploadmanyController],
  providers: [AppService, ServernewsService, SetcookieService],
})
export class AppModule { }
