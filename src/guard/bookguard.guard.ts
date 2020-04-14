import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BookguardGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const { path } = context.switchToHttp().getRequest()
    console.log(path)
    if (path === '/login/setlogin') {
      return true
    } else {
      const { username } = context.switchToHttp().getRequest().session
      console.log(username)
      return username ? true : false
    }
    // const randomNum = Math.random()
    // console.log('nestJS中的守卫', randomNum)
    // return randomNum > 0.3 ? true : false
  }
}
