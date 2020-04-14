import { Controller, Get, Request } from '@nestjs/common';

@Controller('login/setlogin')
export class SetloginController {
  @Get()
  index(@Request() req) {
    req.session.username = '小白'
    return {
      'setSession':'设置session'
    }
  }
}
