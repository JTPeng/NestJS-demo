import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './article/article.controller'
import { UserController } from './user/user.controller';
import { BookController } from './book/book.controller';

@Module({
  imports: [],
  controllers: [AppController, ArticleController, UserController, BookController],
  providers: [AppService],
})
export class AppModule { }
