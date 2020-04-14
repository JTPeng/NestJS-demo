import { Controller, Get, Request } from '@nestjs/common';

@Controller('login/testlogin')
export class TestloginController {
  @Get()
  index(@Request() req) {
    return req.session.username
  }
}
