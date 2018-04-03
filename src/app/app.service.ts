import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }

  user: any = null;

  user_logged(): any{
    return this.user = {
      id:1,
      name:'Lucas Mangelo',
      tag:'@lucasmangelo'
    };
  }

}
