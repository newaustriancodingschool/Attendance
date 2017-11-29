webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_services/_functions/backendurl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL; });
var URL = "https://rc-check-in-backend.herokuapp.com/";
//# sourceMappingURL=backendurl.js.map

/***/ }),

/***/ "../../../../../src/app/_services/_functions/forms.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormsService = (function () {
    function FormsService(fb) {
        this.fb = fb;
        this.form = {};
    }
    FormsService.prototype.build = function (obj) {
        return this.fb.group(obj);
    };
    FormsService.prototype.group = function (object) {
        if (typeof object != 'object') {
            throw new Error('Invalid object. form can\'t be build');
        }
        for (var field in object) {
            if (Array.isArray(object[field]['validators'])) {
                this.form[object[field]["key"]] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](object[field]['defaultValue'], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose(object[field]['validators']));
            }
            else {
                this.form[object[field]["key"]] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](object[field]['defaultValue']);
            }
        }
        return this.build(this.form);
    };
    FormsService.prototype.set = function (object, updatedForm) {
        if (updatedForm === void 0) { updatedForm = null; }
        if (typeof object != 'object') {
            throw new Error('Invalid object. form can\'t be update');
        }
        if (typeof updatedForm != null) {
            for (var field in updatedForm) {
                object.controls[updatedForm[field]["key"]].setValue(updatedForm[field]['defaultValue']);
            }
        }
        return object;
    };
    FormsService.prototype.update = function (object, updatedForm) {
        if (updatedForm === void 0) { updatedForm = null; }
        if (typeof object != 'object') {
            throw new Error('Invalid object. form can\'t be update');
        }
        if (Array.isArray(updatedForm)) {
            if (typeof updatedForm != null) {
                for (var field in updatedForm) {
                    object.controls[updatedForm[field]["key"]].patchValue(updatedForm[field]['defaultValue']);
                }
            }
        }
        else {
            object.controls[updatedForm["key"]].patchValue(updatedForm['defaultValue']);
        }
        return object;
    };
    FormsService.prototype.reset = function (object) {
        if (typeof object != 'object') {
            throw new Error('Invalid object. form faild to reset!');
        }
        object.reset();
        return object;
    };
    FormsService.prototype.addField = function (myForm, newName, object) {
        myForm.addControl(newName, new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](object[0].defaultValue, object[0].validators));
        return myForm;
    };
    FormsService.prototype.removeField = function (myForm, fieldName) {
        if (!myForm.contains(fieldName))
            return myForm;
        myForm.removeControl(fieldName);
        return myForm;
    };
    return FormsService;
}());
FormsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object])
], FormsService);

var _a;
//# sourceMappingURL=forms.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/_functions/forms.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forms_service__ = __webpack_require__("../../../../../src/app/_services/_functions/forms.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__forms_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validators_service__ = __webpack_require__("../../../../../src/app/_services/_functions/validators.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__validators_service__["a"]; });


//# sourceMappingURL=forms.js.map

/***/ }),

/***/ "../../../../../src/app/_services/_functions/functions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backendurl__ = __webpack_require__("../../../../../src/app/_services/_functions/backendurl.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FunctionsService = (function () {
    function FunctionsService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__backendurl__["a" /* URL */];
    }
    FunctionsService.prototype.notify = function (data) {
        $.notify({
            // options
            icon: data.icon,
            title: "<b>" + data.title + "</b>",
            message: data.message,
            url: data.url || null,
            target: data.target || null
        }, {
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
    };
    FunctionsService.prototype.delay = function (callback, time) {
        if (time === void 0) { time = 1000; }
        if (typeof callback == 'function') {
            window.setTimeout(callback, time);
        }
        else {
            throw new Error('Delay parameters must be ( Callback function, number of Delay in ms)');
        }
    };
    ;
    FunctionsService.prototype.makeRequest = function (page, type, data) {
        if (page === void 0) { page = null; }
        if (type === void 0) { type = null; }
        if (data === void 0) { data = null; }
        // let params: URLSearchParams = new URLSearchParams();
        // params.set('json', data);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](), opt;
        var token = this.getToken();
        if (token)
            header.append("Authorization", "Basic " + this.getToken());
        if (type == "Post" || type == "Put") {
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/json");
            opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestOptions */]({
                headers: header,
                url: this.url + page,
                method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestMethod */][type],
                body: JSON.stringify(data)
                // search: params
            });
        }
        if (type == "Get") {
            header.append("Accept", "application/json");
            opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestOptions */]({
                headers: header,
                url: this.url + page,
                method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestMethod */][type]
            });
        }
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Request */](opt));
    };
    FunctionsService.prototype.getToken = function () {
        var token = window.localStorage.getItem('token') || window.sessionStorage.getItem('token');
        if (typeof token == 'string') {
            return token;
        }
        else {
            return false;
        }
    };
    FunctionsService.prototype.chooseImage = function (e, def) {
        var base64 = null;
        if (e.target.files && e.target.files[0] && e.target.files.length > 0) {
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            return new Promise(function (resolve, reject) {
                reader.onload = function (e) {
                    base64 = e.target['result'];
                    resolve(base64);
                };
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                resolve(def);
            });
        }
    };
    FunctionsService.prototype.getIndex = function (arrayObject, ofRow) {
        if (typeof arrayObject != 'object') {
            throw new Error('Invalid object. search index should be in object only');
        }
        for (var i = 0; i < arrayObject.length; i++) {
            for (var key in arrayObject[i]) {
                if (!ofRow.hasOwnProperty(key))
                    continue;
                if (arrayObject[i][key] == ofRow[key]) {
                    return i;
                }
            }
        }
        return null;
    };
    return FunctionsService;
}());
FunctionsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FunctionsService);

