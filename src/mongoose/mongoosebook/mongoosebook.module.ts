import { Module } from '@nestjs/common';

import { MongoosebookController } from './mongoosebook.controller';
import { MongoosebookService } from './mongoosebook.service';
import { MongooseModule } from '@nestjs/mongoose'

import { MongooseBookSchema } from '../schema/mongoosebook.schema'

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: 'MongooseBook',
      schema: MongooseBookSchema,
      collection: 'book' // 指定的数据库表
    }
  ])],
  controllers: [MongoosebookController],
  providers: [MongoosebookService]
})
export class MongoosebookModule { }
