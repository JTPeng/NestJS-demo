import { Controller, Get } from '@nestjs/common';
import { TotalserviceService } from '../../../share/service/totalservice/totalservice.service'
@Controller('adminuser')
export class AdminuserController {
  constructor(private totalserviceService: TotalserviceService) { }
  @Get()
  index() {
    console.log(this.totalserviceService.getTotalService())
    return { 'success': 'default page admintuser router' }
  }
}
