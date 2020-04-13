import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import * as Joi from '@hapi/joi'
@Injectable()
export class UserPipe implements PipeTransform {
  private schema;
  constructor(schema) {
    this.schema = schema
  }
  transform(value: any, metadata: ArgumentMetadata) {
    // console.log(Joi)
    // http://localhost:3000/pipsuser?name=zhangsan false

    // http://localhost:3000/pipsuser?name=zhangsan&age=20 true
    const { error } = this.schema.validate(value)
    // value 可以理解为get/post请求传递的值
    // metadata 可以理解为一种类型
    console.log(value, '管道')
    // console.log(error)
    // 验证不通过时返回
    if (error) {
      return { 'success': false }
    }
    return value;
  }
}
