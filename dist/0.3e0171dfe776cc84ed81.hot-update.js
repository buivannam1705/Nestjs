"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 5:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(7);
const typeorm_2 = __webpack_require__(8);
const app_controller_1 = __webpack_require__(9);
const app_service_1 = __webpack_require__(10);
const users_model_1 = __webpack_require__(11);
const user_module_1 = __webpack_require__(12);
const auth_module_1 = __webpack_require__(16);
const login_service_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './login/login.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const login_module_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './login/login.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
let AppModule = exports.AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'Abc@123',
                database: 'quanlysv',
                entities: [users_model_1.Account
                ],
                synchronize: true,
            }),
            user_module_1.UsersModule,
            auth_module_1.AuthModule,
            login_module_1.LoginModule,
        ],
        controllers: [app_controller_1.AppController,],
        providers: [app_service_1.AppService, login_service_1.LoginService],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _a : Object])
], AppModule);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("315cc0dc2eb1b23588ed")
/******/ })();
/******/ 
/******/ }
;