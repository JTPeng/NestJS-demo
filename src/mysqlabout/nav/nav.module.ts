import { Module } from '@nestjs/common';
import { NavController } from './nav.controller'
import { NavService } from './nav.service'
// 引入TypeORM
import { TypeOrmModule } from '@nestjs/typeorm'

// 引入对应实体
import { Nav } from '../../entity/nav.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Nav])],
  controllers: [NavController],
  providers: [NavService]
})
export class NavModule { }