var _a;
//# sourceMappingURL=functions.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/_functions/validators.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorsService; });
var ValidatorsService = (function () {
    function ValidatorsService() {
    }
    ValidatorsService.maxLength = function (max) {
        return function (c) {
            return (c.value.length >= max) ? { "Max length exceeded": false } : null;
        };
    };
    ValidatorsService.minLength = function (min) {
        return function (c) {
            return (c.value.length >= min) ? null : { "Minimum length exceeded": false };
        };
    };
    ValidatorsService.required = function () {
        return function (c) {
            return (c.value.length) ? null : { "valid": false };
        };
    };
    return ValidatorsService;
}());

//# sourceMappingURL=validators.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_functions_service__ = __webpack_require__("../../../../../src/app/_services/_functions/functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(funs, router) {
        this.funs = funs;
        this.router = router;
    }
    AuthService.prototype.cash = function (key, data, isPermanent) {
        if (isPermanent === void 0) { isPermanent = false; }
        if (isPermanent) {
            window.localStorage.setItem(key, data);
        }
        else {
            window.sessionStorage.setItem(key, data);
        }
    };
    AuthService.prototype.clearCash = function () {
        window.localStorage.clear();
        window.sessionStorage.clear();
    };
    AuthService.prototype.getCashedOf = function (key) {
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
    };
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
    AuthService.prototype.login = function (data) {
        this.cash("token", btoa(data['username'] + ':' + data['password']), data.checkbox);
        return this.funs.makeRequest("login", "Post");
    };
    AuthService.prototype.getLoginData = function () {
        return this.funs.makeRequest("api/1/me", "Get");
    };
    AuthService.prototype.logout = function () {
        // document.cookie = "geercmssystem="+document.cookie.replace('geercmssystem=','')+"; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        // clearInterval(this.tokenLoop);
        this.clearCash();
        this.router.navigate(['login']);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__functions_functions_service__["a" /* FunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__functions_functions_service__["a" /* FunctionsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/checkattendence.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckattendencePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CheckattendencePipe = (function () {
    function CheckattendencePipe() {
    }
    CheckattendencePipe.prototype.transform = function (value, args) {
        return value ? 'CheckedIn' : 'CheckedOut';
    };
    return CheckattendencePipe;
}());
CheckattendencePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'checkattendence'
    })
], CheckattendencePipe);

//# sourceMappingURL=checkattendence.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/_services/globaldata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalDataService = (function () {
    function GlobalDataService() {
        this.global = {};
        this.objects_of_ids = {
            customer_id: null,
            site_id: null
        };
    }
    GlobalDataService.prototype.pushDate = function (key, data) {
        this.global[key] = data;
    };
    GlobalDataService.prototype.getFromGlobalData = function (arrgument, theObject) {
        if (arrgument === void 0) { arrgument = null; }
        if (theObject === void 0) { theObject = this.global; }
        if (arrgument == null || arrgument == '')
            return theObject;
        var result = null, obj = {}, args = arrgument.split('/');
        if (args[0] == "") {
            return theObject;
        }
        if (theObject instanceof Array) {
            for (var i = 0; i < theObject.length; i++) {
                if (Object.keys(theObject).indexOf(args[0]) > -1) {
                    args.splice(0, 1);
                    result = this.getFromGlobalData(args.join('/'), theObject[i]);
                }
                else {
                    result = this.getFromGlobalData(args.join('/'), theObject[i]);
                }
            }
        }
        else if (args[0] && args[0].charAt(0) == '!') {
            // debugger;
            var newArg = args[0].slice(1);
            for (var key in theObject) {
                if (!~key.indexOf(newArg)) {
                    obj[key] = theObject[key];
                }
            }
            return obj;
        }
        else {
            for (var key in theObject) {
                if (key == args[0]) {
                    args.splice(0, 1);
                    result = this.getFromGlobalData(args.join('/'), theObject[key]);
                }
            }
        }
        return result;
    };
    return GlobalDataService;
}());
GlobalDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GlobalDataService);

//# sourceMappingURL=globaldata.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/humanizetime.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HumanizetimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HumanizetimePipe = (function () {
    function HumanizetimePipe() {
    }
    HumanizetimePipe.prototype.transform = function (value, args) {
        if (value) {
            return window.moment.duration(value).humanize();
        }
        return 'Never';
    };
    return HumanizetimePipe;
}());
HumanizetimePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'humanizetime'
    })
], HumanizetimePipe);

//# sourceMappingURL=humanizetime.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/_services/requests.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_functions_service__ = __webpack_require__("../../../../../src/app/_services/_functions/functions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestsService = (function () {
    function RequestsService(funs) {
        this.funs = funs;
    }
    // Admin http requests
    RequestsService.prototype.getPeople = function (userID) {
        if (userID === void 0) { userID = ''; }
        return this.funs.makeRequest('people/' + userID + '?size=' + 75, 'Get');
    };
    RequestsService.prototype.getCheckin = function (checkinID) {
        if (checkinID === void 0) { checkinID = ''; }
        return this.funs.makeRequest('checkins/search/findByOrderByTimeDesc/' + checkinID + '?projection=log', 'Get');
    };
    RequestsService.prototype.updateStudentInfo = function (data) {
        return this.funs.makeRequest('people/' + data.id, 'Put', data);
    };
    // client http requests
    RequestsService.prototype.getCheckerInfo = function () {
        return this.funs.makeRequest('public/summary', 'Get');
    };
    return RequestsService;
}());
RequestsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__functions_functions_service__["a" /* FunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__functions_functions_service__["a" /* FunctionsService */]) === "function" && _a || Object])
], RequestsService);

