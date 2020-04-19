import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

// 引入mongoose相关的配置
import { MongooseModule } from '@nestjs/mongoose'
// 引入需要使用的schema
import { ArticleSchema } from '../../schema/article.schema'

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: 'Article',
      schema: ArticleSchema,
      collection: 'article' // 指定数据库的表
    }
  ])],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule { }
