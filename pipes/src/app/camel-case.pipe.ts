import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
})
export class CamelCasePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    let palavras = value.split(' ');
    let result: string[] = [];

    palavras.map((x:string) => {
      result.push(x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
      return result
    })

    return result.join(' ');
  }
}