var _a;
//# sourceMappingURL=requests.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/tolocaltime.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TolocaltimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TolocaltimePipe = (function () {
    function TolocaltimePipe() {
    }
    TolocaltimePipe.prototype.transform = function (value, args) {
        return window.moment(value).local().format("YYYY-MM-DD HH:mm:ss");
    };
    return TolocaltimePipe;
}());
TolocaltimePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'tolocaltime'
    })
], TolocaltimePipe);

//# sourceMappingURL=tolocaltime.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_globaldata_service__ = __webpack_require__("../../../../../src/app/_services/globaldata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_cp_cp_component__ = __webpack_require__("../../../../../src/app/components/cp/cp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_cp_adreports_reports_component__ = __webpack_require__("../../../../../src/app/components/cp/adreports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_cp_adhome_adhome_component__ = __webpack_require__("../../../../../src/app/components/cp/adhome/adhome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_tolocaltime_pipe__ = __webpack_require__("../../../../../src/app/_services/tolocaltime.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_checkattendence_pipe__ = __webpack_require__("../../../../../src/app/_services/checkattendence.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_humanizetime_pipe__ = __webpack_require__("../../../../../src/app/_services/humanizetime.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_home_clientcheckin_clientcheckin_component__ = __webpack_require__("../../../../../src/app/components/home/clientcheckin/clientcheckin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Normal pages


// Global services to store data

