import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpErrorResponse } from '@angular/common/http';
// import { Http, Headers, RequestOptions, RequestMethod, Request, URLSearchParams  } from '@angular/http';
import { environment } from '../../../environments/environment';
import { catchError, retry } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

declare var $: any , window: any;
@Injectable()
export class FunctionsService {
  public url = environment.backendUrl;

  constructor(
    private title: Title,
    private http: HttpClient
  ) {}
  
  notify(data){
      $.notify({
      // options
      icon: data.icon,
      title: "<b>"+data.title+"</b>",
      message: data.message,
      url: data.url || null,
      target: data.target || null
    },{
      // settings
      element: 'body',
      position: null,
      type: data.type,
      allow_dismiss: true,
      newest_on_top: false,
      showProgressbar: false,
      placement: {
        from: "bottom",
        align: "left"
      },
      offset: 20,
      spacing: 10,
      z_index: 1031,
      delay: 5000,
      timer: 1000,
      url_target: '_blank',
      mouse_over: 'pause',
      animate: {
        enter: 'animated fadeInUp',
        exit: 'animated fadeOutDown'
      },
      onShow: null,
      onShown: null,
      onClose: null,
      onClosed: null,
      icon_type: 'class',
      template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title">{1}</span></br> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
      '</div>' 
    });
  }
  showErrorNote(error: any) {
    this.notify({
        type: 'danger',
        icon: 'fa fa-exclamation-triangle',
        title: 'Error!',
        message: error.message
    });
  }
  showSuccessNote(message) {
    this.notify({
        type: 'success',
        icon: 'fa fa-flag',
        title: 'Login Status',
        message: message
    });
  }

  delay(callback, time:number = 1000){
    if(typeof callback == 'function'){
      window.setTimeout(callback, time);
    }else{
      throw new Error('Delay parameters must be ( Callback function, number of Delay in ms)');
    }
  }

  pageTitle(activeRoute: any) {
    this.title.setTitle( activeRoute.snapshot.data['title'] );
  }
  makeRequest(page = null, type = null, data = null, resType: string = null) {
    // let params: URLSearchParams = new URLSearchParams();
    // params.set('json', data);
    let headers = new HttpHeaders();
    let requestOptions, token = this.getToken();
    if (token) {
      headers = headers.set('Authorization', 'Basic ' + token );
    }
    headers = headers.set('Accept', 'application/json');
    if (type === 'Post' || type === 'Put' || type === 'Patch') {
      headers = headers.set('Content-Type', 'application/json');
      requestOptions = {
        headers: headers,
        body: JSON.stringify(data),
        responseType: !resType ? 'json' : 'text'
      };
    } else if (type === 'Get' || type === 'Delete') {
      requestOptions = {
        headers: headers,
        responseType: !resType ? 'json' : 'text'
      };
    }
    return this.http.request(type, this.url + page, requestOptions);
    // return this.http.request(requestOptions ).pipe( retry(3), catchError(err));
  }
  // private handleError(error: HttpErrorResponse) {
  //     if (error.error instanceof ErrorEvent) {
  //       // A client-side or network error occurred. Handle it accordingly.
  //       console.error('An error occurred:', error.error.message);
  //     } else {
  //       // The backend returned an unsuccessful response code.
  //       // The response body may contain clues as to what went wrong,
  //       console.error(
  //         `Backend returned code ${error.status}, ` +
  //         `body was: ${error.error}`);
  //     }
  //     // return an ErrorObservable with a user-facing error message
  //     return new ErrorObservable(
  //       'Something bad happened; please try again later.');
  // }
  getToken():any {
    let token = window.localStorage.getItem('token') || window.sessionStorage.getItem('token');
    if(typeof token == 'string'){
        return token;
      }else{
        return false;
      }
  }

  chooseImage(e, def) { // e is the input type="file" | def default vaalue;
    let base64 = null;
    if (e.target.files && e.target.files[0] && e.target.files.length > 0) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      return new Promise((resolve, reject) => {
        reader.onload = (e) => {
          base64 = e.target['result'];
          resolve(base64);
        };
      });
    } else {
      return new Promise((resolve, reject) => {
        resolve(def);
      });
    }
  }

  getIndex(arrayObject:any, ofRow:any){
    if(typeof arrayObject != 'object'){
      throw new Error('Invalid object. search index should be in object only');
    }
    for(let i =0; i< arrayObject.length; i++){
      for(let key in arrayObject[i]){
        if(!ofRow.hasOwnProperty(key)) continue;
        if(arrayObject[i][key] == ofRow[key]){
          return i;
        }
      }
    }
    return null;
  }

}
