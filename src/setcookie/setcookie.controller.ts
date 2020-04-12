import { Controller, Get, Response, Request } from '@nestjs/common';
// 1.服务引入
import { SetcookieService } from './setcookie.service'

@Controller('setcookie')
export class SetcookieController {
  // 2.注入服务
  constructor(private setCookie: SetcookieService) { }

  // 设置cookie(不加密)
  @Get()
  index(@Response() res) {
    // maxAge过期时间
    // httpOnly 默认false 不允许客户端脚本访问
    res.cookie('username', 'xiaobai', { maxAge: 1000 * 60, httpOnly: true })
    // 这里不能通过return给页面发送数据。但是可通过res.send()
    res.send('这是cookie(不加密)')
  }

  // 其他页面也可以使用存储的cookie(不加密)
  @Get('add')
  addIndex(@Request() req) {
    console.log(req.cookies.username)
    return req.cookies.username + ' cookie(不加密)'
  }

  // 设置cookie时进行加密
  @Get('encrypt')
  encryptCookie(@Response() res) {
    res.cookie('password', 'encrypt cookie  哈哈哈', { maxAge: 1000 * 60 * 60, httpOnly: true, signed: true })
    res.send('已对cookie进行加密,f12可查看')
  }

  // 获取加密后的cookie
  @Get('getEncryCookie')
  getEncryCookie(@Request() req) {
    console.log(req.signedCookies.password)
    return req.signedCookies.password ? `${req.signedCookies.password},是加密后的cookie` : 'cookie已加密无法访问'
  }
}