// Admin Page Components







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_cp_cp_component__["a" /* CpComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_cp_adreports_reports_component__["a" /* ReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_cp_adhome_adhome_component__["a" /* AdhomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__services_tolocaltime_pipe__["a" /* TolocaltimePipe */],
            __WEBPACK_IMPORTED_MODULE_13__services_checkattendence_pipe__["a" /* CheckattendencePipe */],
            __WEBPACK_IMPORTED_MODULE_14__services_humanizetime_pipe__["a" /* HumanizetimePipe */],
            __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_home_clientcheckin_clientcheckin_component__["a" /* ClientcheckinComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* APP_ROUTES_PROVIDER */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* JsonpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_globaldata_service__["a" /* GlobalDataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES_PROVIDER; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_cp_cp_component__ = __webpack_require__("../../../../../src/app/components/cp/cp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_cp_adreports_reports_component__ = __webpack_require__("../../../../../src/app/components/cp/adreports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cp_adhome_adhome_component__ = __webpack_require__("../../../../../src/app/components/cp/adhome/adhome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_clientcheckin_clientcheckin_component__ = __webpack_require__("../../../../../src/app/components/home/clientcheckin/clientcheckin.component.ts");

// Pages components






var myTitle = 'Attendance-';
var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_home_clientcheckin_clientcheckin_component__["a" /* ClientcheckinComponent */], data: { title: 'Home Page' } }
        ] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_1__components_cp_cp_component__["a" /* CpComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_cp_adhome_adhome_component__["a" /* AdhomeComponent */], data: { title: 'Admin-Panel' } },
            { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_2__components_cp_adreports_reports_component__["a" /* ReportsComponent */], data: { title: 'Admin-Reports' } },
        ] }
];
var APP_ROUTES_PROVIDER = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/cp/adhome/adhome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cp/adhome/adhome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n    <!-- Default panel contents -->\n    <div class=\"panel-heading\">Contral Panel</div>\n    <div class=\"panel-body\">\n        <p>\n            Hi this is Attendance System. Please select one of the category inside the menu.\n        </p>\n    </div>\n    <!-- <div class=\"clearfix\"></div> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/cp/adhome/adhome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdhomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdhomeComponent = (function () {
    function AdhomeComponent() {
    }
    AdhomeComponent.prototype.ngOnInit = function () {
    };
    return AdhomeComponent;
}());
AdhomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adhome',
        template: __webpack_require__("../../../../../src/app/components/cp/adhome/adhome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/cp/adhome/adhome.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdhomeComponent);

//# sourceMappingURL=adhome.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cp/adreports/reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".checkedIn{\r\n    color: green;\r\n}\r\n.checkedOut{\r\n    color: unset;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cp/adreports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n    <!-- Default panel contents -->\n    <div class=\"panel-heading\">Reports</div>\n    <div class=\"panel-body\">\n        <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n            <div class=\"panel panel-danger\">\n\n                <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n                    <h4 class=\"panel-title\">\n                        <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                    - Participants Information\n                                </a>\n                    </h4>\n                </div>\n                <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                    <div class=\"panel-body\">\n                        <table class=\"table table-hover\" *ngIf=\"peopleReportLoaded\">\n                            <thead>\n                                <tr class=\"active\">\n                                    <th>#</th>\n                                    <th>Name</th>\n                                    <th>Email</th>\n                                    <th>Slack Handle</th>\n                                    <th>User NFC ID</th>\n                                    <th>Options</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let person of peopleDate; let i = index\">\n                                    <th>{{i+1}}</th>\n                                    <th>{{person.name}}</th>\n                                    <th>{{person.email}}</th>\n                                    <th>{{person.slackHandle}}</th>\n                                    <th>{{person.uid}}</th>\n                                    <th>\n                                        <button [disabled]=\"!fieldsAreReady\" (click)=\"updatePersonInfo(person, i)\" type=\"button\" class=\"btn btn-warning btn-lg\" data-toggle=\"modal\" data-target=\"#updateUSerInfo\">\n                                            Update\n                                        </button>\n                                    </th>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"panel-group\" id=\"accordion2\" role=\"tablist\" aria-multiselectable=\"true\">\n            <div class=\"panel panel-danger\">\n\n                <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n                    <h4 class=\"panel-title\">\n                        <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n                                            - Check In\n                                            </a>\n                    </h4>\n                </div>\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                    <div class=\"panel-body\">\n                        <table class=\"table table-hover\" *ngIf=\"checkInReportLoaded\">\n                            <thead>\n                                <tr class=\"active\">\n                                    <th>#</th>\n                                    <th>Name</th>\n                                    <th>Check In Status</th>\n                                    <th>Duration</th>\n                                    <th>Time</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n\n                                <tr *ngFor=\"let check of checkinsData; let i = index\">\n                                    <th>{{i+1}}</th>\n                                    <th>{{check.name}}</th>\n                                    <th [ngClass]=\"{'checkedIn': check.checkedIn, 'checkedOut': !check.checkedIn}\">{{check.checkedIn | checkattendence}}</th>\n                                    <th>{{check.duration | humanizetime}}</th>\n                                    <th>{{check.time | tolocaltime}}</th>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"updateUSerInfo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <form [formGroup]=\"updatePersonData\" (ngSubmit)=\"sendNewPersonInfo(updatePersonData.value, updatePersonData.valid)\" class=\"form-horizontal\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>\n                </div>\n\n                <div class=\"modal-body\" *ngIf=\"fieldsAreReady\">\n                    <div class=\"form-group\"  *ngFor=\"let item of formArray\">\n                        <div *ngIf=\"item.key != 'id'\">\n                            <label for=\"name\" class=\"col-sm-2 control-label; let i = index\">{{item.key}}</label>\n                            <div class=\"col-sm-10\">\n                                <input [formControlName]=\"item.key\" type=\"text\" class=\"form-control\" [id]=\"item.key\" [placeholder]=\"item.key\">\n                                <small [hidden]=\"updatePersonData.controls[item.key].valid\">{{item.key}} required!</small>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n                <!-- <div class=\"modal-body\">\n                    <div class=\"form-group\">\n                        <label for=\"name\" class=\"col-sm-2 control-label\">Name</label>\n                        <div class=\"col-sm-10\">\n                            <input formControlName=\"name\" type=\"email\" class=\"form-control\" id=\"name\" placeholder=\"Name\">\n                            <small [hidden]=\"updatePersonData.controls.name.valid\">Name required!</small>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"Email\" class=\"col-sm-2 control-label\">Email</label>\n                        <div class=\"col-sm-10\">\n                            <input formControlName=\"email\" type=\"email\" class=\"form-control\" id=\"Email\" placeholder=\"Email\">\n                            <small [hidden]=\"updatePersonData.controls.email.valid\">Email required!</small>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"slackHandle\" class=\"col-sm-2 control-label\">Slack handle</label>\n                        <div class=\"col-sm-10\">\n                            <input formControlName=\"slackHandle\" type=\"text\" class=\"form-control\" id=\"slackHandle\" placeholder=\"Slack handle\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"uid\" class=\"col-sm-2 control-label\">User card ID</label>\n                        <div class=\"col-sm-10\">\n                            <input formControlName=\"uid\" type=\"text\" class=\"form-control\" id=\"uid\" placeholder=\"user card ID\">\n                            <small [hidden]=\"updatePersonData.controls.uid.valid\">User card ID required!</small>\n                        </div>\n                    </div>\n                    <div id=\"addItem\">\n\n                    </div>\n                </div> -->\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n<!-- <div class=\"clearfix\"></div> -->"

/***/ }),

