import { Injectable, Response } from '@nestjs/common';

@Injectable()
export class SetcookieService {
  setCookies(@Response() res) {
    // httpOnly 默认false 不允许客户端脚本访问
    res.cookie('username', 'xiaobai', { maxAge: 1000 * 60, httpOnly: true })
  }
}
