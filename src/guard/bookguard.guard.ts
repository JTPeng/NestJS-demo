import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BookguardGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const randomNum = Math.random()
    console.log('nestJS中的守卫',randomNum)
    return randomNum > 0.3 ? true : false
  }
}
