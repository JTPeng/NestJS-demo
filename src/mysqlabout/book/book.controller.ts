import { Controller, Get } from '@nestjs/common';

// 注入服务
import { BookService } from './book.service'

@Controller('mysqlabout/book')
export class BookController {
  constructor(private bookService: BookService) { }

  @Get()
  async index() {
    const result = await this.bookService.findAll()
    console.log(result)
  }

}