/***/ "../../../../../src/app/components/cp/adreports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__ = __webpack_require__("../../../../../src/app/_services/_functions/functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_requests_service__ = __webpack_require__("../../../../../src/app/_services/requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_functions_forms__ = __webpack_require__("../../../../../src/app/_services/_functions/forms.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_globaldata_service__ = __webpack_require__("../../../../../src/app/_services/globaldata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { AuthService } from '../../../_services/auth.service';


var ReportsComponent = (function () {
    function ReportsComponent(fs, gs, funs, ar, router, req) {
        this.fs = fs;
        this.gs = gs;
        this.funs = funs;
        this.ar = ar;
        this.router = router;
        this.req = req;
        this.peopleReportLoaded = false;
        this.checkInReportLoaded = false;
        this.fieldsAreReady = false;
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formArray = [
            { "key": "id", "defaultValue": "-1" },
            { "key": "name", "defaultValue": "", "validators": [__WEBPACK_IMPORTED_MODULE_5__services_functions_forms__["b" /* ValidatorsService */].required()] },
            { "key": "email", "defaultValue": "", "validators": [__WEBPACK_IMPORTED_MODULE_5__services_functions_forms__["b" /* ValidatorsService */].required()] },
            { "key": "slackHandle", "defaultValue": "" },
            { "key": "uid", "defaultValue": "", "validators": [__WEBPACK_IMPORTED_MODULE_5__services_functions_forms__["b" /* ValidatorsService */].required()] }
        ];
        this.updatePersonData = this.fs.group(this.formArray);
        // this.updatePersonData = this.fs.addField(this.updatePersonData, "anothor", [ {"defaultValue":"", "validators":[ValidatorsService.required()]} ] );
        this.fieldsAreReady = true;
        this.req.getPeople().subscribe(function (res) {
            _this.peopleDate = res.json()._embedded.people;
            _this.gs.pushDate('peopleData', _this.peopleDate);
            _this.peopleReportLoaded = true;
        }, function (err) {
            _this.funs.notify({
                type: 'danger',
                icon: 'fa fa-exclamation-triangle',
                title: 'Errer',
                message: err.json()
            });
        });
        this.req.getCheckin().subscribe(function (res) {
            _this.checkinsData = res.json()._embedded.checkins;
            _this.gs.pushDate('checkinsData', _this.checkinsData);
            _this.checkInReportLoaded = true;
        }, function (err) {
            _this.funs.notify({
                type: 'danger',
                icon: 'fa fa-exclamation-triangle',
                title: 'Errer',
                message: err.json()
            });
        });
    };
    ReportsComponent.prototype.updatePersonInfo = function (data, index) {
        $('#myModalLabel').text('Update user info');
        this.updateRowID = index;
        this.updatePersonData = this.fs.update(this.updatePersonData, [
            { "key": "id", "defaultValue": data.id },
            { "key": "name", "defaultValue": data.name },
            { "key": "email", "defaultValue": data.email },
            { "key": "slackHandle", "defaultValue": data.slackHandle },
            { "key": "uid", "defaultValue": data.uid }
        ]);
    };
    ReportsComponent.prototype.sendNewPersonInfo = function (values, isValid) {
        var _this = this;
        if (isValid) {
            $('#updateUSerInfo').modal('hide');
            this.req.updateStudentInfo(values).subscribe(function (res) {
                var newPersonData = res.json();
                _this.peopleDate[_this.updateRowID] = newPersonData;
            }, function (err) {
                _this.funs.notify({
                    type: 'danger',
                    icon: 'fa fa-exclamation-triangle',
                    title: 'Errer',
                    message: err.json().message
                });
            });
        }
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-reports',
        template: __webpack_require__("../../../../../src/app/components/cp/adreports/reports.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/cp/adreports/reports.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__["a" /* FunctionsService */], __WEBPACK_IMPORTED_MODULE_4__services_requests_service__["a" /* RequestsService */], __WEBPACK_IMPORTED_MODULE_5__services_functions_forms__["a" /* FormsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_functions_forms__["a" /* FormsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_functions_forms__["a" /* FormsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_globaldata_service__["a" /* GlobalDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_globaldata_service__["a" /* GlobalDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__["a" /* FunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__["a" /* FunctionsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_requests_service__["a" /* RequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_requests_service__["a" /* RequestsService */]) === "function" && _f || Object])
], ReportsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cp/cp.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cp/cp.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <nav class=\"navigation\">\r\n      <div class=\"nav-brand-title\">\r\n        <div class=\"content-center\">\r\n          <div class=\"brand\">\r\n            <a [routerLink]=\"['','admin']\">\r\n                                  <img alt=\"Brand\" src=\"../../../../assets/img/logo/logo.png\">  \r\n                            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"menu-items\">\r\n        <div class=\"hamburger\">\r\n          <a href=\"#\">\r\n                            <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n                        </a>\r\n        </div>\r\n        <div class=\"welcome\" *ngIf=\"isLoaded\">\r\n          <span>Welcome&nbsp;,&nbsp;</span><span class=\"caption\">Admin</span>\r\n        </div>\r\n        <div class=\"bg-brightness\"></div>\r\n      </div>\r\n      <div class=\"fixed-menu\">\r\n        <h3>Navigation</h3>\r\n        <ul>\r\n          <li><a [routerLink]=\"['', 'admin']\"><i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i> Control Panel</a></li>\r\n          <li><a [routerLink]=\"['', 'admin', 'reports']\"><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i> Reports</a></li>\r\n          <li><a href=\"#logout\" (click)=\"logout($event)\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log Out</a></li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"clearfix\"></div>\r\n<div class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/cp/cp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__ = __webpack_require__("../../../../../src/app/_services/_functions/functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_requests_service__ = __webpack_require__("../../../../../src/app/_services/requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CpComponent = (function () {
    function CpComponent(auth, req, funs, router) {
        this.auth = auth;
        this.req = req;
        this.funs = funs;
        this.router = router;
        this.isLoaded = true;
    }
    CpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navBar = $('.navbar .navigation .hamburger a');
        this.burgger = $('.navbar .navigation .fixed-menu');
        this.bg = $('.navbar .bg-brightness');
        this.funs.makeRequest("login", "Post").subscribe(function (res) {
            // Free play around
        }, function (err) {
            _this.router.navigate(['']);
        });
    };
    CpComponent.prototype.logout = function (e) {
        this.auth.logout();
        return false;
    };
    CpComponent.prototype.onClick = function (e) {
        e.stopPropagation();
        var el = $(e.target || e.touches[0].target);
        if (el.is('.navigation .hamburger a i') || el.is('.navigation .hamburger a')) {
            if (!this.burgger.hasClass('in')) {
                this.showMenu();
                return false;
            }
            else if (this.burgger.hasClass('in')) {
                this.hide();
                return false;
            }
        }
        else {
            if (el.closest('.fixed-menu').is('.fixed-menu')) {
                if (el.is('.dropdown') || el.closest('.dropdown').is('.dropdown')) {
                    var menu = el.closest('.dropdown');
                    menu.find(' > .triangle').toggleClass('collapseList');
                    if (menu.next().is('.menu-list'))
                        menu.next().slideToggle();
                    return false;
                }
                else {
                    this.hide();
                }
            }
            else {
                this.hide();
            }
        }
    };
    CpComponent.prototype.showMenu = function () {
        this.burgger.removeClass('out').addClass('in');
        this.bg.fadeTo(300, 0.6);
        $('body').css({ margin: '0', height: "100%", overflow: "hidden" });
    };
    CpComponent.prototype.hide = function () {
        this.burgger.removeClass('in').addClass('out');
        this.bg.fadeOut(300);
        $('body').css({ margin: '0', height: "auto", overflow: "auto" });
    };
    return CpComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CpComponent.prototype, "onClick", null);
CpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cp',
        template: __webpack_require__("../../../../../src/app/components/cp/cp.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/cp/cp.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__["a" /* FunctionsService */], __WEBPACK_IMPORTED_MODULE_3__services_requests_service__["a" /* RequestsService */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_requests_service__["a" /* RequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_requests_service__["a" /* RequestsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__["a" /* FunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__["a" /* FunctionsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], CpComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=cp.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/clientcheckin/clientcheckin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* td.checkerStatus .notActive{\r\n    width: 15px;\r\n    height: 15px;\r\n    border: 1px solid black;\r\n    background: #333;\r\n    border-radius: 50%;\r\n}\r\ntd.checkerStatus .active{\r\n    width: 15px;\r\n    height: 15px;\r\n    border: 1px solid green;\r\n    background: greenyellow;\r\n    border-radius: 50%;\r\n}\r\n */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/clientcheckin/clientcheckin.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"panel panel-primary\">\n    <!-- Default panel contents -->\n    <div class=\"panel-heading\">Checker report</div>\n    <div class=\"panel-body\">\n        <div class=\"alert alert-success\" role=\"alert\"><strong>Next system update in <span>{{updateCounter}}</span> seconds...</strong></div>\n        <table id=\"participant-check-in\" class=\"table table-hover\">\n            <thead>\n                <tr class=\"active\">\n                    <th data-field=\"#\" data-sortable=\"true\">#</th>\n                    <th data-field=\"Name\" data-sortable=\"true\">Name</th>\n                    <th data-field=\"Status\" data-sortable=\"true\">Status</th>\n                    <th data-field=\"Duration\" data-sortable=\"true\">Duration</th>\n                </tr>\n            </thead>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/clientcheckin/clientcheckin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientcheckinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__ = __webpack_require__("../../../../../src/app/_services/_functions/functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_requests_service__ = __webpack_require__("../../../../../src/app/_services/requests.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientcheckinComponent = (function () {
    function ClientcheckinComponent(router, funs, req) {
        this.router = router;
        this.funs = funs;
        this.req = req;
        this.isLoaded = false;
        this.updateCounter = 10;
    }
    ClientcheckinComponent.prototype.ngOnInit = function () {
        this.table = $('#participant-check-in').DataTable({
            responsive: true,
            pageLength: 50,
            order: [[1, 'desc'], [2, 'asc']],
            columns: [
                { title: "#", data: "#" },
                { title: "Status", data: "checkedIn" },
                { title: "Duration", data: "lastDuration" },
                { title: "Name", data: "name" }
            ],
            columnDefs: [
                {
                    className: "checkerStatus",
                    render: function (data, type) {
                        if (type === 'display' || type === 'filter') {
                            return (data) ? "<div class=\"active\"\n                        style=\"width: 15px;\n                        height: 15px;\n                        border: 1px solid green;\n                        background: greenyellow;\n                        border-radius: 50%;\"></div>" : "<div class=\"notActive\" \n                        style=\"width: 15px;\n                        height: 15px;\n                        border: 1px solid black;\n                        background: #333;\n                        border-radius: 50%;\"></div>";
                        }
                        return data;
                    },
                    targets: 1
                }, {
                    render: function (data, type) {
                        if (type === 'display' || type === 'filter') {
                            if (data) {
                                return window.moment.duration(data).humanize();
                            }
                            return 'Never';
                        }
                        return data;
                    },
                    targets: 2
                }
            ]
        });
        this.checkerStatus();
        this.startCounting();
    };
    ClientcheckinComponent.prototype.checkerStatus = function () {
        var _this = this;
        this.req.getCheckerInfo().subscribe(function (res) {
            var respond = res.json();
            // respond.sort(function(x, y) {
            //     // true values first
            //     return (x.checkedIn === y.checkedIn)? 0 : x.checkedIn? -1 : 1;
            //     // false values first
            //     // return (x.checkedIn === y.checkedIn)? 0 : x.checkedIn? 1 : -1;
            // });
            _this.DrawTable(respond);
            // $('#participant-check-in').DataTable();
        }, function (err) {
            _this.router.navigate(['login']);
            _this.funs.notify({
                type: 'danger',
                icon: 'fa fa-exclamation-triangle',
                title: 'Errer',
                message: "Somthing went wrong!"
            });
        });
    };
    ClientcheckinComponent.prototype.DrawTable = function (arrObjects) {
        // let newArray = [];
        var index = 0;
        for (var id in arrObjects) {
            if (arrObjects[id]['lastDuration']) {
                arrObjects[id]['lastDuration'] = window.moment.duration(arrObjects[id]['lastDuration']).asMilliseconds();
                arrObjects[id]['#'] = ++index;
            }
        }
        // this.checkerSummary = arrObjects;
        console.log(arrObjects);
        this.table.clear().draw();
        this.table.rows.add(arrObjects); // Add new data
        this.table.columns.adjust().draw(); // Redraw the DataTable
        // $('#participant-check-in').DataTable({
        //   data: arrObjects,
        //   columns: [
        //     {title: "Status", data: "checkedIn"},
        //     {title: "Duration", data: "lastDuration"},
        //     {title: "Name", data: "name"}
        //   ]
        // });
    };
    ClientcheckinComponent.prototype.startCounting = function () {
        var _this = this;
        this.iteration = setInterval(function () {
            if (_this.updateCounter == 0) {
                _this.updateCounter = 10;
                _this.checkerStatus();
            }
            else {
                _this.updateCounter--;
            }
        }, 1000);
    };
    ClientcheckinComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.iteration);
        this.table.destroy();
    };
    return ClientcheckinComponent;
}());
ClientcheckinComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-clientcheckin',
        template: __webpack_require__("../../../../../src/app/components/home/clientcheckin/clientcheckin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/clientcheckin/clientcheckin.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__["a" /* FunctionsService */], __WEBPACK_IMPORTED_MODULE_3__services_requests_service__["a" /* RequestsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__["a" /* FunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__["a" /* FunctionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_requests_service__["a" /* RequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_requests_service__["a" /* RequestsService */]) === "function" && _c || Object])
], ClientcheckinComponent);

var _a, _b, _c;
//# sourceMappingURL=clientcheckin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <nav class=\"navigation\">\n        <div class=\"nav-brand-title\">\n          <div class=\"content-center\">\n            <div class=\"brand\">\n              <a [routerLink]=\"['']\">\n                                    <img alt=\"Brand\" src=\"../../../../assets/img/logo/logo.png\">  \n                              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"menu-items\">\n          <div class=\"hamburger\">\n            <a href=\"#\">\n                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n            </a>\n          </div>\n          <div class=\"welcome\" *ngIf=\"isLoaded\">\n            <span>Welcome&nbsp;,&nbsp;</span><span class=\"caption\">Student</span>\n          </div>\n          <div class=\"bg-brightness\"></div>\n        </div>\n        <div class=\"fixed-menu\">\n          <h3>Navigation</h3>\n          <ul>\n            <li class=\"dropdown\"><a href=\"#\"><span class=\"triangle\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i> Settings</span></a></li>\n            <ul class=\"menu-list\">\n              <li *ngIf=\"!isAdmin\"><a [routerLink]=\"['login']\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log In</a></li>\n              <li *ngIf=\"isAdmin\"><a [routerLink]=\"['','admin']\"><i class=\"fa fa-unlock\" aria-hidden=\"true\"></i> Control Panel</a></li>\n              <li *ngIf=\"isAdmin\"><a href=\"#logout\" (click)=\"logout($event)\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log Out</a></li>\n            </ul>\n          </ul>\n        </div>\n      </nav>\n    </div>\n  </nav>\n\n  <div class=\"clearfix\"></div>\n  <div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__ = __webpack_require__("../../../../../src/app/_services/_functions/functions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(auth) {
        this.auth = auth;
        this.isLoaded = true;
        this.isLoggedIn = false;
        this.isAdmin = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.navBar = $('.navbar .navigation .hamburger a');
        this.burgger = $('.navbar .navigation .fixed-menu');
        this.bg = $('.navbar .bg-brightness');
        this.isLoggedIn = this.auth.getCashedOf('token');
        if (this.isLoggedIn) {
            this.isAdmin = true;
        }
    };
    HomeComponent.prototype.logout = function (e) {
        this.auth.logout();
        return false;
    };
    HomeComponent.prototype.onClick = function (e) {
        e.stopPropagation();
        var el = $(e.target || e.touches[0].target);
        if (el.is('.navigation .hamburger a i') || el.is('.navigation .hamburger a')) {
            if (!this.burgger.hasClass('in')) {
                this.showMenu();
                return false;
            }
            else if (this.burgger.hasClass('in')) {
                this.hide();
                return false;
            }
        }
        else {
            if (el.closest('.fixed-menu').is('.fixed-menu')) {
                if (el.is('.dropdown') || el.closest('.dropdown').is('.dropdown')) {
                    var menu = el.closest('.dropdown');
                    menu.find(' > .triangle').toggleClass('collapseList');
                    if (menu.next().is('.menu-list'))
                        menu.next().slideToggle();
                    return false;
                }
                else {
                    this.hide();
                }
            }
            else {
                this.hide();
            }
        }
    };
    HomeComponent.prototype.showMenu = function () {
        this.burgger.removeClass('out').addClass('in');
        this.bg.fadeTo(300, 0.6);
        $('body').css({ margin: '0', height: "100%", overflow: "hidden" });
    };
    HomeComponent.prototype.hide = function () {
        this.burgger.removeClass('in').addClass('out');
        this.bg.fadeOut(300);
        $('body').css({ margin: '0', height: "auto", overflow: "auto" });
    };
    return HomeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HomeComponent.prototype, "onClick", null);
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_functions_functions_service__["a" /* FunctionsService */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n  <div class=\"container-fluid\">\n    <div class=\"col-md-6 col-md-offset-3 text-center\">\n\n      <!--Start Login section-->\n      <div class=\"login\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Log In</h3>\n          </div>\n\n          <div class=\"panel-body\">\n            <div class=\"panel-body\">\n              <form [formGroup]=\"loginForm\" (ngSubmit)=\"loggin(loginForm.value, loginForm.valid)\" class=\"form-horizontal\" id=\"login\">\n\n                <div class=\"form-group\">\n                  <i class=\"fa fa-users fa-5x\"></i>\n\n                  <div class=\"clearfix margin-top\"></div>\n\n                  <label for=\"username\" class=\"col-sm-1 control-label\"><i class=\"fa fa-user fa-2x\"></i></label>\n\n                  <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" formControlName=\"username\" id=\"username\" placeholder=\"Username\">\n                    <small [hidden]=\"!submitted || loginForm.controls.username.valid\" style=\"color:red;\">Username required!</small>\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label for=\"Password\" class=\"col-sm-1 control-label\"><i class=\"fa fa-lock fa-2x\"></i></label>\n\n                  <div class=\"col-sm-10\">\n                    <input type=\"password\" class=\"form-control\" formControlName=\"password\" name=\"password\" id=\"Password\" placeholder=\"Password\">\n                    <small [hidden]=\"!submitted || loginForm.controls.password.valid\" style=\"color:red;\">Password required!</small>\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <div class=\"btn-left col-sm-offset-1 col-sm-11\">\n                    <div class=\"checkbox\">\n                      <label>\n                        <input formControlName=\"checkbox\" type=\"checkbox\">&nbsp;Remember me\n                      </label>\n                    </div>\n                  </div>\n                </div>\n                \n                <div *ngIf=\"loading\" class=\"log-result col-lg-12\" style=\"border-radius: 50px; margin-bottom: 10px;background: #999; color: darkred\">\n                  <i class='fa fa-cog fa-2x fa-spin fa-fw'></i>\n                  <h3 style='color:darkred; display:inline-block'>Loading...</h3>\n                </div>\n\n                <div class=\"form-group\">\n                  <div class=\"btn-left col-sm-12\">\n                    <input [disabled]=\"!loginForm.valid\" type=\"submit\" class=\"login-btn btn btn-primary\" value=\"Log In\">\n                  </div>\n                </div>\n              </form>\n\n            </div>\n          </div>\n\n          <div class=\"panel-footer\"><i class=\"fa fa-warning\" style=\"color: red\"></i>&nbsp;&nbsp;Click <a [routerLink]=\"['']\">here</a> to return back home\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_functions_forms__ = __webpack_require__("../../../../../src/app/_services/_functions/forms.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__ = __webpack_require__("../../../../../src/app/_services/_functions/functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__ = __webpack_require__("../../../../../src/app/_services/globaldata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(funs, fs, auth, router, gds) {
        this.funs = funs;
        this.fs = fs;
        this.auth = auth;
        this.router = router;
        this.gds = gds;
        this.submitted = false;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.auth.clearCash();
        this.loginForm = this.fs.group([
            { "key": "username", "defaultValue": "", "validators": [__WEBPACK_IMPORTED_MODULE_2__services_functions_forms__["b" /* ValidatorsService */].required()] },
            { "key": "password", "defaultValue": "", "validators": [__WEBPACK_IMPORTED_MODULE_2__services_functions_forms__["b" /* ValidatorsService */].required()] },
            { "key": "checkbox", "defaultValue": false }
        ]);
    };
    LoginComponent.prototype.loggin = function (data, isValid) {
        var _this = this;
        this.submitted = true;
        if (isValid) {
            this.loading = true;
            this.auth.login(data).subscribe(function (res) {
                _this.funs.notify({ type: 'success',
                    icon: 'fa fa-flag',
                    title: 'Login Status',
                    message: "Welcome, <i>Admin, you have successfuly loggedin</i>" });
                _this.loading = false;
                // this.gds.pushDate("userLogin", res.json());
                _this.funs.delay(function () {
                    _this.router.navigate(['', 'admin']);
                }, 2500);
            }, function (err) {
                window.localStorage.clear();
                window.sessionStorage.clear();
                _this.funs.notify({ type: 'danger',
                    icon: 'fa fa-exclamation-triangle',
                    title: 'Login Status',
                    message: "Invalid username and password. Please try again" });
                _this.loading = false;
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__["a" /* FunctionsService */], __WEBPACK_IMPORTED_MODULE_2__services_functions_forms__["a" /* FormsService */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__["a" /* FunctionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_functions_functions_service__["a" /* FunctionsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_functions_forms__["a" /* FormsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_functions_forms__["a" /* FormsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__["a" /* GlobalDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__["a" /* GlobalDataService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map