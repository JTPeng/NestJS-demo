import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './article/article.controller'
import { UserController } from './user/user.controller';
import { BookController } from './book/book.controller';
import { ShopController } from './shop/shop.controller';

@Module({
  imports: [],
  controllers: [AppController, ArticleController, UserController, BookController, ShopController],
  providers: [AppService],
})
export class AppModule { }
