import { Controller, Get } from '@nestjs/common';

import { MongoosebookService } from './mongoosebook.service'

@Controller('mongoose/mongoosebook')
export class MongoosebookController {

  constructor(private mongoosebookService: MongoosebookService) { }
  //查找
  @Get()
  async index() {
    const result = await this.mongoosebookService.findAll({ _id: '5e9b473bc9b80136703ac9a1' }, '_id name pic')
    return result
  }
  // 增加
  @Get('add')
  async doAdd() {
    const result = await this.mongoosebookService.addData({
      price: '88',
      name: 'linux鸟哥的私房菜',
      pic: 'www.linuxBird.com'
    })
    return result
  }

  // 修改
  @Get('update')
  async doUpdate() {
    const result = await this.mongoosebookService.updateData(
      { _id: '5e9ce6b0848f6314b8eceb28' },
      { price: '77' }
    )
    return result
  }

  // 删除
  @Get('delete')
  async doDelete() {
    const result = await this.mongoosebookService.deleteData({ _id: '5e9ce6b0848f6314b8eceb28' })
    return result
  }
}
