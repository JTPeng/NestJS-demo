import { Controller, Get, Request } from '@nestjs/common';

@Controller('setsession')
export class SetsessionController {
  // 设置session
  @Get()
  index(@Request() req) {
    req.session.username = 'xiaohei'
    return '设置session'
  }

  // 获取session
  @Get('getSession')
  getSession(@Request() req) {
    console.log(req.session.username)
    return '获取到session'
  }

  // 删除session
  @Get('delSession')
  delSession(@Request() req) {
    // 过期时间设为0 或者置为空
    req.session.cookie.maxAge = 0
    console.log(req.session.useranme)
    return '删除session'
  }
}
