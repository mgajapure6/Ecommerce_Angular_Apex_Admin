import { Injectable } from '@angular/core';
import * as web_url from './appVar';

@Injectable()
export class RestWebServiceUrlService {

  public mainUrl :string = 'http://localhost:7070/ecom_api/';

  constructor() {

   }

  getLoginUrl() : string{
    return this.mainUrl+'/user_api/userLogin';
  }

}
