import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Book } from '../../entity/book.entity';
@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private bookRepository: Repository<Book>) { }

  async findAll() {
    const result = await this.bookRepository.find()
    return result
  }
}
