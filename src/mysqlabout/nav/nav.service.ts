import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
// 引入实体
import { Nav } from '../../entity/nav.entity'
// 引入约束规范
import { MysqlaboutNav } from '../../interface/mysqlaboutnav.interface'
@Injectable()
export class NavService {
  constructor(@InjectRepository(Nav) private navRepository: Repository<Nav>) { }

  // 查询
  async findAll(json: MysqlaboutNav = {}) {
    const result = await this.navRepository.find(json)

    // const result = await this.navRepository.findOne(2)

    // const result = await this.navRepository.query('select * from book')

    return result
  }

  // 增加
  async addData(json: MysqlaboutNav) {
    const nav = new Nav()
    json.title ? nav.title = json.title : ''
    json.description ? nav.description = json.description : ''
    json.content ? nav.content = json.content : ''
    json.price ? nav.price = json.price : ''
    json.status ? nav.status = json.status : ''
    const result = await this.navRepository.save(nav)
    return result
  }

  // 删除
  async deleteData(json: MysqlaboutNav) {
    const result = await this.navRepository.findOne(json)
    return this.navRepository.remove(result)
  }

  // 修改
  async updateData(id: MysqlaboutNav, json: MysqlaboutNav) {
    const result = await this.navRepository.findOne(id)
    json.title ? result.title = json.title : ''
    json.description ? result.description = json.description : ''
    json.content ? result.content = json.content : ''
    json.price ? result.price = json.price : ''
    json.status ? result.status = json.status : ''
    return this.navRepository.save(result)
  }
}
