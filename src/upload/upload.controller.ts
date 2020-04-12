/*
 * @Author: kewin.Pengjiantian 
 * @Date: 2020-04-12 17:22:27 
 * @Last Modified by: kewin.Pengjiantian
 * @Last Modified time: 2020-04-12 17:26:28
 */

import { Controller, Get, Render, Post, UseInterceptors, UploadedFile, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'
import { createWriteStream } from 'fs';

import { join } from 'path'

@Controller('upload')
export class UploadController {
  @Get()
  @Render('default/upload')
  index() {

  }

  @Post('add')
  // pic和上传文件的name保持一致
  @UseInterceptors(FileInterceptor('pic'))
  addUpload(@UploadedFile() file, @Body() body) {
    console.log(body)
    console.log(file)
    console.log(__dirname) // \nest-demo-practise\dist\upload
    // 路径拼接
    const writeImage = createWriteStream(join(__dirname, '../../public/upload/', `${Date.now()}-${file.originalname}`))
    writeImage.write(file.buffer)
    return '上传成功'
  }
}
