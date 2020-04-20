import { Controller, Get } from '@nestjs/common';

import { NavService } from './nav.service'
import { MysqlaboutNav } from '../../interface/mysqlaboutnav.interface'
@Controller('mysqlabout/nav')
export class NavController {

  // 注入服务
  constructor(private navService: NavService) { }
  // 查询
  @Get()
  async index() {
    // const result = await this.navService.findAll({ price: 66 })
    const result = await this.navService.findAll()
    return result
  }

  // 增加
  @Get('add')
  async addData() {
    const data: MysqlaboutNav = {
      title: '4月19日',
      description: '今天是2020年4月19日啊！',
      content: '英雄联盟春季赛 ig vs lng 最终ig获胜 以春季赛第一名顺利进入季后赛',
      price: 99,
      status: 1
    }
    const result = await this.navService.addData(data)
    return result
  }

  // 删除
  @Get('delete')
  async deleteData() {
    const result = await this.navService.deleteData({ id: 3 })
    return result
  }

  // 修改
  @Get('update')
  async updateData() {
    const data: MysqlaboutNav = {
      title: '4月19日',
      description: '今天是2020年4月19日啊！',
      content: '英雄联盟春季赛 ig vs lng 最终ig获胜 上单是 Theshy',
      price: 99,
      status: 99
    }
    const result = await this.navService.updateData({ id: 4 }, data)
    return result
  }
}
