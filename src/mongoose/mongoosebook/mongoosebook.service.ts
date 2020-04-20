import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose'

import { Mongoosebook } from '../../interface/mongoosebook.interface'
@Injectable()
export class MongoosebookService {
  constructor(@InjectModel('MongooseBook') private mongooseBookModel) { }
  // 查找
  async findAll(params: Mongoosebook = {}, filed: string) {
    // find() 第一个参数接收查找的条件 第二个参数接收约定返回的字段
    const result = await this.mongooseBookModel.find(params, filed).exec()
    return result
  }
  // 增加
  async addData(params: Mongoosebook) {
    const book = await new this.mongooseBookModel(params)
    const result = book.save()
    return result
  }
  // 修改
  async updateData(prarms: Mongoosebook, modifyContent: Mongoosebook) {
    const result = await this.mongooseBookModel.update(prarms, modifyContent)
    return result
  }

  // 删除
  async deleteData(params: Mongoosebook) {
    const result = await this.mongooseBookModel.deleteOne(params)
    return result
  }
}
