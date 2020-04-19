import { Controller, Get } from '@nestjs/common';

import { MongoosebookService } from './mongoosebook.service'

@Controller('mongoose/mongoosebook')
export class MongoosebookController {

  constructor(private mongoosebookService: MongoosebookService) { }
  @Get()
  async index() {
    const result = await this.mongoosebookService.findAll({ name: '犀牛书' })
    return result
  }
}
