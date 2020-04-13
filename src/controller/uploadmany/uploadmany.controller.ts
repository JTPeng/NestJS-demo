import { Controller, Get, Render, Post, Body, UseInterceptors, UploadedFiles } from '@nestjs/common';

import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express'
import { createWriteStream } from 'fs';
import { join } from 'path'
@Controller('uploadmany')
export class UploadmanyController {
  @Get()
  @Render('default/uploadMany')
  index() {

  }

  @Post('add')
  // 相同名字下可以直接用字符串表示
  // 不同名字.则可通过数组表示 如[{name:'pic',maxCount:1},name:'taxt',maxCount:1]
  @UseInterceptors(FilesInterceptor('pic'))
  addUploadMany(@Body() body, @UploadedFiles() files) {
    // 如果要控制之上传图片可以根据类型进行控制
    console.log(body)
    console.log(files)
    files.forEach(item => {
      const writeImage = createWriteStream(join(__dirname, '../../public/upload', `${Date.now()}-${item.originalname}`))
      writeImage.write(item.buffer)
    })
  }
}
