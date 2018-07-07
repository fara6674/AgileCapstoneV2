import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegisterService {

  BASE_API='http://localhost:8080/api/';

  API_GET = 'users';
  API_POST = 'user';
  API_REGISTER_POST = 'register';

  constructor(private http: HttpClient) {   }


  save(user: any): Observable<any> {

    console.log("SERVICE TEST");
    let result: Observable<Object>;
    if (user.id > 0) {
   
      result = this.http.post(this.BASE_API + this.API_REGISTER_POST, user);
    }
    return result;
  }


}
