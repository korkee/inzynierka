webpackJsonp([1,4],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(149);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomService = (function () {
    function RoomService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.domain = this.authService.domain;
    }
    RoomService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken();
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken
            })
        });
    };
    // Function to create a new room post
    RoomService.prototype.newRoom = function (room) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.post(this.domain + 'rooms/newRoom', room, this.options).map(function (res) { return res.json(); });
    };
    // Function to get all rooms from the database
    RoomService.prototype.getAllRooms = function () {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + 'rooms/allRooms', this.options).map(function (res) { return res.json(); });
    };
    // Function to get the room using the id
    RoomService.prototype.getSingleRoom = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + 'rooms/singleRoom/' + id, this.options).map(function (res) { return res.json(); });
    };
    // Function to edit/update room post
    RoomService.prototype.editRoom = function (room) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.put(this.domain + 'rooms/updateRoom/', room, this.options).map(function (res) { return res.json(); });
    };
    // Function to delete a room
    RoomService.prototype.deleteRoom = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.delete(this.domain + 'rooms/deleteRoom/' + id, this.options).map(function (res) { return res.json(); });
    };
    // Function to like a room post
    RoomService.prototype.likeRoom = function (id) {
        var roomData = { id: id };
        return this.http.put(this.domain + 'rooms/likeRoom/', roomData, this.options).map(function (res) { return res.json(); });
    };
    // Function to dislike a room post
    RoomService.prototype.dislikeRoom = function (id) {
        var roomData = { id: id };
        return this.http.put(this.domain + 'rooms/dislikeRoom/', roomData, this.options).map(function (res) { return res.json(); });
    };
    // Function to dislike a room post
    RoomService.prototype.reserve = function (id) {
        var roomData = { id: id };
        return this.http.put(this.domain + 'rooms/reserve/', roomData, this.options).map(function (res) { return res.json(); });
    };
    RoomService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _b) || Object])
    ], RoomService);
    return RoomService;
    var _a, _b;
}());
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/room.service.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
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
    function AuthService(http) {
        this.http = http;
        // domain = "http://localhost:3000/";
        this.domain = ""; // Development Domain - Not Needed in Production
    }
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken
            })
        });
    };
    // Function to get token from client local storage
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token'); // Get token and asssign to variable to be used elsewhere
    };
    // Function to register user accounts
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + 'authentication/register', user).map(function (res) { return res.json(); });
    };
    // Function to check if username is taken
    AuthService.prototype.checkUsername = function (username) {
        return this.http.get(this.domain + 'authentication/checkUsername/' + username).map(function (res) { return res.json(); });
    };
    // Function to check if e-mail is taken
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.domain + 'authentication/checkEmail/' + email).map(function (res) { return res.json(); });
    };
    // Function to login user
    AuthService.prototype.login = function (user) {
        return this.http.post(this.domain + 'authentication/login', user).map(function (res) { return res.json(); });
    };
    // Function to logout
    AuthService.prototype.logout = function () {
        this.authToken = null; // Set token to null
        this.user = null; // Set user to null
        localStorage.clear(); // Clear local storage
    };
    // Function to store user's data in client local storage
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token); // Set token in local storage
        localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
        this.authToken = token; // Assign token to be used elsewhere
        this.user = user; // Set user to be used elsewhere
    };
    // Function to get user's profile data
    AuthService.prototype.getProfile = function () {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.get(this.domain + 'authentication/profile', this.options).map(function (res) { return res.json(); });
    };
    // Function to get public profile data
    AuthService.prototype.getPublicProfile = function (username) {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.get(this.domain + 'authentication/publicProfile/' + username, this.options).map(function (res) { return res.json(); });
    };
    // Function to check if user is logged in
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
// import {Injectable} from '@angular/core';
// import {Http, Headers, RequestOptions} from '@angular/http';
// import 'rxjs/add/operator/map';
// import {tokenNotExpired} from "angular2-jwt";
//
// @Injectable()
// export class AuthService {
//   user: any;
//   authToken;
//   options;
//
//   constructor(private http: Http) {
//   }
//
//   createAuthenticationHeaders() {
//     this.loadToken(); // Get token so it can be attached to headers
//     // Headers configuration options
//     this.options = new RequestOptions({
//       headers: new Headers({
//         'Content-Type': 'application/json', // Format set to JSON
//         'authorization': this.authToken // Attach token
//       })
//     });
//   }
//
//
//   registerUser(user) {
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
//     // return this.http.post('users/register', user,{headers: headers})
//       .map(res => res.json());
//   }
//
//   authenticateUser(user) {
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
//     //  return this.http.post('users/authenticate', user,{headers: headers})
//       .map(res => res.json());
//   }
//
//   getProfile() {
//     this.createAuthenticationHeaders(); // Create headers before sending to API
//     return this.http.get('http://localhost:3000/users/profile', this.options).map(res => res.json());
//   }
//
//   storeUserData(token, user) {
//     localStorage.setItem('id_token', token);
//     localStorage.setItem('user', JSON.stringify(user));
//
//
//     this.authToken = token;
//     this.user = user;
//   }
//
//   loadToken() {
//     this.authToken = localStorage.getItem('id_token');
//
//   }
//
//   loggedIn() {
//     return tokenNotExpired('id_token');
//   }
//
//
//   logout() {
//     this.authToken = null;
//     this.user = null;
//     localStorage.clear();
//   }
// }
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/auth.service.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (router, state) {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.redirectUrl = state.url;
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/auth.guard.js.map

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 394;


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(512);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/main.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(700),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/app.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_room_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_room_room_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_edit_room_edit_room_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_delete_room_delete_room_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_notAuth_guard__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_public_profile_public_profile_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__filter_pipe__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__filter_date_pipe__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__filter_date2_pipe__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__filter_body_pipe__ = __webpack_require__(523);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'room', component: __WEBPACK_IMPORTED_MODULE_17__components_room_room_component__["a" /* RoomComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit-room/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_edit_room_edit_room_component__["a" /* EditRoomComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'delete-room/:id', component: __WEBPACK_IMPORTED_MODULE_19__components_delete_room_delete_room_component__["a" /* DeleteRoomComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'user/:username', component: __WEBPACK_IMPORTED_MODULE_21__components_public_profile_public_profile_component__["a" /* PublicProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_room_room_component__["a" /* RoomComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_edit_room_edit_room_component__["a" /* EditRoomComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_delete_room_delete_room_component__["a" /* DeleteRoomComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_public_profile_public_profile_component__["a" /* PublicProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_22__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_23__filter_date_pipe__["a" /* FilterDatePipe */],
                __WEBPACK_IMPORTED_MODULE_24__filter_date2_pipe__["a" /* FilterDate2Pipe */],
                __WEBPACK_IMPORTED_MODULE_24__filter_date2_pipe__["a" /* FilterDate2Pipe */],
                __WEBPACK_IMPORTED_MODULE_25__filter_body_pipe__["a" /* FilterBodyPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_20__guards_notAuth_guard__["a" /* NotAuthGuard */], __WEBPACK_IMPORTED_MODULE_16__services_room_service__["a" /* RoomService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/app.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(701),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/dashboard.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_room_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteRoomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteRoomComponent = (function () {
    function DeleteRoomComponent(roomService, activatedRoute, router) {
        this.roomService = roomService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.foundRoom = false;
        this.processing = false;
    }
    // Function to delete rooms
    DeleteRoomComponent.prototype.deleteRoom = function () {
        var _this = this;
        this.processing = true; // Disable buttons
        // Function for DELETE request
        this.roomService.deleteRoom(this.currentUrl.id).subscribe(function (data) {
            // Check if delete request worked
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return error bootstrap class
                _this.message = data.message; // Return error message
            }
            else {
                _this.messageClass = 'alert alert-success'; // Return bootstrap success class
                _this.message = data.message; // Return success message
                // After two second timeout, route to room page
                setTimeout(function () {
                    _this.router.navigate(['/room']); // Route users to room page
                }, 2000);
            }
        });
    };
    DeleteRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params; // Get URL paramaters on page load
        // Function for GET request to retrieve room
        this.roomService.getSingleRoom(this.currentUrl.id).subscribe(function (data) {
            // Check if request was successfull
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return bootstrap error class
                _this.message = data.message; // Return error message
            }
            else {
                // Create the room object to use in HTML
                _this.room = {
                    title: data.room.title,
                    body: data.room.body,
                    createdBy: data.room.createdBy,
                    createdAt: data.room.createdAt // Set created_at field
                };
                _this.foundRoom = true; // Displaly room window
            }
        });
    };
    DeleteRoomComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete-room',
            template: __webpack_require__(702),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_room_service__["a" /* RoomService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_room_service__["a" /* RoomService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], DeleteRoomComponent);
    return DeleteRoomComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/delete-room.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_room_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRoomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditRoomComponent = (function () {
    function EditRoomComponent(location, activatedRoute, roomService, router) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.roomService = roomService;
        this.router = router;
        this.processing = false;
        this.loading = true;
    }
    // Function to Submit Update
    EditRoomComponent.prototype.updateRoomSubmit = function () {
        var _this = this;
        this.processing = true; // Lock form fields
        // Function to send room object to backend
        this.roomService.editRoom(this.room).subscribe(function (data) {
            // Check if PUT request was a success or not
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set error bootstrap class
                _this.message = data.message; // Set error message
                _this.processing = false; // Unlock form fields
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set success bootstrap class
                _this.message = data.message; // Set success message
                // After two seconds, navigate back to room page
                setTimeout(function () {
                    _this.router.navigate(['/room']); // Navigate back to route page
                }, 2000);
            }
        });
    };
    // Function to go back to previous page
    EditRoomComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
        // Function to GET current room with id in params
        this.roomService.getSingleRoom(this.currentUrl.id).subscribe(function (data) {
            // Check if GET request was success or not
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
            }
            else {
                _this.room = data.room; // Save room object for use in HTML
                _this.loading = false; // Allow loading of room form
            }
        });
    };
    EditRoomComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-room',
            template: __webpack_require__(703),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_room_service__["a" /* RoomService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_room_service__["a" /* RoomService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], EditRoomComponent);
    return EditRoomComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/edit-room.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(704),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/home.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__(336);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(formBuilder, authService, router, authGuard) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.authGuard = authGuard;
        this.processing = false;
        this.createForm(); // Create Login Form when component is constructed
    }
    // Function to create login form
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required] // Password field
        });
    };
    // Function to disable form
    LoginComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable(); // Disable username field
        this.form.controls['password'].disable(); // Disable password field
    };
    // Function to enable form
    LoginComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable(); // Enable username field
        this.form.controls['password'].enable(); // Enable password field
    };
    // Functiont to submit form and login user
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true; // Used to submit button while is being processed
        this.disableForm(); // Disable form while being process
        // Create user object from user's input
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function to send login data to API
        this.authService.login(user).subscribe(function (data) {
            // Check if response was a success or error
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
                _this.processing = false; // Enable submit button
                _this.enableForm(); // Enable form for editting
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set bootstrap success class
                _this.message = data.message; // Set success message
                // Function to store user's token in client local storage
                _this.authService.storeUserData(data.token, data.user);
                // After 2 seconds, redirect to dashboard page
                setTimeout(function () {
                    // Check if user was redirected or logging in for first time
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]); // Redirect to page they were trying to view before
                    }
                    else {
                        _this.router.navigate(['/dashboard']); // Navigate to dashboard view
                    }
                }, 1000);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authGuard.redirectUrl) {
            this.messageClass = 'alert alert-danger';
            this.message = 'You must be logged in to view that page.';
            this.previousUrl = this.authGuard.redirectUrl;
            this.authGuard.redirectUrl = undefined;
        }
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(705),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
// import{ Component, OnInit } from '@angular/core';
// import {AuthService} from "../../services/auth.service";
// import {Router} from "@angular/router";
// import {FlashMessagesService} from "angular2-flash-messages";
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {
//
//   username: String;
//   password: String;
//
//   constructor(private authService:AuthService,
//               private router:Router,
//              private flashMessages:FlashMessagesService) { }
//
//   ngOnInit() {
//   }
//
//   onLoginSubmit(){
//     const user= {
//     username: this.username,
//     password: this.password
//                 }
//   this.authService.authenticateUser(user).subscribe(data =>{
//     if (data.success){
//       this.authService.storeUserData(data.token, data.user);
//       this.flashMessages.show('You are now logged in ',{cssClass: 'alert-success',timeout: 5000});
//       this.router.navigate(['dashboard']);
//
//     }else {
//       this.flashMessages.show(data.msg,{cssClass: 'alert-danger',timeout: 5000});
//       this.router.navigate(['login']);
//     }
//   });
//   }
// }
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/login.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessages) {
        this.authService = authService;
        this.router = router;
        this.flashMessages = flashMessages;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessages.show('you are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(706),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/navbar.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.username = '';
        this.email = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Once component loads, get user's data to display on profile
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Set username
            _this.email = profile.user.email; // Set e-mail
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(707),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/profile.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicProfileComponent = (function () {
    function PublicProfileComponent(authService, activatedRoute) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.foundProfile = false;
    }
    PublicProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params; // Get URL parameters on page load
        // Service to get the public profile data
        this.authService.getPublicProfile(this.currentUrl.username).subscribe(function (data) {
            // Check if user was found in database
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return bootstrap error class
                _this.message = data.message; // Return error message
            }
            else {
                _this.username = data.user.username; // Save the username for use in HTML
                _this.email = data.user.email; // Save the email for use in HTML
                _this.foundProfile = true; // Enable profile table
            }
        });
    };
    PublicProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-public-profile',
            template: __webpack_require__(708),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], PublicProfileComponent);
    return PublicProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/public-profile.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm(); // Create Angular 2 Form when component loads
    }
    // Function to create registration form
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            // Email Input
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(30),
                    this.validateEmail // Custom validation
                ])],
            // Username Input
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(15),
                    this.validateUsername // Custom validation
                ])],
            // Password Input
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(35),
                    this.validatePassword // Custom validation
                ])],
            // Confirm Password Input
            confirm: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required] // Field is required
        }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
    };
    // Function to disable the registration form
    RegisterComponent.prototype.disableForm = function () {
        this.form.controls['email'].disable();
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
        this.form.controls['confirm'].disable();
    };
    // Function to enable the registration form
    RegisterComponent.prototype.enableForm = function () {
        this.form.controls['email'].enable();
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
        this.form.controls['confirm'].enable();
    };
    // Function to validate e-mail is proper format
    RegisterComponent.prototype.validateEmail = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // Test email against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid email
        }
        else {
            return { 'validateEmail': true }; // Return as invalid email
        }
    };
    // Function to validate username is proper format
    RegisterComponent.prototype.validateUsername = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        // Test username against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid username
        }
        else {
            return { 'validateUsername': true }; // Return as invalid username
        }
    };
    // Function to validate password
    RegisterComponent.prototype.validatePassword = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        // Test password against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid password
        }
        else {
            return { 'validatePassword': true }; // Return as invalid password
        }
    };
    // Funciton to ensure passwords match
    RegisterComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            // Check if both fields are the same
            if (group.controls[password].value === group.controls[confirm].value) {
                return null; // Return as a match
            }
            else {
                return { 'matchingPasswords': true }; // Return as error: do not match
            }
        };
    };
    // Function to submit form
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
        this.disableForm(); // Disable the form
        // Create user object form user's inputs
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function from authentication service to register user
        this.authService.registerUser(user).subscribe(function (data) {
            // Resposne from registration attempt
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set an error class
                _this.message = data.message; // Set an error message
                _this.processing = false; // Re-enable submit button
                _this.enableForm(); // Re-enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set a success class
                _this.message = data.message; // Set a success message
                // After 2 second timeout, navigate to the login page
                setTimeout(function () {
                    _this.router.navigate(['/login']); // Redirect to login view
                }, 2000);
            }
        });
    };
    // Function to check if e-mail is taken
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        // Function from authentication file to check if e-mail is taken
        this.authService.checkEmail(this.form.get('email').value).subscribe(function (data) {
            // Check if success true or false was returned from API
            if (!data.success) {
                _this.emailValid = false; // Return email as invalid
                _this.emailMessage = data.message; // Return error message
            }
            else {
                _this.emailValid = true; // Return email as valid
                _this.emailMessage = data.message; // Return success message
            }
        });
    };
    // Function to check if username is available
    RegisterComponent.prototype.checkUsername = function () {
        var _this = this;
        // Function from authentication file to check if username is taken
        this.authService.checkUsername(this.form.get('username').value).subscribe(function (data) {
            // Check if success true or success false was returned from API
            if (!data.success) {
                _this.usernameValid = false; // Return username as invalid
                _this.usernameMessage = data.message; // Return error message
            }
            else {
                _this.usernameValid = true; // Return username as valid
                _this.usernameMessage = data.message; // Return success message
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(709),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/register.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_room_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomComponent = (function () {
    function RoomComponent(formBuilder, authService, roomService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.roomService = roomService;
        this.newPost = false;
        this.loadingRooms = false;
        this.processing = false;
        this.rez = false;
        this.createNewRoomForm(); // Create new room form on start up
    }
    // Function to create new room form
    RoomComponent.prototype.createNewRoomForm = function () {
        this.form = this.formBuilder.group({
            // Title field
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(50),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5),
                    this.alphaNumericValidation
                ])],
            // Body field
            body: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(500),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5)
                ])],
            startAt: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(10),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5)
                ])],
            endsAt: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(10),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5)
                ])],
            city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(30),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(2)
                ])],
            imgLink: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(100),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(10)
                ])],
        });
    };
    // Enable new room form
    RoomComponent.prototype.enableFormNewRoomForm = function () {
        this.form.get('title').enable(); // Enable title field
        this.form.get('body').enable(); // Enable body field
        this.form.get('startAt').enable(); // Enable body field
        this.form.get('endsAt').enable(); // Enable body field
        this.form.get('city').enable(); // Enable body field
        this.form.get('imgLink').enable(); // Enable body field
    };
    // Disable new room form
    RoomComponent.prototype.disableFormNewRoomForm = function () {
        this.form.get('title').disable(); // Disable title field
        this.form.get('body').disable(); // Disable body field
        this.form.get('startAt').disable(); // Enable body field
        this.form.get('endsAt').disable(); // Enable body field
        this.form.get('city').disable(); // Enable body field
        this.form.get('imgLink').disable(); // Enable body field1
    };
    // Validation for title
    RoomComponent.prototype.alphaNumericValidation = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9 ]+$/); // Regular expression to perform test
        // Check if test returns false or true
        if (regExp.test(controls.value)) {
            return null; // Return valid
        }
        else {
            return { 'alphaNumericValidation': true }; // Return error in validation
        }
    };
    // Function to display new room form
    RoomComponent.prototype.newRoomForm = function () {
        this.newPost = true; // Show new room form
    };
    // Reload rooms on current page
    RoomComponent.prototype.reloadRooms = function () {
        var _this = this;
        this.loadingRooms = true; // Used to lock button
        this.getAllRooms(); // Add any new rooms to the page
        setTimeout(function () {
            _this.loadingRooms = false; // Release button lock after four seconds
        }, 4000);
    };
    // Function to post a new comment on room post
    RoomComponent.prototype.draftComment = function () {
    };
    // Function to submit a new room post
    RoomComponent.prototype.onRoomSubmit = function () {
        var _this = this;
        this.processing = true; // Disable submit button
        this.disableFormNewRoomForm(); // Lock form
        // Create room object from form fields
        var room = {
            title: this.form.get('title').value,
            body: this.form.get('body').value,
            startAt: this.form.get('startAt').value,
            endsAt: this.form.get('endsAt').value,
            city: this.form.get('city').value,
            createdBy: this.username,
            reserve: false,
            imgLink: this.form.get('imgLink').value,
        };
        // Function to save room into database
        this.roomService.newRoom(room).subscribe(function (data) {
            // Check if room was saved to database or not
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return error class
                _this.message = data.message; // Return error message
                _this.processing = false; // Enable submit button
                _this.enableFormNewRoomForm(); // Enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Return success class
                _this.message = data.message; // Return success message
                _this.getAllRooms();
                // Clear form data after two seconds
                setTimeout(function () {
                    _this.newPost = false; // Hide form
                    _this.processing = false; // Enable submit button
                    _this.message = false; // Erase error/success message
                    _this.form.reset(); // Reset all form fields
                    _this.enableFormNewRoomForm(); // Enable the form fields
                }, 1000);
            }
        });
    };
    // Function to go back to previous page
    RoomComponent.prototype.goBack = function () {
        window.location.reload(); // Clear all variable states
    };
    // Function to get all rooms from the database
    RoomComponent.prototype.getAllRooms = function () {
        var _this = this;
        // Function to GET all rooms from database
        this.roomService.getAllRooms().subscribe(function (data) {
            _this.roomPosts = data.rooms; // Assign array to use in HTML
        });
    };
    // Function to like a room post
    RoomComponent.prototype.likeRoom = function (id) {
        var _this = this;
        // Service to like a room post
        this.roomService.likeRoom(id).subscribe(function (data) {
            _this.getAllRooms(); // Refresh rooms after like
        });
    };
    // Function to disliked a room post
    RoomComponent.prototype.dislikeRoom = function (id) {
        var _this = this;
        // Service to dislike a room post
        this.roomService.dislikeRoom(id).subscribe(function (data) {
            _this.getAllRooms(); // Refresh rooms after dislike
        });
    };
    RoomComponent.prototype.reserve = function (id) {
        var _this = this;
        this.rez = true;
        // Service to dislike a room post
        this.roomService.reserve(id).subscribe(function (data) {
            _this.getAllRooms(); // Refresh rooms after dislike
        });
    };
    RoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get profile username on page load
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Used when creating new room posts and comments
        });
        this.getAllRooms(); // Get all rooms on component load
    };
    RoomComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-room',
            template: __webpack_require__(710),
            styles: [__webpack_require__(697)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_room_service__["a" /* RoomService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_room_service__["a" /* RoomService */]) === 'function' && _c) || Object])
    ], RoomComponent);
    return RoomComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/room.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterBodyPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterBodyPipe = (function () {
    function FilterBodyPipe() {
    }
    FilterBodyPipe.prototype.transform = function (filter2, term1) {
        if (term1 === undefined)
            return filter2;
        return filter2.filter(function (room) {
            return room.body.toLowerCase().includes(term1.toLowerCase());
        });
    };
    FilterBodyPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterBody'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterBodyPipe);
    return FilterBodyPipe;
}());
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/filter-body.pipe.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterDatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterDatePipe = (function () {
    function FilterDatePipe() {
    }
    FilterDatePipe.prototype.transform = function (filter, term2) {
        //check is undefind
        if (term2 === undefined)
            return filter;
        return filter.filter(function (room) {
            return room.startAt.toLowerCase().includes(term2.toLowerCase());
        });
    };
    FilterDatePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterDate'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterDatePipe);
    return FilterDatePipe;
}());
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/filter-date.pipe.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterDate2Pipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterDate2Pipe = (function () {
    function FilterDate2Pipe() {
    }
    FilterDate2Pipe.prototype.transform = function (filter, term3) {
        //check is undefind
        if (term3 === undefined)
            return filter;
        return filter.filter(function (room) {
            return room.endsAt.toLowerCase().includes(term3.toLowerCase());
        });
    };
    FilterDate2Pipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterDate2'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterDate2Pipe);
    return FilterDate2Pipe;
}());
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/filter-date2.pipe.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (filter, term) {
        //check is undefind
        if (term === undefined)
            return filter;
        return filter.filter(function (room) {
            return room.city.toLowerCase().includes(term.toLowerCase());
        });
    };
    FilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterPipe);
    return FilterPipe;
}());
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/filter.pipe.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to determine whether user is authorized to view route
    NotAuthGuard.prototype.canActivate = function () {
        // Check if user is logged in
        if (this.authService.loggedIn()) {
            this.router.navigate(['/']); // Return error, route to home
            return false; // Return false: user not allowed to view route
        }
        else {
            return true; // Return true: user is allowed to view route
        }
    };
    NotAuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NotAuthGuard);
    return NotAuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/notAuth.guard.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/validate.service.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/AAARezerwacja/Rezerwacja-src/src/environment.js.map

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "/* Dropdown Button */\n.dropbtn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer; }\n\n/* The container <div> - needed to position the dropdown content */\n.dropdown {\n  position: relative;\n  display: inline-block; }\n\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n/* Links inside the dropdown */\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {\n  background-color: #f1f1f1; }\n\n/* Show the dropdown menu on hover */\n.dropdown:hover .dropdown-content {\n  display: block; }\n\n/* Change the background color of the dropdown button when the dropdown content is shown */\n.dropdown:hover .dropbtn {\n  background-color: #3e8e41; }\n\nimg {\n  position: center;\n  max-width: 500px;\n  max-height: 300px; }\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n<flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "Witam w mojej aplikacji\r\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Delete Room</h1>\n\n\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n\n<div class=\"col-md-6\" *ngIf=\"foundRoom\">\n\n  <div class=\"modal-content\">\n\n    <div class=\"modal-header\">\n\n      <button type=\"button\" name=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n      <h4 class=\"modal-title\">Confirm</h4>\n    </div>\n\n\n    <div class=\"modal-body\">\n      <p>Are you sure you would like to delete this room?</p>\n    </div>\n\n\n    <div class=\"modal-footer\">\n\n      <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"deleteRoom()\">Yes\n      </button>\n\n      <a routerLink=\"/room\">\n        <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-danger\">No</button>\n      </a>\n    </div>\n  </div>\n\n  <br/>\n\n\n  <div class=\"panel panel-primary\">\n\n    <div class=\"panel-heading\">\n\n      <h3 class=\"panel-title\">{{ room.title }}</h3>\n    </div>\n\n\n    <div class=\"panel-body\">\n      {{ room.body }}\n    </div>\n\n\n    <div class=\"panel-footer\">\n      <strong>Posted by: </strong> {{ room.createdBy }}\n      <br/>\n      <strong>Date: </strong> {{ room.createdAt | date:'MMM dd, yyyy' }}\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Edit Room</h1>\n\n<!-- Custom Success/Erro Message -->\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- Edit Room Form -->\n<form (submit)=\"updateRoomSubmit()\" *ngIf=\"!loading\">\n  <!-- Title Field -->\n  <div class=\"form-group\">\n    <label for=\"title\">Title</label>\n    <!-- Title Input -->\n    <input [disabled]=\"processing\" type=\"text\" name=\"title\" placeholder=\"*Room Title\" class=\"form-control\"\n           [(ngModel)]=\"room.title\"/>\n  </div>\n\n  <!-- Body Field -->\n  <div class=\"form-group\">\n    <label for=\"body\">Body</label>\n    <!-- Body Input -->\n    <textarea [disabled]=\"processing\" name=\"body\" rows=\"8\" cols=\"80\" [(ngModel)]=\"room.body\" class=\"form-control\"\n              placeholder=\"*Room Body\"></textarea>\n  </div>\n \n  <div class=\"form-group\">\n    <label for=\"city\">City</label>\n    <input [disabled]=\"processing\" type=\"text\" name=\"city\" placeholder=\"*Room city\" class=\"form-control\"\n           [(ngModel)]=\"room.city\"/>\n\n  </div>\n  <div class=\"form-group\">\n    <label for=\"startAt\">startAt</label>\n    <input [disabled]=\"processing\" type=\"date\" name=\"from\" placeholder=\"*Room startAt\" class=\"form-control\"\n           [(ngModel)]=\"room.startAt\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"endsAt\">From</label>\n    <input [disabled]=\"processing\" type=\"date\" name=\"endsAt\" placeholder=\"*Room endsAt\" class=\"form-control\"\n           [(ngModel)]=\"room.endsAt\"/>\n  </div>\n  <!-- Delete Button -->\n  <a [routerLink]=\"['/delete-room/', room._id]\">\n    <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-danger\">Delete</button>\n  </a>\n  <!-- Go Back Button -->\n  <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"goBack()\">Go Back\n  </button>\n  <!-- Save Changes Button -->\n  <button [disabled]=\"processing\" type=\"submit\" name=\"save\" class=\"btn btn-info\">Save Changes</button>\n\n</form>\n\n<!--<h1 class=\"page-header\">Edit Room</h1>-->\n<!--<div class=\"row show-hide-message\" *ngIf=\"message\">-->\n<!--<div [ngClass]=\"messageClass\">-->\n<!--{{message}}-->\n<!--</div>-->\n\n\n<!--</div>-->\n<!--<form (submit)=\"updateRoomSubmmit()\" *ngIf=\"!loading\">-->\n<!--<div class=\"form-group\">-->\n<!--<label for=\"title\">Title</label>-->\n<!--<input [disabled]=\"processing\" type=\"text\" name=\"title\" placeholder=\"*Room Title\" class=\"form-control\"-->\n<!--[(ngModel)]=\"room.title\" />-->\n\n<!--</div>-->\n\n<!--<div class=\"form-group\">-->\n<!--<label for=\"body\">Body</label>-->\n<!--<textarea [disabled]=\"processing\" name=\"body\" rows=\"8\" cols=\"80\" [(ngModel)]=\"room.body\"-->\n<!--class=\"form-control\" placeholder=\"*Room Body\"></textarea>-->\n<!--</div>-->\n<!--<div class=\"form-group\">-->\n<!--<label for=\"city\">City</label>-->\n<!--<input [disabled]=\"processing\" type=\"text\" name=\"city\" placeholder=\"*Room City\" class=\"form-control\"-->\n<!--[(ngModel)]=\"room.city\" />-->\n\n<!--</div>-->\n<!--<div class=\"form-group\">-->\n<!--<label for=\"from\">From</label>-->\n<!--<input [disabled]=\"processing\" type=\"date\" name=\"from\" placeholder=\"*Room From\" class=\"form-control\"-->\n<!--[(ngModel)]=\"room.from\" />-->\n\n<!--</div>-->\n<!--<div class=\"form-group\">-->\n<!--<label for=\"to\">City</label>-->\n<!--<input [disabled]=\"processing\" type=\"date\" name=\"to\" placeholder=\"*Room to\" class=\"form-control\"-->\n<!--[(ngModel)]=\"room.to\" />-->\n\n<!--</div>-->\n\n<!--<button type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"goBack()\">Go Back</button>-->\n<!--<button [disabled]=\"processing\" type=\"submit\" name=\"save\" class=\"btn btn-info\" (click)=\"goBack()\">Save</button>-->\n\n\n<!--</form>-->\n\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>MEAN Stack Application</h1>\n  <p class=\"lead\">Welcome to the MEAN Stack Application by <strong>David Acosta</strong></p>\n  <div>\n    <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/register\" class=\"btn btn-primary\">Register</a>\n    <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/login\" class=\"btn btn-default\">Login</a>\n    <a *ngIf=\"authService.loggedIn()\" routerLink=\"/room\" class=\"btn btn-success\">View Rooms</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=\"thumbnail\">\n      <img src=\"https://image.flaticon.com/icons/svg/417/417745.svg\" alt=\"placeholder image\" width=\"140\" height=\"140\">\n      <div class=\"caption\">\n        <h3>MongoDB</h3>\n        <p>MongoDB is a free and open-source cross-platform document-oriented database program. This NoSQL database program uses JSON-like documents with schemas.</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=thumbnail> <img src=\"https://image.flaticon.com/icons/svg/417/417746.svg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <div class=caption>\n        <h3>ExpressJS</h3>\n        <p>Express.js is a Node.js framework. Node.js is a platform that allows JavaScript to be used outside the Web Browsers, for creating web and network applications.</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=thumbnail> <img src=\"https://image.flaticon.com/icons/svg/417/417751.svg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <div class=caption>\n        <h3>Angular 2</h3>\n        <p>Angular is a development platform for building mobile and desktop web applications. Ut dignissim eleifend maximus. Ut dignissim eleifend maximus. Ut dignissim eleifend.</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=thumbnail> <img src=\"https://image.flaticon.com/icons/svg/417/417754.svg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <div class=caption>\n        <h3>NodeJS</h3>\n        <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=thumbnail> <img src=\"https://image.flaticon.com/icons/svg/417/417768.svg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <div class=caption>\n        <h3>Lorem Ipsum</h3>\n        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=thumbnail> <img src=\"https://image.flaticon.com/icons/svg/417/417764.svg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <div class=caption>\n        <h3>Lorem Ipsum</h3>\n        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- Login Form -->\n<form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\n\n  <!-- Username Field -->\n  <div class=\"form-group\">\n    <label for=\"username\">Username( eg. test1)</label>\n    <div [ngClass]=\"{'has-error': form.controls.username.errors && form.controls.username.dirty, 'has-success': form.controls.username.valid && form.controls.username.dirty }\">\n      <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required.</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Password Field  -->\n  <div class=\"form-group\">\n    <label for=\"password\">Password (eg. ASDasd1@#)</label>\n    <div [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\n      <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</li>\n      </ul>\n    </div>\n  </div>\n  <!-- Submit Button -->\n  <input [disabled]=\"!form.valid || processing\" class=\"btn btn-primary\" type=\"submit\" value=\"Login\" />\n</form>\n\n\n<!--<h2 class=\"page-header\">Login</h2>-->\n<!--<form (submit)=\"onLoginSubmit()\">-->\n  <!--<div class=\"form-group\">-->\n    <!--<label>Username</label>-->\n    <!--<input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">-->\n  <!--</div>-->\n  <!--<div class=\"form-group\">-->\n    <!--<label>Password</label>-->\n    <!--<input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">-->\n\n  <!--</div>-->\n  <!--<input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">-->\n<!--</form>-->\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<!-- Fixed navbar -->\r\n<nav class=\"navbar navbar-default\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" routerLink=\"/\">Rezerwacja noclegow</a>\r\n    </div>\r\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n      <ul class=\"nav navbar-nav navbar-left\">\r\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/\">Home</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n        <li><a *ngIf=\"authService.loggedIn()\" routerLink=\"/profile\">Profile</a></li>\r\n        <li><a *ngIf=\"authService.loggedIn()\" routerLink=\"/room\">Room</a></li>\r\n        <li><a *ngIf=\"!authService.loggedIn()\" routerLink=\"/login\">Login</a></li>\r\n        <li><a *ngIf=\"authService.loggedIn()\" href=\"#\" (click)=\"onLogoutClick()\">Logout</a></li>\r\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/register\">Register</a></li>\r\n      </ul>\r\n    </div>\r\n    <!--/.nav-collapse -->\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Profile Page</h2>\n<ul class=\"list-group\">\n  <li class=\"list-group-item\">Username: {{username}}</li>\n  <li class=\"list-group-item\">email: {{email}}</li>\n\n</ul>\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Public Profile</h1>\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- Table to Display User Info -->\n<ul *ngIf=\"foundProfile\" class=\"list-group\">\n  <!-- Username -->\n  <li class=\"list-group-item\"><strong>Username: </strong>{{ username }}</li>\n  <!-- E-Mail -->\n  <li class=\"list-group-item\"><strong>E-Mail: </strong>{{ email }}</li>\n</ul>\n"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Register Page</h1>\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- Registration Form -->\n<form [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">\n\n  <!-- Username Input -->\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <div [ngClass]=\"{'has-error': (form.controls.username.errors && form.controls.username.dirty) || (!usernameValid && form.controls.username.dirty), 'has-success': !form.controls.username.errors && usernameValid}\">\n      <input type=\"text\" name=\"username\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Username\" formControlName=\"username\" (blur)=\"checkUsername()\"  />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required</li>\n        <li *ngIf=\"form.controls.username.errors?.minlength && form.controls.username.dirty || form.controls.username.errors?.maxlength && form.controls.username.dirty \">Minimum characters: 3, Maximum characters: 15</li>\n        <li *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty\">Username must not have any special characters</li>\n        <li *ngIf=\"usernameMessage\">{{ usernameMessage }}</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Email Input -->\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <div [ngClass]=\"{'has-error': (form.controls.email.errors && form.controls.email.dirty) || (!emailValid && form.controls.email.dirty), 'has-success': !form.controls.email.errors && emailValid}\">\n      <input type=\"text\" name=\"email\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Email\" formControlName=\"email\" (blur)=\"checkEmail()\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">This field is required</li>\n        <li *ngIf=\"(form.controls.email.errors?.minlength && form.controls.email.dirty || form.controls.email.errors?.maxlength && form.controls.email.dirty ) && form.controls.email.dirty\">Minimum characters: 5, Maximum characters: 30</li>\n        <li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\">This must be a valid e-mail</li>\n        <li *ngIf=\"emailMessage\">{{ emailMessage}}</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Password Input -->\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <div [ngClass]=\"{'has-error': (form.controls.password.errors && form.controls.password.dirty), 'has-success': !form.controls.password.errors}\">\n      <input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Password\" formControlName=\"password\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required</li>\n        <li *ngIf=\"form.controls.password.errors?.minlength && form.controls.password.dirty || form.controls.password.errors?.maxlength && form.controls.password.dirty \">Minimum characters: 8, Maximum characters: 35</li>\n        <li *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">Password must be at least 8 characters but no more than 35</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Confirm Password Input -->\n  <div class=\"form-group\">\n    <label for=\"confirm\">Confirm Password</label>\n    <div [ngClass]=\"{'has-error': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'has-success': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\">\n      <input type=\"password\" name=\"confirm\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Confirm Password\" formControlName=\"confirm\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">This field is required</li>\n        <li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Password do not match</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Submit Input -->\n  <input [disabled]=\"!form.valid || processing || !emailValid || !usernameValid\" type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\n\n</form>\n<!-- Registration Form /-->\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Room Feed</h1>\r\n\r\n<!-- Custom Success/Error Message -->\r\n<div class=\"row show-hide-message\" *ngIf=\"message && newPost\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<!-- New Post Button -->\r\n<button type=\"button\" name=\"button\" class=\"btn btn-warning\" *ngIf=\"!newPost\" (click)=\"newRoomForm()\">New Post</button>\r\n\r\n<!-- Reload Button -->\r\n<button [disabled]=\"loadingRooms\" type=\"button\" name=\"button\" class=\"btn btn-default\" *ngIf=\"!newPost\"\r\n        (click)=\"reloadRooms()\"><span class=\"glyphicon glyphicon-repeat\"></span>&nbsp;&nbsp;Reload\r\n</button>\r\n\r\n<br/>\r\n<br/>\r\n<div *ngIf=\"!newPost\">\r\n<p> Filters:</p>\r\n<form id=\"filter\">\r\n  <label>by city:</label>\r\n  <input id=\"msg\" type=\"text\" class=\"form-control\" name=\"msg\" [(ngModel)]=\"term\">\r\n</form>\r\n<form id=\"filter2\">\r\n  <label>by body:</label>\r\n  <input id=\"msg\" type=\"text\" class=\"form-control\" name=\"msg\" [(ngModel)]=\"term1\" >\r\n</form>\r\n\r\n<p>Filters by date:</p>\r\n  <div class=\"form-group row\">\r\n    <label for=\"example-date-input\" class=\"col-2 col-form-label\">Date</label>\r\n    <div class=\"col-10\">\r\n      <input class=\"form-control\" type=\"date\" value=\"2011-08-19\" id=\"example-date-input\" [(ngModel)]=\"term2\">\r\n    </div>\r\n  </div>\r\n<div class=\"form-group row\">\r\n  <label for=\"example-date-input\" class=\"col-2 col-form-label\">Date</label>\r\n  <div class=\"col-10\">\r\n    <input class=\"form-control\" type=\"date\" value=\"2011-08-19\" id=\"example-date-input\" [(ngModel)]=\"term3\">\r\n  </div>\r\n</div>\r\n<!-- New Room Form -->\r\n<form [formGroup]=\"form\" name=\"roomForm\" (submit)=\"onRoomSubmit()\" *ngIf=\"newPost\">\r\n  <!-- Title Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"title\">Title</label>\r\n    <div\r\n      [ngClass]=\"{'has-success': form.controls.title.valid, 'has-error': form.controls.title.dirty && form.controls.title.errors}\">\r\n      <!-- Title Input -->\r\n      <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"*Room Title\" autocomplete=\"off\"\r\n             formControlName=\"title\"/>\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.required\">This field is required.</li>\r\n        <li\r\n          *ngIf=\"(form.controls.title.dirty && form.controls.title.errors?.minlength) || (form.controls.title.dirty && form.controls.title.errors?.maxlength)\">\r\n          Max length: 50, Min length: 5\r\n        </li>\r\n        <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.alphaNumericValidation\">Must be a letter or\r\n          number\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Body Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"body\">Body</label>\r\n    <div\r\n      [ngClass]=\"{'has-success': form.controls.body.valid, 'has-error': form.controls.body.dirty && form.controls.body.errors}\">\r\n      <!-- Body Input -->\r\n      <textarea name=\"body\" rows=\"8\" cols=\"80\" placeholder=\"*Body\" class=\"form-control\"\r\n                formControlName=\"body\"></textarea>\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.body.dirty && form.controls.body.errors?.required\">This field is required.</li>\r\n        <li\r\n          *ngIf=\"(form.controls.body.dirty && form.controls.body.errors?.minlength) || (form.controls.body.dirty && form.controls.body.errors?.maxlength)\">\r\n          Max length: 500, Min length: 5\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"city\">City</label>\r\n    <div\r\n      [ngClass]=\"{'has-success': form.controls.city.valid, 'has-error': form.controls.city.dirty && form.controls.city.errors}\">\r\n      <!-- Title Input -->\r\n      <input type=\"text\" name=\"city\" class=\"form-control\" placeholder=\"*Room City\" autocomplete=\"off\"\r\n             formControlName=\"city\"/>\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.city.dirty && form.controls.city.errors?.required\">This field is required.</li>\r\n        <li\r\n          *ngIf=\"(form.controls.city.dirty && form.controls.city.errors?.minlength) || (form.controls.city.dirty && form.controls.city.errors?.maxlength)\">\r\n          Max length: 50, Min length: 5\r\n        </li>\r\n        <li *ngIf=\"form.controls.city.dirty && form.controls.city.errors?.alphaNumericValidation\">Must be a letter or\r\n          number\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"startAt\">startAt</label>\r\n    <div\r\n      [ngClass]=\"{'has-success': form.controls.startAt.valid, 'has-error': form.controls.startAt.dirty && form.controls.startAt.errors}\">\r\n      <!-- startAt Input -->\r\n      <input type=\"date\" name=\"startAt\" class=\"form-control\" placeholder=\"*Room startAt\" autocomplete=\"off\"\r\n             formControlName=\"startAt\"/>\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.startAt.dirty && form.controls.startAt.errors?.required\">This field is required.</li>\r\n        <li\r\n          *ngIf=\"(form.controls.startAt.dirty && form.controls.startAt.errors?.minlength) || (form.controls.startAt.dirty && form.controls.startAt.errors?.maxlength)\">\r\n          Max length: 50, Min length: 5\r\n        </li>\r\n        <li *ngIf=\"form.controls.startAt.dirty && form.controls.startAt.errors?.alphaNumericValidation\">Must be a letter\r\n          or\r\n          number\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"endsAt\">endsAt</label>\r\n    <div\r\n      [ngClass]=\"{'has-success': form.controls.endsAt.valid, 'has-error': form.controls.endsAt.dirty && form.controls.endsAt.errors}\">\r\n      <!-- startAt Input -->\r\n      <input type=\"date\" name=\"endsAt\" class=\"form-control\" placeholder=\"*Room endsAt\" autocomplete=\"off\"\r\n             formControlName=\"endsAt\"/>\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.endsAt.dirty && form.controls.endsAt.errors?.required\">This field is required.</li>\r\n        <li\r\n          *ngIf=\"(form.controls.endsAt.dirty && form.controls.endsAt.errors?.minlength) || (form.controls.endsAt.dirty && form.controls.startAt.errors?.maxlength)\">\r\n          Max length: 50, Min length: 5\r\n        </li>\r\n        <li *ngIf=\"form.controls.endsAt.dirty && form.controls.endsAt.errors?.alphaNumericValidation\">Must be a letter\r\n          or\r\n          number\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"imgLink\">Link to img</label>\r\n    <div\r\n      [ngClass]=\"{'has-success': form.controls.imgLink.valid, 'has-error': form.controls.imgLink.dirty && form.controls.imgLink.errors}\">\r\n      <!-- startAt Input -->\r\n      <input type=\"text\" name=\"imgLink\" class=\"form-control\" placeholder=\"*Room imgLink\" autocomplete=\"off\"\r\n             formControlName=\"imgLink\"/>\r\n      <!-- Validation -->\r\n      <ul class=\"help-block\">\r\n        <li\r\n          *ngIf=\"(form.controls.imgLink.dirty && form.controls.imgLink.errors?.minlength) || (form.controls.imgLink.dirty && form.controls.startAt.errors?.maxlength)\">\r\n          Max length: 50, Min length: 5\r\n        </li>\r\n        <li *ngIf=\"form.controls.imgLink.dirty && form.controls.imgLink.errors?.alphaNumericValidation\">Must be a letter\r\n          or\r\n          number\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Go Back Button -->\r\n  <button [disabled]=\"processing\" type=\"button\" name=\"button\" (click)=\"goBack()\" class=\"btn btn-warning\">Go Back\r\n  </button>\r\n  <!-- Submit Button -->\r\n  <button [disabled]=\"processing || !form.valid\" type=\"submit\" name=\"button\" class=\"btn btn-success\">Submit</button>\r\n\r\n</form>\r\n<!-- New Room Form -->\r\n\r\n<!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-->\r\n<div *ngIf=\"!newPost\">\r\n  <div class=\"panel panel-primary\" *ngFor=\"let room of roomPosts |filterDate2:term3 |filterBody:term1| filterDate:term2 | filter:term\">\r\n\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">{{ room.title }}</h3>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n      {{ room.body |filterDate}}\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n      <strong>Posted by: </strong>{{ room.createdBy }}\r\n      <br/>\r\n      <strong>startAt: </strong>{{ room.startAt | date:'dd MM, yyyy'  }}\r\n      <br/>\r\n      <strong>endsAt: </strong>{{ room.endsAt | date:'dd MM, yyyy'}}\r\n      <br/>\r\n      <strong>city: </strong>{{ room.city}}\r\n      <br/>\r\n      <br/>\r\n      <strong>reseved by: </strong>{{ room.reservedBy}}\r\n      <br/>\r\n      <br/>\r\n\r\n      <div *ngIf=\"username === room.createdBy\">\r\n        <strong>Likes: </strong>{{ room.likes }}\r\n        <br/>\r\n        <strong>Dislikes: </strong>{{ room.dislikes }}\r\n      </div>\r\n\r\n      <a [routerLink]=\"['/edit-room/', room._id]\" *ngIf=\"username === room.createdBy\">\r\n        <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-info\">Edit</button>\r\n      </a>\r\n      <a [routerLink]=\"['/delete-room/', room._id]\" *ngIf=\"username === room.createdBy\">\r\n        <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\">Delete</button>\r\n      </a>\r\n      <div class=\"dropdown\">\r\n        <button [disabled]=\"room.likedBy.indexOf(username) > -1\" type=\"button\" name=\"button\"\r\n                class=\"btn btn-sm btn-success\" *ngIf=\"username !== room.createdBy\" (click)=\"likeRoom(room._id)\"><span\r\n          class=\"glyphicon glyphicon-thumbs-up\">&nbsp;</span>Likes: {{ room.likes }}\r\n        </button>\r\n        <div class=\"dropdown-content\">\r\n          <a [routerLink]=\"['/user/', liker]\" *ngFor=\"let liker of room.likedBy\">{{ liker }}</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"dropdown\">\r\n\r\n        <button [disabled]=\"room.dislikedBy.indexOf(username) > -1\" type=\"button\" name=\"button\"\r\n                class=\"btn btn-sm btn-warning\" *ngIf=\"username !== room.createdBy\" (click)=\"dislikeRoom(room._id)\"><span\r\n          class=\"glyphicon glyphicon-thumbs-down\">&nbsp;</span>Dislikes: {{ room.dislikes }}\r\n        </button>\r\n\r\n        <div class=\"dropdown-content\">\r\n          <a [routerLink]=\"['/user/', disliker]\" *ngFor=\"let disliker of room.dislikedBy\">{{ disliker }}</a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">\r\n        <button *ngIf=\"room.reserve !== true && room.createdBy !== username\" type=\"button\" name=\"button\"\r\n                class=\"btn btn-sm btn-success\" (click)=\"reserve(room._id)\"><span\r\n          class=\"glyphicon glyphicon-thumbs-up\">&nbsp;</span>Reserved?: {{ room.reserve }}\r\n        </button>\r\n        <br/>\r\n\r\n      </li>\r\n    </ul>\r\n\r\n    <img src=\"{{room.imgLink}}\">\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(395);


/***/ })

},[749]);
//# sourceMappingURL=main.bundle.map