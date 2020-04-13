import { Controller, Get } from '@nestjs/common';

@Controller('adminuser')
export class AdminuserController {
  @Get()
  index() {
    return { 'success': 'default page admintuser router' }
  }
}
