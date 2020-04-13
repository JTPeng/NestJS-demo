import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // value 可以理解为get/post请求传递的值
    // metadata 可以理解为一种类型
    console.log(value,'管道')
    return value;
  }
}
