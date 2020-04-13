import { Controller, Get, UsePipes, Query } from '@nestjs/common';
import { UserPipe } from '../../pipe/user.pipe'

@Controller('pipsuser')
export class PipsuserController {
  @Get()
  // 使用管道修饰器来实例化管道
  @UsePipes(new UserPipe())
  index(@Query() info) {
    console.log(info)
  }
}
