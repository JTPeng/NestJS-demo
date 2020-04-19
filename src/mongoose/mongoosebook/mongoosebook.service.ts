import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose'
@Injectable()
export class MongoosebookService {
  constructor(@InjectModel('MongooseBook') private mongooseBookModel) { }

  async findAll(params) {
    const result = await this.mongooseBookModel.find(params).exec()
    return result
  }
}
