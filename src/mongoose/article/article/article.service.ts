import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class ArticleService {
  // @InjectModel('Article') 运行是会将Article的值赋值给articleModel
  constructor(@InjectModel('Article') private articleModel) { }

  async findAll(json) {
    const result = await this.articleModel.find(json).exec()
    return result
  }
}
