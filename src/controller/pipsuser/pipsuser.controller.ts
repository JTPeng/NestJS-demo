import { Controller, Get, UsePipes, Query } from '@nestjs/common';
import * as Joi from '@hapi/joi'

import { UserPipe } from '../../pipe/user.pipe'
let userSchema = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().integer().min(6).max(66).required(),
})
@Controller('pipsuser')
export class PipsuserController {

  @Get()
  // 使用管道修饰器来实例化管道
  @UsePipes(new UserPipe(userSchema))
  index(@Query() info) {
    console.log(info)
  }
}
