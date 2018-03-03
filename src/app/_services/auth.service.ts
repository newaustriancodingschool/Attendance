import { Injectable } from '@angular/core';
import { FunctionsService } from './_functions/functions.service';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/Rx';
// import 'rxjs/add/operator/map'

declare var CryptoJS: any;
@Injectable()
export class AuthService {


  constructor(private funs: FunctionsService, private router: Router) {
  }

  cash(key: string, data: any, isPermanent: boolean = false){
    if (isPermanent) {
      window.localStorage.setItem( key , data );
    } else {
      window.sessionStorage.setItem( key , data );
    }
  }
  clearCash() {
    window.localStorage.clear();
    window.sessionStorage.clear();
  }
  getCashedOf(key:string): any {
    return window.localStorage.getItem(key) || window.sessionStorage.getItem(key);
    // try{
    //   data = JSON.parse( data );
    // }catch(e){
    //   console.log(e);
    // }
    // if(typeof data == undefined){
    //   return false
    // }else{
    //   return data;
    // }
  }

  // resetCashedToken():any {
  //   let token = this.getCashedOf('token');
  //   this.clearCash();
  //   if(typeof token != undefined && token != null){
  //     return token;
  //   }else{
  //     this.router.navigate(['login']);
  //     return false;
  //   }
  // }

  login(data: any) {
    this.cash('token', btoa(data['username'] + ':' + data['password']), data.checkbox);
    return this.funs.makeRequest('login', 'Post', null, 'text');
  }
  getLoginData() {
    return this.funs.makeRequest("api/1/me", "Get");
  }


  logout(): void {    // clear token remove user from local storage to log user out
    // document.cookie = "geercmssystem="+document.cookie.replace('geercmssystem=','')+"; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    // clearInterval(this.tokenLoop);
    this.clearCash();
    this.router.navigate(['login']);
  }
  
  //=========================== Sign in Page ========================
  

  // refreshToken(){
  //   this.tokenLoop = setInterval(() => {
  //     this.renewToken();
  //   }, 10000);
  // }

  // renewToken(){
  //   if(this.checkCradentials()){
  //     console.log('hi');
  //     let token = window.localStorage.getItem('token');
  //     let head = new Headers({ 'Accept': 'application/json' });
  //     head.append("Authorization", JSON.stringify({"token": token }));
  //     //this.http.post('http://10.0.0.200/PHP/cms/test/_functions/renew_token.php','', {headers: head}).subscribe(
  //     this.http.post('http://localhost:8888/PHP/angular2Backend/_functions/renew_token.php','', {headers: head}).subscribe(
  //       (res) => {
  //         if(typeof res.json().error == 'string' && res.json().error != '') {
  //           clearInterval(this.tokenLoop);
  //           window.localStorage.setItem('error', res.json().error);
  //           this.error.errorMsg = localStorage.getItem('error');
  //           this.router.navigate(['login']);
  //         }else{
  //           localStorage.removeItem('error');
  //           this.error.errorMsg = null;
  //         }
  //         window.localStorage.setItem('token', res.json().token);
  //       });
  //   }
  // }

}
