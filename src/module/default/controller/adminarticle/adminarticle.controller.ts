import { Controller, Get } from '@nestjs/common';

@Controller('adminarticle')
export class AdminarticleController {
  @Get()
  index() {
    return { 'success': 'default page adminarticle router' }
  }
}
