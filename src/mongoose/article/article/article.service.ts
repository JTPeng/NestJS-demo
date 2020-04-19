import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class ArticleService {

  constructor(@InjectModel('Article') private articleModel) { }

  async findAll(json) {
    const result = await this.articleModel.find(json).exec()
    return result
  }
}
