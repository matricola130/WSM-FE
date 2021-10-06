import { Injectable } from '@angular/core';
import {LoginModel} from "../model/login-model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Array<{}> | undefined;
  token: number = 0;
  tokenDetails: string | null | undefined;

  constructor() {
    this.userData = [{
      email: 'dgettatelli@gmail.com', password: 'password'
    }]
  }

  setToken() {
    this.token = new Date().getTime();
    localStorage.setItem('token',JSON.stringify(this.token));
  }

  validateUserToken() {
    this.tokenDetails = localStorage.getItem('token');

    return this.tokenDetails != null;
  }

  validateUserDetails(user: LoginModel) {
    console.log("userModel: ", user);
    let _userList = this.userData;
    if(_userList != null)
      for(let i = 0; i < _userList?.length; i++) {
        if(user.email != undefined && user.password != undefined) {
          console.log("userList: ", _userList[i]);
          // @ts-ignore
          if (user.email.toLowerCase() == _userList[i].email.toLowerCase() && user.password.toLowerCase() == _userList[i].password.toLowerCase()) {
            return true;
          }
        }
      }
    return false;
  }

  logout() {
    localStorage.clear();
  }

}
