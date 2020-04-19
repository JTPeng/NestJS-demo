import { Controller, Get } from '@nestjs/common';

import { ArticleService } from './article.service'
@Controller('mongoose/article')
export class ArticleController {
  constructor(private articleService: ArticleService) { }
  @Get()
  async index() {
    const result = await this.articleService.findAll({ 'author_name': '张三' })
    return result
  }
}
