import { Controller, Get, Response, Request } from '@nestjs/common';
// 1.服务引入
import { SetcookieService } from './setcookie.service'

@Controller('setcookie')
export class SetcookieController {
  // 2.注入服务
  constructor(private setCookie: SetcookieService) { }

  // 设置cookie
  @Get()
  index(@Response() res) {
    // maxAge过期时间
    // httpOnly 默认false 不允许客户端脚本访问
    res.cookie('username', 'xiaobai', { maxAge: 1000 * 60, httpOnly: true })
    res.send('这是cookie')
  }

  // 其他页面也可以使用存储的cookie
  @Get('add')
  addIndex(@Request() req) {
    console.log(req.cookies.username)
    return req.cookies.username
  }
}
