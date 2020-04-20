import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';

// 引入typeorm
import { TypeOrmModule } from '@nestjs/typeorm';
// 引入实体
import { Book } from '../../entity/book.entity'
@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule { }
