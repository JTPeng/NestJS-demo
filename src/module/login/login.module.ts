import { Module } from '@nestjs/common';
import { TestloginController } from './controller/testlogin/testlogin.controller';
import { SetloginController } from './controller/setlogin/setlogin.controller';

@Module({
  controllers: [TestloginController, SetloginController]
})
export class LoginModule {}
