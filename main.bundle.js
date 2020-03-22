webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

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

module.exports = "<ng-progress\r\n    [positionUsing]=\"'marginLeft'\"\r\n    [direction]=\"'leftToRightIncreased'\"\r\n    [color]=\"'#ffff00'\"\r\n    [trickleSpeed]=\"500\" \r\n    [thick]=\"true\" \r\n    [ease]=\"'easeInSine'\"\r\n    [showSpinner]= \"true\"\r\n></ng-progress>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_globals_globals_component__ = __webpack_require__("../../../../../src/app/components/globals/globals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'www.CalvinParks.com';
        this.windowSize = 0;
        this.normalizeCategoryTitleDivHeights = __WEBPACK_IMPORTED_MODULE_1__components_globals_globals_component__["c" /* normalizeCategoryTitleDivHeights */];
        this.deactiveNullAnchors = __WEBPACK_IMPORTED_MODULE_1__components_globals_globals_component__["c" /* normalizeCategoryTitleDivHeights */];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterContentInit = function () {
        //alert(document.cookie);
        //alert("iside ngAfterContentInit !!! ");
        this.windowSize = window.document.body.clientWidth;
        setTimeout(__WEBPACK_IMPORTED_MODULE_1__components_globals_globals_component__["c" /* normalizeCategoryTitleDivHeights */], 500);
        setTimeout(__WEBPACK_IMPORTED_MODULE_1__components_globals_globals_component__["b" /* deactiveNullAnchors */], 1000);
    };
    AppComponent.prototype.ngAfterContentChecked = function () {
        //alert("inside ngAfterContentChecked");
        if (this.windowSize != window.document.body.clientWidth) {
            setTimeout(__WEBPACK_IMPORTED_MODULE_1__components_globals_globals_component__["c" /* normalizeCategoryTitleDivHeights */], 500);
            //  var scrollToY=document.cookie.split("=")[1];
            //  window.scrollTo(0,Number(scrollToY)*.68);  // adjust scrolling  by a % to position tiles correctly
        }
        this.windowSize = window.document.body.clientWidth;
    };
    AppComponent.prototype.yourfunction = function ($event) {
        Object(__WEBPACK_IMPORTED_MODULE_1__components_globals_globals_component__["d" /* setScrollCookie */])();
        /*
        var currentPageArray=document.URL.split("/");
        var currentPage=currentPageArray[currentPageArray.length-1];
        if(currentPage.length==0) currentPage="categories";
        
        //alert("test  "+"currentPage");
    
        var cname = currentPage;
        var cvalue = window.pageYOffset;
        var exSeconds = 60;
         
          var d = new Date();
          d.setTime(d.getTime() + (exSeconds  * 1000));
          var expires = "expires="+d.toUTCString();
          document.cookie = cname + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
          document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
          */
        //return $event.returnValue='Your changes will not be saved';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:beforeunload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "yourfunction", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_categories_categories_component__ = __webpack_require__("../../../../../src/app/components/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_emails_emails_component__ = __webpack_require__("../../../../../src/app/components/emails/emails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utility_safe_pipe__ = __webpack_require__("../../../../../src/app/utility/safe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_demos_demos_component__ = __webpack_require__("../../../../../src/app/components/demos/demos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_globals_globals_component__ = __webpack_require__("../../../../../src/app/components/globals/globals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_avatars_avatars_component__ = __webpack_require__("../../../../../src/app/components/avatars/avatars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_playboy_playboy_component__ = __webpack_require__("../../../../../src/app/components/playboy/playboy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_banners_banners_component__ = __webpack_require__("../../../../../src/app/components/banners/banners.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_microwebsites_microwebsites_component__ = __webpack_require__("../../../../../src/app/components/microwebsites/microwebsites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_datavisualizations_datavisualizations_component__ = __webpack_require__("../../../../../src/app/components/datavisualizations/datavisualizations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_videocontrol_videocontrol_component__ = __webpack_require__("../../../../../src/app/components/videocontrol/videocontrol.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_systems_systems_component__ = __webpack_require__("../../../../../src/app/components/systems/systems.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_miscellaneous_miscellaneous_component__ = __webpack_require__("../../../../../src/app/components/miscellaneous/miscellaneous.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_instructional_instructional_component__ = __webpack_require__("../../../../../src/app/components/instructional/instructional.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_nonnativeapps_nonnativeapps_component__ = __webpack_require__("../../../../../src/app/components/nonnativeapps/nonnativeapps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_nativeapps_nativeapps_component__ = __webpack_require__("../../../../../src/app/components/nativeapps/nativeapps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_socialmedia_socialmedia_component__ = __webpack_require__("../../../../../src/app/components/socialmedia/socialmedia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_eventkiosk_eventkiosk_component__ = __webpack_require__("../../../../../src/app/components/eventkiosk/eventkiosk.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_instorekiosk_instorekiosk_component__ = __webpack_require__("../../../../../src/app/components/instorekiosk/instorekiosk.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_jobpositions_jobpositions_component__ = __webpack_require__("../../../../../src/app/components/jobpositions/jobpositions.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_categories_categories_component__["a" /* CategoriesComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_7__components_categories_categories_component__["a" /* CategoriesComponent */] },
    { path: 'emails', component: __WEBPACK_IMPORTED_MODULE_8__components_emails_emails_component__["a" /* EmailsComponent */] },
    { path: 'demos', component: __WEBPACK_IMPORTED_MODULE_10__components_demos_demos_component__["a" /* DemosComponent */] },
    { path: 'banners', component: __WEBPACK_IMPORTED_MODULE_14__components_banners_banners_component__["a" /* BannersComponent */] },
    { path: 'datavisual', component: __WEBPACK_IMPORTED_MODULE_16__components_datavisualizations_datavisualizations_component__["a" /* DatavisualizationsComponent */] },
    { path: 'video', component: __WEBPACK_IMPORTED_MODULE_17__components_videocontrol_videocontrol_component__["a" /* VideocontrolComponent */] },
    { path: 'playboy', component: __WEBPACK_IMPORTED_MODULE_13__components_playboy_playboy_component__["a" /* PlayboyComponent */] },
    { path: 'microsites', component: __WEBPACK_IMPORTED_MODULE_15__components_microwebsites_microwebsites_component__["a" /* MicrowebsitesComponent */] },
    { path: 'systems', component: __WEBPACK_IMPORTED_MODULE_18__components_systems_systems_component__["a" /* SystemsComponent */] },
    { path: 'misc', component: __WEBPACK_IMPORTED_MODULE_19__components_miscellaneous_miscellaneous_component__["a" /* MiscellaneousComponent */] },
    { path: 'instruction', component: __WEBPACK_IMPORTED_MODULE_20__components_instructional_instructional_component__["a" /* InstructionalComponent */] },
    { path: 'nonnative', component: __WEBPACK_IMPORTED_MODULE_21__components_nonnativeapps_nonnativeapps_component__["a" /* NonnativeappsComponent */] },
    { path: 'nativeapps', component: __WEBPACK_IMPORTED_MODULE_22__components_nativeapps_nativeapps_component__["a" /* NativeappsComponent */] },
    { path: 'socialmedia', component: __WEBPACK_IMPORTED_MODULE_23__components_socialmedia_socialmedia_component__["a" /* SocialmediaComponent */] },
    { path: 'eventkiosk', component: __WEBPACK_IMPORTED_MODULE_24__components_eventkiosk_eventkiosk_component__["a" /* EventkioskComponent */] },
    { path: 'instorekiosk', component: __WEBPACK_IMPORTED_MODULE_25__components_instorekiosk_instorekiosk_component__["a" /* InstorekioskComponent */] },
    { path: 'jobpositions', component: __WEBPACK_IMPORTED_MODULE_26__components_jobpositions_jobpositions_component__["a" /* JobpositionsComponent */] },
    { path: 'avatars', component: __WEBPACK_IMPORTED_MODULE_12__components_avatars_avatars_component__["a" /* AvatarsComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_categories_categories_component__["a" /* CategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_emails_emails_component__["a" /* EmailsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__utility_safe_pipe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_10__components_demos_demos_component__["a" /* DemosComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_globals_globals_component__["a" /* GlobalsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_avatars_avatars_component__["a" /* AvatarsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_playboy_playboy_component__["a" /* PlayboyComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_banners_banners_component__["a" /* BannersComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_microwebsites_microwebsites_component__["a" /* MicrowebsitesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_datavisualizations_datavisualizations_component__["a" /* DatavisualizationsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_videocontrol_videocontrol_component__["a" /* VideocontrolComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_systems_systems_component__["a" /* SystemsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_miscellaneous_miscellaneous_component__["a" /* MiscellaneousComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_instructional_instructional_component__["a" /* InstructionalComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_nonnativeapps_nonnativeapps_component__["a" /* NonnativeappsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_nativeapps_nativeapps_component__["a" /* NativeappsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_socialmedia_socialmedia_component__["a" /* SocialmediaComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_eventkiosk_eventkiosk_component__["a" /* EventkioskComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_instorekiosk_instorekiosk_component__["a" /* InstorekioskComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_jobpositions_jobpositions_component__["a" /* JobpositionsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["b" /* NgProgressModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_11__components_globals_globals_component__["a" /* GlobalsComponent */], { provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* BrowserXhr */], useClass: __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["a" /* NgProgressBrowserXhr */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/avatars/avatars.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".video-preview {\r\n\r\n\r\n}\r\n\r\n.current-row3 {\r\n   /* min-height: 1012px;  */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/avatars/avatars.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n        <div class=\"col-md-12\"></div>\n      <h1 class=\"title\"><a href=\"\">www.CalvinParks.com</a><br/> <span>Avatars</span></h1>\n  </div>\n    <br/><br/>\n    \n      <section class=\"group\">\n        <div class=\"row\" *ngFor=\"let postData of postsData; let i=index; let showMyVideo='showImage1'; let last = last\" >\n            <div class=\"col-md-4 category current-row{{i}}-column1\" (click)=\"onItemClick(i,0)\">\n                <div class=\"\" *ngIf=\"(showRowVideos[i] && showColumnVideos[0])\">\n                  <video controls=\"controls\" autoplay   poster=\"{{postData.videoPosterPath[0]}}\" class=\"w-100\" title=\"Portfolio Video\">\n                    <source src=\"{{postData.videoPathMp4[0]}}\" type=\"video/mp4\" />\n                    <source src=\"{{postData.videoPathWebm[0]}}\" type=\"video/webm\" />\n                    <source src=\"{{postData.videoPathOgg[0]}}\" type=\"video/ogg\" />\n                    </video>                </div>\n                <div *ngIf=\"!(showRowVideos[i] && showColumnVideos[0])\" >\n                  <img src=\"{{postData.imagePath[0]}}\" class=\"w-100\">\n                </div>\n                <div class=\"category-title\">\n                  <p>{{postData.title[0]}}</p>\n                  <hr>\n                  <p>{{postData.description[0]}}</p>\n                </div>\n            </div>\n            <div class=\"col-md-4 category current-row{{i}}-column2\" (click)=\"onItemClick(i,1)\">\n              <div class=\"\" *ngIf=\"(showRowVideos[i] && showColumnVideos[1])\">\n                <video controls=\"controls\" autoplay   poster=\"{{postData.videoPosterPath[1]}}\" class=\"w-100\" title=\"Portfolio Video\">\n                  <source src=\"{{postData.videoPathMp4[1]}}\" type=\"video/mp4\" />\n                  <source src=\"{{postData.videoPathWebm[1]}}\" type=\"video/webm\" />\n                  <source src=\"{{postData.videoPathOgg[1]}}\" type=\"video/ogg\" />\n                  </video>              </div>\n              <div *ngIf=\"!(showRowVideos[i] && showColumnVideos[1])\" >\n                <img src=\"{{postData.imagePath[1]}}\" class=\"w-100\">\n              </div>\n              <div class=\"category-title\">\n                  <p>{{postData.title[1]}}</p>\n                  <hr>\n                  <p>{{postData.description[1]}}</p>\n              </div> \n            </div>\n              <div class=\"col-md-4 category current-row{{i}}-column3\" (click)=\"onItemClick(i,2)\">\n                  <div class=\"\" *ngIf=\"(showRowVideos[i] && showColumnVideos[2])\">\n                    <video controls=\"controls\" autoplay   poster=\"{{postData.videoPosterPath[2]}}\" class=\"w-100\" title=\"Portfolio Video\">\n                      <source src=\"{{postData.videoPathMp4[2]}}\" type=\"video/mp4\" />\n                      <source src=\"{{postData.videoPathWebm[2]}}\" type=\"video/webm\" />\n                      <source src=\"{{postData.videoPathOgg[2]}}\" type=\"video/ogg\" />\n                      </video>                  </div>\n                  <div *ngIf=\"!(showRowVideos[i] && showColumnVideos[2])\">\n                    <img src=\"{{postData.imagePath[2]}}\" class=\"w-100\">\n                  </div>\n                  <div class=\"category-title\">\n                    <p>{{postData.title[2]}}</p>\n                    <hr>\n                    <p>{{postData.description[2]}}</p>\n                  </div> \n              </div> {{last ? normalizeCategoryTitleDivHeights() : ''}}\n        </div>\n        <div class=\"col-md-12 email-contact\">\n            Contact: mailbox@calvinparks.com\n        </div>\n      </section>\n  <br><br>\n \n  \n\n\n\n</div>\n\n<br><br><br><br><br><br>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/avatars/avatars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AvatarsComponent = /** @class */ (function () {
    function AvatarsComponent(dataService) {
        this.dataService = dataService;
    }
    AvatarsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts("avatars").subscribe(function (post) {
            console.log(post);
            _this.posts = post;
            _this.postsData = _this.posts;
        });
        this.showRowImages = [true, true, true, true, true, true];
        this.showRowVideos = [false, false, false, false, false, false];
        this.showColumnImages = [true, true, true];
        this.showColumnVideos = [false, false, false];
        this.lastVideoViewed = "";
    };
    AvatarsComponent.prototype.setClickClass = function (theanchor) {
        var hideLink = false;
        console.log(theanchor.href);
        var theLink = theanchor.href;
        if (theLink.indexOf("nolink") > -1)
            hideLink = true;
        //console.log(hideLink);
        var classes = {
            'click-through-off': hideLink
        };
        return classes;
    };
    AvatarsComponent.prototype.onItemClick = function (theRow, theColumn) {
        // Begin: reset the images
        this.showRowImages = [true, true, true, true, true, true];
        this.showRowVideos = [false, false, false, false, false, false];
        this.showColumnImages = [true, true, true];
        this.showColumnVideos = [false, false, false];
        // End: reset the images
        if (this.lastVideoViewed == theRow + " " + theColumn)
            return;
        this.lastVideoViewed = theRow + " " + theColumn;
        this.showRowVideos[theRow] = true;
        this.showColumnVideos[theColumn] = true;
    };
    AvatarsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-avatars',
            template: __webpack_require__("../../../../../src/app/components/avatars/avatars.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/avatars/avatars.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], AvatarsComponent);
    return AvatarsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/banners/banners.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/banners/banners.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n          <div class=\"col-md-12\"></div>\n        <h1 class=\"title\"><a href=\"\">www.CalvinParks.com</a><br/> <span>Banner Ads</span></h1>\n        \n    </div>\n      <br/><br/>\n      \n        <section class=\"group\">\n            <div class=\"row\" *ngFor=\"let postData of postsData; let last = last\" >\n                <div class=\"col-md-4 category\" >\n                  <a (click)=\"showDemo(postData.demoPath[0],postData.demoHeight[0],postData.demoWidth[0])\">\n                  <img src=\"{{postData.imagePath[0]}}\" class=\"w-100\">\n                  <div class=\"category-title\">\n                    <p>{{postData.title[0]}}</p>\n                    <hr>\n                    <p>{{postData.description[0]}}</p>\n                  </div>\n                  </a>\n                </div>\n                <div class=\"col-md-4 category\" >\n                <a (click)=\"showDemo(postData.demoPath[1],postData.demoHeight[1],postData.demoWidth[1])\">\n                  <img src=\"{{postData.imagePath[1]}}\" class=\"w-100\">\n                  <div class=\"category-title\">\n                      <p>{{postData.title[1]}}</p>\n                      <hr>\n                      <p>{{postData.description[1]}}</p>\n                  </div> \n                </a>\n                </div>\n                  <div class=\"col-md-4 category\">\n                    <a (click)=\"showDemo(postData.demoPath[2],postData.demoHeight[2],postData.demoWidth[2])\">\n                    <img src=\"{{postData.imagePath[2]}}\" class=\"w-100\">\n                    <div class=\"category-title\">\n                      <p>{{postData.title[2]}}</p>\n                      <hr>\n                      <p>{{postData.description[2]}}</p>\n                    </div>\n                    </a>\n                  </div> \n                  <br>&nbsp; <br>\n            </div>\n            <br>\n            <div class=\"col-md-12 email-contact\">\n                Contact: mailbox@calvinparks.com \n            </div>\n        </section>\n    <br><br>\n   \n  </div>\n  \n  <br><br>\n "

/***/ }),

/***/ "../../../../../src/app/components/banners/banners.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__ = __webpack_require__("../../../../../src/app/components/globals/globals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BannersComponent = /** @class */ (function () {
    function BannersComponent(dataService, globals, router) {
        this.dataService = dataService;
        this.globals = globals;
        this.router = router;
        this.demoRefferURL = globals.demoRefferURL;
        this.demoUrl = globals.demoUrl;
        this.demoHeight = globals.demoHeight;
        this.demoWidth = globals.demoWidth;
        this.route = router;
    }
    BannersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts("banners").subscribe(function (post) {
            console.log(post);
            _this.posts = post;
            _this.postsData = _this.posts;
        });
    };
    BannersComponent.prototype.showDemo = function (thePath, theHeight, theWidth) {
        this.globals.demoRefferURL = "/banners";
        this.globals.demoUrl = "./assets/banners/" + thePath + "/index.html";
        this.globals.demoHeight = theHeight;
        this.globals.demoWidth = theWidth;
        this.route.navigateByUrl('/demos');
        Object(__WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["d" /* setScrollCookie */])();
    };
    BannersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-banners',
            template: __webpack_require__("../../../../../src/app/components/banners/banners.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/banners/banners.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["a" /* GlobalsComponent */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], BannersComponent);
    return BannersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".news {\r\n      margin: 0 auto;\r\n      width: 100%; \r\n      text-align: center;\r\n      color: white;\r\n      opacity: 0.3;\r\n  }\r\n\r\n.news-ticker {\r\n    opacity: 0.3;\r\n    border-top: 5px solid red;\r\n    border-bottom: 5px solid red;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px !important;\r\n    max-height: 200px !important; \r\n    max-width: 98%;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    float: clear;\r\n    overflow-x: scroll;\r\n    overflow-y: hidden;\r\n    color: rgb(211, 177, 177); \r\n    white-space: nowrap;\r\n    -webkit-transition: height .5s;\r\n    transition: height .5s;\r\n    height: 100px;\r\n\r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\r\n       -moz-user-select: none; /* Firefox */\r\n        -ms-user-select: none; /* Internet Explorer/Edge */\r\n            user-select: none; /* Non-prefixed version, currently\r\n                                  supported by Chrome and Opera */\r\n}\r\n\r\n.news-ticker:hover { \r\n    opacity: 1;\r\n    max-height: 200px !important;\r\n    -webkit-transition: height .5s;\r\n    transition: height .5s;\r\n    height: 200px;\r\n    \r\n}\r\n\r\n.news-items {\r\n    display: inline-block;\r\n    -webkit-box-sizing: content-box;\r\n            box-sizing: content-box;\r\n}\r\n\r\n.news-item {\r\n    vertical-align: top;\r\n    border: 0px solid white; \r\n    margin-bottom: 10px;\r\n    margin-right: 30px;\r\n    max-width: 200px;\r\n    min-width: 200px;\r\n    \r\n    max-height: 150px;\r\n    min-height: 150px;\r\n\r\n   /* float: left; */\r\n    display: inline-block;\r\n  /*  text-align: center; */\r\n}\r\n\r\n.news-ticker-img {\r\n    border: 0px solid green; \r\n    /* min-height: 50px;  */\r\n}\r\n\r\n.news-item img {\r\n    max-width: 150px;\r\n    /* min-height: 100px; */\r\n}\r\n\r\n.news-item-text {\r\n    border: 0px solid red;\r\n    font-size: 14px; \r\n    max-height: 50px !important;\r\n    min-height: 50px !important;\r\n    margin: 0 auto;\r\n    max-width: 80% !important;\r\n    text-align: left;\r\n    white-space: pre-wrap;\r\n}\r\n\r\n.news-date {\r\n    padding-left:5px;\r\n    color: red;\r\n}\r\n\r\n::-webkit-scrollbar-thumb { \r\n    border-radius: 4px; \r\n    border-color: black;\r\n    background: rgb(177, 4, 4); \r\n    width: 100px !important;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    height: 10px;\r\n    width: 300px !important;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-progress></ng-progress>\n<div class=\"container\">\n  <div class=\"row\">\n        <div class=\"col-md-12\"></div>\n      <h1 class=\"title\"><a href=\"\">www.CalvinParks.com</a></h1>\n  </div>\n    <br/><br/>\n    \n      <section class=\"group\" >\n        <div class=\"news\">Latest Project News</div>\n            <div class=\"row\" >\n                <div class=\"col-md-12 news-ticker\" id=\"news-ticker\" (click)=\"news_onClick($event)\">\n                  <div  class=\"news-items\" *ngFor=\"let storyData of newsData\">\n                    <div class=\"news-item\"> <div class=\"news-ticker-img\"><img src=\"{{storyData.imagePath[0]}}\" ></div><div class=\"news-item-text\"><div class=\"news-date\">{{storyData.date[0]}}</div>{{storyData.description[0]}}</div></div>\n                  </div>\n                </div>\n            </div>\n          <br/><br/>\n\n        <div class=\"row\" *ngFor=\"let postData of postsData; let last = last;\" >\n            <div class=\"col-md-4 category\" >\n              <a href=\"{{postData.clickThrough[0]}}\">\n              <img src=\"{{postData.imagePath[0]}}\" class=\"w-100\">\n              <div class=\"category-title\">\n                <p>{{postData.title[0]}}</p>\n                <hr>\n                <p>{{postData.description[0]}}</p>\n              </div>\n              </a>\n            </div>\n            <div class=\"col-md-4 category\" >\n            <a href=\"{{postData.clickThrough[1]}}\">\n              <img src=\"{{postData.imagePath[1]}}\" class=\"w-100\">\n              <div class=\"category-title\">\n                  <p>{{postData.title[1]}}</p>\n                  <hr>\n                  <p>{{postData.description[1]}}</p>\n              </div> \n            </a>\n            </div>\n              <div class=\"col-md-4 category\">\n                <a href=\"{{postData.clickThrough[2]}}\">\n                <img src=\"{{postData.imagePath[2]}}\" class=\"w-100\">\n                <div class=\"category-title\">\n                  <p>{{postData.title[2]}}</p>\n                  <hr>\n                  <p>{{postData.description[2]}}</p>\n                </div>\n                </a>\n              </div>\n        </div> \n        <div class=\"col-md-12 email-contact\">\n            Contact: mailbox@calvinparks.com\n        </div>\n      </section>\n      \n  <br><br>\n \n  \n\n\n\n</div>\n\n<br><br><br><br><br><br>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.scrollXIncrement = 1;
        this.intervalCounter = 0;
        this.scrollLimit = 7300;
        this.windowSize = 0;
        this.newsIntervalFunction = function (x) {
            var ScrollXOffset = window.document.getElementById("news-ticker").scrollLeft;
            if (ScrollXOffset != this.intervalCounter * this.scrollXIncrement) {
                // alert("interval stopped!");
                clearInterval(this.newsIntervalID);
            }
            this.intervalCounter++;
            window.document.getElementById("news-ticker").scrollLeft += this.scrollXIncrement;
        };
        this.newsIntervalID = setInterval(function () {
            _this.newsIntervalFunction();
            if (window.document.getElementById("news-ticker").scrollLeft > _this.scrollLimit) {
                // alert("interval stopped!");
                clearInterval(_this.newsIntervalID);
            }
        }, 20);
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts("categories").subscribe(function (post) {
            console.log(post);
            _this.posts = post;
            _this.postsData = _this.posts;
        });
        this.dataService.getPosts("news").subscribe(function (news) {
            console.log(news);
            _this.news = news;
            _this.newsData = _this.news;
            _this.scrollLimit = 100 + (_this.newsData.length * 200);
        });
    };
    CategoriesComponent.prototype.news_onClick = function (e) {
        clearInterval(this.newsIntervalID);
        //  window.document.getElementById('news-ticker').style.height="200px";
    };
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-categories',
            template: __webpack_require__("../../../../../src/app/components/categories/categories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/datavisualizations/datavisualizations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/datavisualizations/datavisualizations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n            <div class=\"col-md-12\"></div>\n          <h1 class=\"title\"><a href=\"\">www.CalvinParks.com</a><br/> <span>Data Visualization</span></h1>\n          \n      </div>\n        <br/><br/>\n      \n        <section class=\"group\">\n          <div class=\"row\" *ngFor=\"let postData of postsData; let last = last\" >\n              <div class=\"col-md-4 category\" >\n                <a #myanchor1 [ngClass]=\"setClickClass(myanchor1)\" href=\"{{postData.clickThrough[0]}}\">\n                <img src=\"{{postData.imagePath[0]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                  <p>{{postData.title[0]}}</p>\n                  <hr>\n                  <p>{{postData.description[0]}}</p>\n                </div>\n\n              </div>\n              <div class=\"col-md-4 category\" >\n              <a #myanchor2 [ngClass]=\"setClickClass(myanchor2)\" href=\"{{postData.clickThrough[1]}}\">\n                <img src=\"{{postData.imagePath[1]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                    <p>{{postData.title[1]}}</p>\n                    <hr>\n                    <p>{{postData.description[1]}}</p>\n                </div> \n\n              </div>\n                <div class=\"col-md-4 category\">\n                <a #myanchor3 [ngClass]=\"setClickClass(myanchor3)\" href=\"{{postData.clickThrough[2]}}\">\n                  <img src=\"{{postData.imagePath[2]}}\" class=\"w-100\">\n                </a>\n                  <div class=\"category-title\">\n                    <p>{{postData.title[2]}}</p>\n                    <hr>\n                    <p>{{postData.description[2]}}</p>\n                  </div>\n\n                </div>\n          </div>\n          <div class=\"col-md-12 email-contact\">\n              Contact: mailbox@calvinparks.com\n          </div>\n        </section>\n    <br><br>\n   \n    \n  \n  \n  \n  </div>\n  \n  <br><br><br><br><br><br>\n  \n  \n  "

/***/ }),

/***/ "../../../../../src/app/components/datavisualizations/datavisualizations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatavisualizationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__ = __webpack_require__("../../../../../src/app/components/globals/globals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatavisualizationsComponent = /** @class */ (function () {
    function DatavisualizationsComponent(dataService) {
        this.dataService = dataService;
        this.normalizeCategoryTitleDivHeights = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["c" /* normalizeCategoryTitleDivHeights */];
        this.deactiveNullAnchors = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["b" /* deactiveNullAnchors */];
    }
    DatavisualizationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts("datavisual").subscribe(function (post) {
            console.log(post);
            _this.posts = post;
            _this.postsData = _this.posts;
        });
    };
    DatavisualizationsComponent.prototype.setClickClass = function (theanchor) {
        var hideLink = false;
        console.log(theanchor.href);
        var theLink = theanchor.href;
        if (theLink.indexOf("nolink") > -1)
            hideLink = true;
        //console.log(hideLink);
        var classes = {
            'click-through-off': hideLink
        };
        return classes;
    };
    DatavisualizationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-datavisualizations',
            template: __webpack_require__("../../../../../src/app/components/datavisualizations/datavisualizations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/datavisualizations/datavisualizations.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], DatavisualizationsComponent);
    return DatavisualizationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/demos/demos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    min-height: 100px;\r\n    text-align: center;\r\n}\r\n\r\ndiv a img {\r\n    margin-top: 100px;\r\n    width: 100px;\r\n}\r\n\r\niframe {\r\n    display: block;\r\n    width: 70%;\r\n    min-height:  1700px;\r\n    margin-top: 10px;\r\n    margin-bottom: 100px;\r\n    background-color: white;\r\n    overflow:hidden;\r\n}\r\n\r\n@media only screen and (max-width:599px) {\r\n    iframe {\r\n\r\n        max-height:  290px !important;\r\n        height: 830px !important;\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/demos/demos.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1 class=\"title\"><a href=\"\">www.CalvinParks.com</a><br/> <span>Examples</span></h1>\n<div align=\"center\">\n  <a href=\"#{{demoRefferURL}}\"><img src=\"./assets/images/backButton.png\"></a>\n  \n  <iframe #sliderFrame [style.background-color]=\"setBackgroundColor()\" [style.min-height]=\"setHeight()\" [style.max-width]=\"setWidth()\" height=\"auto\" [src]=\"getDemoURL() | safe\" scrolling=\"no\"></iframe>\n </div>"

/***/ }),

/***/ "../../../../../src/app/components/demos/demos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__ = __webpack_require__("../../../../../src/app/components/globals/globals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemosComponent = /** @class */ (function () {
    function DemosComponent(globals) {
        this.globals = globals;
        this.iframeHeight = "1000px";
        this.iframeWidth = "2000px";
        this.demoRefferURL = globals.demoRefferURL;
        this.demoUrl = globals.demoUrl;
        this.demoHeight = globals.demoHeight + "px";
        this.demoWidth = globals.demoWidth + "px";
    }
    DemosComponent.prototype.ngOnInit = function () {
        //window.document.getElementById('news-ticker').style.height="200px";
    };
    DemosComponent.prototype.ngAfterContentInit = function () {
        //alert("DEMO inside ngAfterContentInit");
    };
    DemosComponent.prototype.ngAfterContentChecked = function () {
        // alert("DEMO inside ngAfterContentChecked");
    };
    DemosComponent.prototype.setHeight = function () {
        this.iframeHeight = this.demoHeight;
        // alert(window.innerWidth); //755
        // alert(this.iframeHeight);
        if (window.innerWidth < 755) {
            var tmpHeight = this.iframeHeight.substring(0, this.iframeHeight.length - 2);
            var deltaHeight = Number(tmpHeight) * .62;
            var newHeight = Number(tmpHeight) + deltaHeight;
            var newHeightString = String(newHeight) + "px";
            return newHeightString;
            // return "3400px";  // add 1300
        }
        return this.iframeHeight;
    };
    DemosComponent.prototype.setWidth = function () {
        this.iframeWidth = this.demoWidth;
        return this.iframeWidth;
    };
    DemosComponent.prototype.setBackgroundColor = function () {
        if (this.demoUrl.indexOf("banner") > -1) {
            return "black";
        }
        else {
            return "white";
        }
    };
    DemosComponent.prototype.getDemoURL = function () {
        return (this.demoUrl);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('sliderFrame'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DemosComponent.prototype, "iframe", void 0);
    DemosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-demos',
            template: __webpack_require__("../../../../../src/app/components/demos/demos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/demos/demos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["a" /* GlobalsComponent */]])
    ], DemosComponent);
    return DemosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/emails/emails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/emails/emails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n          <div class=\"col-md-12\"></div>\n        <h1 class=\"title\"><a href=\"\">www.CalvinParks.com</a><br/> <span>Content Rich E-Mails</span></h1>\n        \n    </div>\n      <br/><br/>\n      \n        <section class=\"group\">\n            <div class=\"row\" *ngFor=\"let postData of postsData\" >\n                <div class=\"col-md-4 category\" >\n                  <a (click)=\"showDemo(postData.demoPath[0],postData.demoHeight[0],postData.demoWidth[0])\">\n                  <img src=\"{{postData.imagePath[0]}}\" class=\"w-100\">\n                  <div class=\"category-title\">\n                    <p>{{postData.title[0]}}</p>\n                    <hr>\n                    <p>{{postData.description[0]}}</p>\n                  </div>\n                  </a>\n                </div>\n                <div class=\"col-md-4 category\" >\n                <a (click)=\"showDemo(postData.demoPath[1],postData.demoHeight[1],postData.demoWidth[1])\">\n                  <img src=\"{{postData.imagePath[1]}}\" class=\"w-100\">\n                  <div class=\"category-title\">\n                      <p>{{postData.title[1]}}</p>\n                      <hr>\n                      <p>{{postData.description[1]}}</p>\n                  </div> \n                </a>\n                </div>\n                <div class=\"col-md-4 category\" >\n                  <a (click)=\"showDemo(postData.demoPath[2],postData.demoHeight[2],postData.demoWidth[2])\">\n                    <img src=\"{{postData.imagePath[2]}}\" class=\"w-100\">\n                    <div class=\"category-title\">\n                        <p>{{postData.title[2]}}</p>\n                        <hr>\n                        <p>{{postData.description[2]}}</p>\n                    </div> \n                  </a>\n                  </div>\n                  <br>&nbsp;<br>\n            </div>\n            <br> \n            <div class=\"col-md-12 email-contact\">\n                Contact: mailbox@calvinparks.com \n            </div>\n        </section>\n    <br><br>\n   \n  </div>\n  \n  <br><br>\n "

/***/ }),

/***/ "../../../../../src/app/components/emails/emails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__ = __webpack_require__("../../../../../src/app/components/globals/globals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmailsComponent = /** @class */ (function () {
    function EmailsComponent(dataService, globals, router) {
        this.dataService = dataService;
        this.globals = globals;
        this.router = router;
        this.demoRefferURL = globals.demoRefferURL;
        this.demoUrl = globals.demoUrl;
        this.demoHeight = globals.demoHeight;
        this.demoWidth = globals.demoWidth;
        this.route = router;
    }
    EmailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts("emails").subscribe(function (post) {
            console.log(post);
            _this.posts = post;
            _this.postsData = _this.posts;
        });
    };
    EmailsComponent.prototype.showDemo = function (thePath, theHeight, theWidth) {
        this.globals.demoRefferURL = "/emails";
        this.globals.demoUrl = "./assets/emails/" + thePath + "/index.html";
        this.globals.demoHeight = theHeight;
        this.globals.demoWidth = theWidth;
        this.route.navigateByUrl('/demos');
        Object(__WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["d" /* setScrollCookie */])();
    };
    EmailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-emails',
            template: __webpack_require__("../../../../../src/app/components/emails/emails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/emails/emails.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["a" /* GlobalsComponent */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], EmailsComponent);
    return EmailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/eventkiosk/eventkiosk.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/eventkiosk/eventkiosk.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n            <div class=\"col-md-12\"></div>\n          <h1 class=\"title\"><a href=\"\">www.CalvinParks.com</a><br/> <span>Event Kiosk</span></h1>\n          \n      </div>\n        <br/><br/>\n      \n        <section class=\"group\">\n          <div class=\"row\" *ngFor=\"let postData of postsData; let last = last\" >\n              <div class=\"col-md-4 category\" >\n                <a #myanchor1 [ngClass]=\"setClickClass(myanchor1)\" href=\"{{postData.clickThrough[0]}}\">\n                <img src=\"{{postData.imagePath[0]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                  <p>{{postData.title[0]}}</p>\n                  <hr>\n                  <p>{{postData.description[0]}}</p>\n                </div>\n\n              </div>\n              <div class=\"col-md-4 category\" >\n              <a #myanchor2 [ngClass]=\"setClickClass(myanchor2)\" href=\"{{postData.clickThrough[1]}}\">\n                <img src=\"{{postData.imagePath[1]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                    <p>{{postData.title[1]}}</p>\n                    <hr>\n                    <p>{{postData.description[1]}}</p>\n                </div> \n\n              </div>\n                <div class=\"col-md-4 category\">\n                <a #myanchor3 [ngClass]=\"setClickClass(myanchor3)\" href=\"{{postData.clickThrough[2]}}\">\n                  <img src=\"{{postData.imagePath[2]}}\" class=\"w-100\">\n                </a>                  \n                  <div class=\"category-title\">\n                    <p>{{postData.title[2]}}</p>\n                    <hr>\n                    <p>{{postData.description[2]}}</p>\n                  </div>\n\n                </div> \n          </div>\n          <div class=\"col-md-12 email-contact\">\n              Contact: mailbox@calvinparks.com\n          </div>\n        </section>\n    <br><br>\n   \n    \n  \n  \n  \n  </div>\n  \n  <br><br><br><br><br><br>\n  \n  \n  "

/***/ }),

/***/ "../../../../../src/app/components/eventkiosk/eventkiosk.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventkioskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__ = __webpack_require__("../../../../../src/app/components/globals/globals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventkioskComponent = /** @class */ (function () {
    function EventkioskComponent(dataService) {
        this.dataService = dataService;
        this.normalizeCategoryTitleDivHeights = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["c" /* normalizeCategoryTitleDivHeights */];
        this.deactiveNullAnchors = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["b" /* deactiveNullAnchors */];
    }
    EventkioskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts("eventkiosk").subscribe(function (post) {
            console.log(post);
            _this.posts = post;
            _this.postsData = _this.posts;
        });
    };
    EventkioskComponent.prototype.setClickClass = function (theanchor) {
        var hideLink = false;
        console.log(theanchor.href);
        var theLink = theanchor.href;
        if (theLink.indexOf("nolink") > -1)
            hideLink = true;
        //console.log(hideLink);
        var classes = {
            'click-through-off': hideLink
        };
        return classes;
    };
    EventkioskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-eventkiosk',
            template: __webpack_require__("../../../../../src/app/components/eventkiosk/eventkiosk.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/eventkiosk/eventkiosk.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], EventkioskComponent);
    return EventkioskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/globals/globals.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/globals/globals.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  globals works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/globals/globals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalsComponent; });
/* harmony export (immutable) */ __webpack_exports__["d"] = setScrollCookie;
/* harmony export (immutable) */ __webpack_exports__["c"] = normalizeCategoryTitleDivHeights;
/* harmony export (immutable) */ __webpack_exports__["b"] = deactiveNullAnchors;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalsComponent = /** @class */ (function () {
    function GlobalsComponent() {
        this.demoRefferURL = "";
        this.demoUrl = './assets/blank.html';
        this.demoHeight = "500";
        this.demoWidth = "200";
    }
    GlobalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-globals',
            template: __webpack_require__("../../../../../src/app/components/globals/globals.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/globals/globals.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalsComponent);
    return GlobalsComponent;
}());

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return y;
        }
    }
}
function setScrollCookie() {
    //alert("test  "+"currentPage");
    var cvalue = window.pageYOffset;
    var exSeconds = 240;
    var currentPageArray = document.URL.split("/");
    var cname = currentPageArray[currentPageArray.length - 1];
    //var cname = currentPage;
    if ((cname.length == 0) || (cname == "categories")) {
        cname = "categories";
        exSeconds = 600;
    }
    var d = new Date();
    d.setTime(d.getTime() + (exSeconds * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
;
function normalizeCategoryTitleDivHeights() {
    //alert("inside normalize category");
    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    var matches = window.document.getElementsByClassName("category-title");
    var maxHeight = 0;
    for (var i = 0; i < matches.length; i++) {
        if (matches[i].clientHeight > maxHeight) {
            maxHeight = matches[i].clientHeight;
        }
    }
    style.innerHTML = '.cssClass { min-height: ' + maxHeight + 'px; }';
    for (var i = 0; i < matches.length; i++) {
        matches[i].classList.add('cssClass');
    }
    //alert("ENDING: inside global");
    var currentPageArray = document.URL.split("/");
    var currentPage = currentPageArray[currentPageArray.length - 1];
    if (currentPage.length == 0)
        currentPage = "categories";
    var scrollToY = getCookie(currentPage);
    if (!scrollToY)
        scrollToY = 0;
    window.scrollTo(0, Number(scrollToY) * 1.0); // adjust scrolling  by a % to position tiles correctly
    //alert(document.cookie);
}
;
function deactiveNullAnchors() {
    //alert("inside global");
    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    style.innerHTML = '.css2Class {  pointer-events: none; }';
    var matches = window.document.getElementsByClassName("click-through");
    for (var i = 0; i < matches.length; i++) {
        var elementHTML = matches[i].parentElement.innerHTML;
        if (elementHTML.indexOf('nolink') > -1) {
            matches[i].parentElement.classList.add('css2Class');
        }
    }
}
;


/***/ }),

/***/ "../../../../../src/app/components/instorekiosk/instorekiosk.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/instorekiosk/instorekiosk.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n            <div class=\"col-md-12\"></div>\n          <h1 class=\"title\"><a href=\"\">www.CalvinParks.com</a><br/> <span>InStore Kiosk</span></h1>\n          \n      </div>\n        <br/><br/>\n      \n        <section class=\"group\">\n          <div class=\"row\" *ngFor=\"let postData of postsData; let last = last\" >\n              <div class=\"col-md-4 category\" >\n                <a #myanchor1 [ngClass]=\"setClickClass(myanchor1)\" href=\"{{postData.clickThrough[0]}}\">\n                <img src=\"{{postData.imagePath[0]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                  <p>{{postData.title[0]}}</p>\n                  <hr>\n                  <p>{{postData.description[0]}}</p>\n                </div>\n\n              </div>\n              <div class=\"col-md-4 category\" >\n              <a #myanchor2 [ngClass]=\"setClickClass(myanchor2)\" href=\"{{postData.clickThrough[1]}}\">\n                <img src=\"{{postData.imagePath[1]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                    <p>{{postData.title[1]}}</p>\n                    <hr>\n                    <p>{{postData.description[1]}}</p>\n                </div> \n\n              </div>\n                <div class=\"col-md-4 category\">\n                <a #myanchor3 [ngClass]=\"setClickClass(myanchor3)\" href=\"{{postData.clickThrough[2]}}\">\n                  <img src=\"{{postData.imagePath[2]}}\" class=\"w-100\">\n                </a>\n                  <div class=\"category-title\">\n                    <p>{{postData.title[2]}}</p>\n                    <hr>\n                    <p>{{postData.description[2]}}</p>\n                  </div>\n\n                </div> \n          </div>\n          <div class=\"col-md-12 email-contact\">\n              Contact: mailbox@calvinparks.com\n          </div>\n        </section>\n    <br><br>\n   \n    \n  \n  \n  \n  </div>\n  \n  <br><br><br><br><br><br>\n  \n  \n  "

/***/ }),

/***/ "../../../../../src/app/components/instorekiosk/instorekiosk.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstorekioskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__ = __webpack_require__("../../../../../src/app/components/globals/globals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InstorekioskComponent = /** @class */ (function () {
    function InstorekioskComponent(dataService) {
        this.dataService = dataService;
        this.normalizeCategoryTitleDivHeights = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["c" /* normalizeCategoryTitleDivHeights */];
        this.deactiveNullAnchors = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["b" /* deactiveNullAnchors */];
    }
    InstorekioskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts("instorekiosk").subscribe(function (post) {
            console.log(post);
            _this.posts = post;
            _this.postsData = _this.posts;
        });
    };
    InstorekioskComponent.prototype.setClickClass = function (theanchor) {
        var hideLink = false;
        console.log(theanchor.href);
        var theLink = theanchor.href;
        if (theLink.indexOf("nolink") > -1)
            hideLink = true;
        //console.log(hideLink);
        var classes = {
            'click-through-off': hideLink
        };
        return classes;
    };
    InstorekioskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-instorekiosk',
            template: __webpack_require__("../../../../../src/app/components/instorekiosk/instorekiosk.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/instorekiosk/instorekiosk.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], InstorekioskComponent);
    return InstorekioskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/instructional/instructional.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/instructional/instructional.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n            <div class=\"col-md-12\"></div>\n          <h1 class=\"title\"><a href=\"\">www.CalvinParks.com</a><br/> <span>Instructional</span></h1>\n          \n      </div>\n        <br/><br/>\n      \n        <section class=\"group\">\n          <div class=\"row\" *ngFor=\"let postData of postsData; let last = last\" >\n              <div class=\"col-md-4 category\" >\n                <a class=\"click-through\" href=\"{{postData.clickThrough[0]}}\">\n                <img src=\"{{postData.imagePath[0]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                  <p>{{postData.title[0]}}</p>\n                  <hr>\n                  <p>{{postData.description[0]}}</p>\n                </div>\n\n              </div>\n              <div class=\"col-md-4 category\" >\n              <a class=\"click-through\" href=\"{{postData.clickThrough[1]}}\">\n                <img src=\"{{postData.imagePath[1]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                    <p>{{postData.title[1]}}</p>\n                    <hr>\n                    <p>{{postData.description[1]}}</p>\n                </div> \n\n              </div>\n                <div class=\"col-md-4 category\">\n                <a class=\"click-through\" href=\"{{postData.clickThrough[2]}}\">\n                  <img src=\"{{postData.imagePath[2]}}\" class=\"w-100\">\n                </a>\n                  <div class=\"category-title\">\n                    <p>{{postData.title[2]}}</p>\n                    <hr>\n                    <p>{{postData.description[2]}}</p>\n                  </div>\n\n                </div>\n          </div>\n          <div class=\"col-md-12 email-contact\">\n              Contact: mailbox@calvinparks.com\n          </div>\n        </section>\n    <br><br>\n   \n    \n  \n  \n  \n  </div>\n  \n  <br><br><br><br><br><br>\n  \n  \n  "

/***/ }),

/***/ "../../../../../src/app/components/instructional/instructional.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructionalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__ = __webpack_require__("../../../../../src/app/components/globals/globals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InstructionalComponent = /** @class */ (function () {
    function InstructionalComponent(dataService) {
        this.dataService = dataService;
        this.normalizeCategoryTitleDivHeights = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["c" /* normalizeCategoryTitleDivHeights */];
        this.deactiveNullAnchors = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["b" /* deactiveNullAnchors */];
    }
    InstructionalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts("instruction").subscribe(function (post) {
            console.log(post);
            _this.posts = post;
            _this.postsData = _this.posts;
        });
    };
    InstructionalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-instructional',
            template: __webpack_require__("../../../../../src/app/components/instructional/instructional.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/instructional/instructional.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], InstructionalComponent);
    return InstructionalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/jobpositions/jobpositions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jobpositions/jobpositions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n            <div class=\"col-md-12\"></div>\n          <h1 class=\"title\"><a href=\"\">www.CalvinParks.com</a><br/> <span>Job Positions</span></h1>\n          \n      </div>\n        <br/><br/>\n      \n        <section class=\"group\">\n          <div class=\"row\" *ngFor=\"let postData of postsData; let last = last\" >\n              <div class=\"col-md-4 category\" >\n                <a #myanchor1 [ngClass]=\"setClickClass(myanchor1)\" href=\"{{postData.clickThrough[0]}}\">\n                <img src=\"{{postData.imagePath[0]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                  <p>{{postData.title[0]}}</p>\n                  <hr>\n                  <p>{{postData.description[0]}}</p>\n                </div>\n\n              </div>\n              <div class=\"col-md-4 category\" >\n              <a #myanchor2 [ngClass]=\"setClickClass(myanchor2)\" href=\"{{postData.clickThrough[1]}}\">\n                <img src=\"{{postData.imagePath[1]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                    <p>{{postData.title[1]}}</p>\n                    <hr>\n                    <p>{{postData.description[1]}}</p>\n                </div> \n\n              </div>\n                <div class=\"col-md-4 category\">\n                <a #myanchor3 [ngClass]=\"setClickClass(myanchor3)\" href=\"{{postData.clickThrough[2]}}\">\n                  <img src=\"{{postData.imagePath[2]}}\" class=\"w-100\">\n                </a>\n                  <div class=\"category-title\">\n                    <p>{{postData.title[2]}}</p>\n                    <hr>\n                    <p>{{postData.description[2]}}</p>\n                  </div>\n\n                </div> \n          </div>\n          <div class=\"col-md-12 email-contact\">\n              Contact: mailbox@calvinparks.com\n          </div>\n        </section>\n    <br><br>\n   \n    \n  \n  \n  \n  </div>\n  \n  <br><br><br><br><br><br>\n  \n  \n  \n"

/***/ }),

/***/ "../../../../../src/app/components/jobpositions/jobpositions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobpositionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__ = __webpack_require__("../../../../../src/app/components/globals/globals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobpositionsComponent = /** @class */ (function () {
    function JobpositionsComponent(dataService) {
        this.dataService = dataService;
        this.normalizeCategoryTitleDivHeights = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["c" /* normalizeCategoryTitleDivHeights */];
        this.deactiveNullAnchors = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["b" /* deactiveNullAnchors */];
    }
    JobpositionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts("jobpositions").subscribe(function (post) {
            console.log(post);
            _this.posts = post;
            _this.postsData = _this.posts;
        });
    };
    JobpositionsComponent.prototype.ngAfterContentInit = function () {
    };
    JobpositionsComponent.prototype.ngAfterContentChecked = function () {
    };
    JobpositionsComponent.prototype.setClickClass = function (theanchor) {
        var hideLink = false;
        console.log(theanchor.href);
        var theLink = theanchor.href;
        if (theLink.indexOf("nolink") > -1)
            hideLink = true;
        //console.log(hideLink);
        var classes = {
            'click-through-off': hideLink
        };
        return classes;
    };
    JobpositionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-jobpositions',
            template: __webpack_require__("../../../../../src/app/components/jobpositions/jobpositions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/jobpositions/jobpositions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], JobpositionsComponent);
    return JobpositionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/microwebsites/microwebsites.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".category-title {\r\n\r\n /* min-height: 244px; */ \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/microwebsites/microwebsites.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n            <div class=\"col-md-12\"></div>\n          <h1 class=\"title\"><a href=\"\">www.CalvinParks.com</a><br/> <span>Websites</span></h1>\n          \n      </div>\n        <br/><br/>\n      \n        <section class=\"group\" >\n          <div class=\"row\" *ngFor=\"let postData of postsData; let last = last\" >\n              <div class=\"col-md-4 category\" >\n                <a #myanchor1 [ngClass]=\"setClickClass(myanchor1)\"  href=\"{{postData.clickThrough[0]}}\">\n                <img src=\"{{postData.imagePath[0]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                  <p>{{postData.title[0]}}</p>\n                  <hr>\n                  <p class=\"description-text\">{{postData.description[0]}}</p>\n                </div>\n\n              </div>\n              <div class=\"col-md-4 category\" >\n              <a   #myanchor2 [ngClass]=\"setClickClass(myanchor2)\" href=\"{{postData.clickThrough[1]}}\">\n                <img src=\"{{postData.imagePath[1]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                    <p>{{postData.title[1]}}</p>\n                    <hr>\n                    <p>{{postData.description[1]}}</p>\n                </div> \n\n              </div>\n                <div class=\"col-md-4 category\">\n                <a   #myanchor3 [ngClass]=\"setClickClass(myanchor3)\" href=\"{{postData.clickThrough[2]}}\">\n                  <img src=\"{{postData.imagePath[2]}}\" class=\"w-100\">\n                </a>\n                  <div class=\"category-title\">\n                    <p>{{postData.title[2]}}</p>\n                    <hr>\n                    <p>{{postData.description[2]}}</p>\n                  </div>\n\n                </div> \n\n          </div>\n          <div class=\"col-md-12 email-contact\">\n            <a (click)=\"normalizeCategoryTitleDivHeights()\"> Contact: mailbox@calvinparks.com</a>\n          </div>\n        </section>\n    <br><br>\n   \n    \n  \n  \n  \n  </div>\n  \n  <br><br><br><br><br><br>\n  \n    \n \n  \n  \n  "

/***/ }),

/***/ "../../../../../src/app/components/microwebsites/microwebsites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MicrowebsitesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__ = __webpack_require__("../../../../../src/app/components/globals/globals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MicrowebsitesComponent = /** @class */ (function () {
    function MicrowebsitesComponent(dataService) {
        this.dataService = dataService;
        this.normalizeCategoryTitleDivHeights = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["c" /* normalizeCategoryTitleDivHeights */];
        this.deactiveNullAnchors = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["b" /* deactiveNullAnchors */];
    }
    MicrowebsitesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts("microsites").subscribe(function (post) {
            console.log(post);
            _this.posts = post;
            _this.postsData = _this.posts;
        });
    };
    MicrowebsitesComponent.prototype.ngAfterViewInit = function () {
    };
    MicrowebsitesComponent.prototype.setClickClass = function (theanchor) {
        var hideLink = false;
        console.log(theanchor.href);
        var theLink = theanchor.href;
        if (theLink.indexOf("nolink") > -1)
            hideLink = true;
        //console.log(hideLink);
        var classes = {
            'click-through-off': hideLink
        };
        return classes;
    };
    MicrowebsitesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-microwebsites',
            template: __webpack_require__("../../../../../src/app/components/microwebsites/microwebsites.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/microwebsites/microwebsites.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], MicrowebsitesComponent);
    return MicrowebsitesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/miscellaneous/miscellaneous.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/miscellaneous/miscellaneous.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n            <div class=\"col-md-12\"></div>\n          <h1 class=\"title\"><a href=\"\">www.CalvinParks.com</a><br/> <span>Miscellaneous</span></h1>\n          \n      </div>\n        <br/><br/>\n      \n        <section class=\"group\">\n          <div class=\"row\" *ngFor=\"let postData of postsData; let last = last\" >\n              <div class=\"col-md-4 category\" >\n                <a #myanchor1 [ngClass]=\"setClickClass(myanchor1)\" href=\"{{postData.clickThrough[0]}}\" >    \n                <img src=\"{{postData.imagePath[0]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                  <p>{{postData.title[0]}}</p>\n                  <hr>\n                  <p>{{postData.description[0]}}</p>\n                </div>\n              \n              </div>\n              <div class=\"col-md-4 category\" >\n              <a  #myanchor2 [ngClass]=\"setClickClass(myanchor2)\" href=\"{{postData.clickThrough[1]}}\">\n                <img src=\"{{postData.imagePath[1]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                    <p>{{postData.title[1]}}</p>\n                    <hr>\n                    <p>{{postData.description[1]}}</p>\n                </div> \n\n              </div>\n                <div class=\"col-md-4 category\">\n                <a  #myanchor3 [ngClass]=\"setClickClass(myanchor3)\" href=\"{{postData.clickThrough[2]}}\">\n                  <img  src=\"{{postData.imagePath[2]}}\" class=\"w-100\">\n                </a> \n                  <div class=\"category-title\">\n                    <p>{{postData.title[2]}}</p>\n                    <hr>\n                    <p>{{postData.description[2]}}</p>\n                  </div>\n\n                </div> \n          </div> \n          <div class=\"col-md-12 email-contact\">\n              Contact: mailbox@calvinparks.com\n          </div>\n        </section>\n    <br><br>\n   \n    \n  \n  \n  \n  </div>\n  \n  <br><br><br><br><br><br>\n  \n  \n  "

/***/ }),

/***/ "../../../../../src/app/components/miscellaneous/miscellaneous.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiscellaneousComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__ = __webpack_require__("../../../../../src/app/components/globals/globals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MiscellaneousComponent = /** @class */ (function () {
    function MiscellaneousComponent(dataService) {
        this.dataService = dataService;
        this.normalizeCategoryTitleDivHeights = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["c" /* normalizeCategoryTitleDivHeights */];
        this.deactiveNullAnchors = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["b" /* deactiveNullAnchors */];
    }
    MiscellaneousComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts("misc").subscribe(function (post) {
            console.log(post);
            _this.posts = post;
            _this.postsData = _this.posts;
        });
    };
    MiscellaneousComponent.prototype.setClickClass = function (theanchor) {
        var hideLink = false;
        console.log(theanchor.href);
        var theLink = theanchor.href;
        if (theLink.indexOf("nolink") > -1)
            hideLink = true;
        console.log(hideLink);
        var classes = {
            'click-through-off': hideLink
        };
        return classes;
    };
    MiscellaneousComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-miscellaneous',
            template: __webpack_require__("../../../../../src/app/components/miscellaneous/miscellaneous.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/miscellaneous/miscellaneous.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], MiscellaneousComponent);
    return MiscellaneousComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nativeapps/nativeapps.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nativeapps/nativeapps.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n            <div class=\"col-md-12\"></div>\n          <h1 class=\"title\"><a href=\"\">www.CalvinParks.com</a><br/> <span>Native Apps</span></h1>\n          \n      </div>\n        <br/><br/>\n      \n        <section class=\"group\">\n          <div class=\"row\" *ngFor=\"let postData of postsData; let last = last\" >\n              <div class=\"col-md-4 category\" >\n                <a #myanchor1 [ngClass]=\"setClickClass(myanchor1)\" href=\"{{postData.clickThrough[0]}}\">\n                <img src=\"{{postData.imagePath[0]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                  <p>{{postData.title[0]}}</p>\n                  <hr>\n                  <p>{{postData.description[0]}}</p>\n                </div>\n\n              </div>\n              <div class=\"col-md-4 category\" >\n              <a #myanchor2 [ngClass]=\"setClickClass(myanchor2)\" href=\"{{postData.clickThrough[1]}}\">\n                <img src=\"{{postData.imagePath[1]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                    <p>{{postData.title[1]}}</p>\n                    <hr>\n                    <p>{{postData.description[1]}}</p>\n                </div> \n\n              </div>\n                <div class=\"col-md-4 category\">\n                <a #myanchor3 [ngClass]=\"setClickClass(myanchor3)\" href=\"{{postData.clickThrough[2]}}\">\n                  <img src=\"{{postData.imagePath[2]}}\" class=\"w-100\">\n                </a>\n                  <div class=\"category-title\">\n                    <p>{{postData.title[2]}}</p>\n                    <hr>\n                    <p>{{postData.description[2]}}</p>\n                  </div>\n\n                </div>\n          </div>\n          <div class=\"col-md-12 email-contact\">\n              Contact: mailbox@calvinparks.com\n          </div>\n        </section>\n    <br><br>\n   \n    \n  \n  \n  \n  </div>\n  \n  <br><br><br><br><br><br>\n  \n  \n  "

/***/ }),

/***/ "../../../../../src/app/components/nativeapps/nativeapps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeappsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__ = __webpack_require__("../../../../../src/app/components/globals/globals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NativeappsComponent = /** @class */ (function () {
    function NativeappsComponent(dataService) {
        this.dataService = dataService;
        this.normalizeCategoryTitleDivHeights = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["c" /* normalizeCategoryTitleDivHeights */];
        this.deactiveNullAnchors = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["b" /* deactiveNullAnchors */];
    }
    NativeappsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts("nativeapps").subscribe(function (post) {
            console.log(post);
            _this.posts = post;
            _this.postsData = _this.posts;
        });
    };
    NativeappsComponent.prototype.setClickClass = function (theanchor) {
        var hideLink = false;
        console.log(theanchor.href);
        var theLink = theanchor.href;
        if (theLink.indexOf("nolink") > -1)
            hideLink = true;
        //console.log(hideLink);
        var classes = {
            'click-through-off': hideLink
        };
        return classes;
    };
    NativeappsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nativeapps',
            template: __webpack_require__("../../../../../src/app/components/nativeapps/nativeapps.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nativeapps/nativeapps.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], NativeappsComponent);
    return NativeappsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nonnativeapps/nonnativeapps.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nonnativeapps/nonnativeapps.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n            <div class=\"col-md-12\"></div>\n          <h1 class=\"title\"><a href=\"\">www.CalvinParks.com</a><br/> <span>Non Native Apps</span></h1>\n          \n      </div>\n        <br/><br/>\n      \n        <section class=\"group\">\n          <div class=\"row\" *ngFor=\"let postData of postsData; let last = last\" >\n              <div class=\"col-md-4 category\" >\n                <a #myanchor1 [ngClass]=\"setClickClass(myanchor1)\" href=\"{{postData.clickThrough[0]}}\">\n                  <img src=\"{{postData.imagePath[0]}}\" class=\"w-100\">\n                </a>\n                  <div class=\"category-title\">\n                  <p>{{postData.title[0]}}</p>\n                  <hr>\n                  <p>{{postData.description[0]}}</p>\n                </div>\n\n              </div>\n              <div class=\"col-md-4 category\" >\n              <a  #myanchor2 [ngClass]=\"setClickClass(myanchor2)\" href=\"{{postData.clickThrough[1]}}\">\n                <img src=\"{{postData.imagePath[1]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                    <p>{{postData.title[1]}}</p>\n                    <hr>\n                    <p>{{postData.description[1]}}</p>\n                </div> \n\n              </div>\n                <div class=\"col-md-4 category\">\n                <a #myanchor3 [ngClass]=\"setClickClass(myanchor3)\" href=\"{{postData.clickThrough[2]}}\">\n                  <img src=\"{{postData.imagePath[2]}}\" class=\"w-100\">\n                </a>\n                  <div class=\"category-title\">\n                    <p>{{postData.title[2]}}</p>\n                    <hr>\n                    <p>{{postData.description[2]}}</p>\n                  </div>\n\n                </div> \n          </div>\n          <div class=\"col-md-12 email-contact\">\n              Contact: mailbox@calvinparks.com\n          </div>\n        </section>\n    <br><br>\n   \n    \n  \n  \n  \n  </div>\n  \n  <br><br><br><br><br><br>\n  \n  \n  "

/***/ }),

/***/ "../../../../../src/app/components/nonnativeapps/nonnativeapps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonnativeappsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__ = __webpack_require__("../../../../../src/app/components/globals/globals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NonnativeappsComponent = /** @class */ (function () {
    function NonnativeappsComponent(dataService) {
        this.dataService = dataService;
        this.normalizeCategoryTitleDivHeights = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["c" /* normalizeCategoryTitleDivHeights */];
        this.deactiveNullAnchors = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["b" /* deactiveNullAnchors */];
    }
    NonnativeappsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts("nonnative").subscribe(function (post) {
            console.log(post);
            _this.posts = post;
            _this.postsData = _this.posts;
        });
    };
    NonnativeappsComponent.prototype.setClickClass = function (theanchor) {
        var hideLink = false;
        console.log(theanchor.href);
        var theLink = theanchor.href;
        if (theLink.indexOf("nolink") > -1)
            hideLink = true;
        //console.log(hideLink);
        var classes = {
            'click-through-off': hideLink
        };
        return classes;
    };
    NonnativeappsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nonnativeapps',
            template: __webpack_require__("../../../../../src/app/components/nonnativeapps/nonnativeapps.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nonnativeapps/nonnativeapps.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], NonnativeappsComponent);
    return NonnativeappsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/playboy/playboy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/playboy/playboy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n          <div class=\"col-md-12\"></div>\n        <h1 class=\"title\"><a href=\"\">www.CalvinParks.com</a><br/> <span>Playboy Games</span></h1>\n    </div>\n      <br/><br/>\n      \n        <section class=\"group\">\n          <div class=\"row\" *ngFor=\"let postData of postsData; let i=index; let showMyVideo='showImage1'; let last = last\" >\n              <div class=\"col-md-4 category current-row{{i}}-column1\" (click)=\"onItemClick(i,0)\">\n                  <div class=\"\" *ngIf=\"(showRowVideos[i] && showColumnVideos[0])\">\n                      <video controls=\"controls\" autoplay   poster=\"{{postData.videoPosterPath[0]}}\" class=\"w-100\" title=\"Portfolio Video\">\n                      <source src=\"{{postData.videoPathMp4[0]}}\" type=\"video/mp4\" />\n                      <source src=\"{{postData.videoPathWebm[0]}}\" type=\"video/webm\" />\n                      <source src=\"{{postData.videoPathOgg[0]}}\" type=\"video/ogg\" />\n                      </video>\n                  </div>\n                  <div *ngIf=\"!(showRowVideos[i] && showColumnVideos[0])\" >\n                    <img src=\"{{postData.imagePath[0]}}\" class=\"w-100\">\n                  </div>\n                  <div class=\"category-title\">\n                    <p>{{postData.title[0]}}</p>\n                    <hr>\n                    <p>{{postData.description[0]}}</p>\n                  </div>\n              </div>\n              <div class=\"col-md-4 category current-row{{i}}-column2\" (click)=\"onItemClick(i,1)\">\n                <div class=\"\" *ngIf=\"(showRowVideos[i] && showColumnVideos[1])\">\n                  <video controls=\"controls\" autoplay  poster=\"{{postData.videoPosterPath[1]}}\" class=\"w-100\" title=\"Portfolio Video\">\n                  <source src=\"{{postData.videoPathMp4[1]}}\" type=\"video/mp4\" />\n                  <source src=\"{{postData.videoPathWebm[1]}}\" type=\"video/webm\" />\n                  <source src=\"{{postData.videoPathOgg[1]}}\" type=\"video/ogg\" />\n                  </video>\n                </div>\n                <div *ngIf=\"!(showRowVideos[i] && showColumnVideos[1])\" >\n                  <img src=\"{{postData.imagePath[1]}}\" class=\"w-100\">\n                </div>\n                <div class=\"category-title\">\n                    <p>{{postData.title[1]}}</p>\n                    <hr>\n                    <p>{{postData.description[1]}}</p>\n                </div> \n              </div>\n                <div class=\"col-md-4 category current-row{{i}}-column3\" (click)=\"onItemClick(i,2)\">\n                    <div class=\"\" *ngIf=\"(showRowVideos[i] && showColumnVideos[2])\">\n                        <video controls=\"controls\" autoplay  poster=\"{{postData.videoPosterPath[2]}}\" class=\"w-100\" title=\"Portfolio Video\">\n                        <source src=\"{{postData.videoPathMp4[2]}}\" type=\"video/mp4\" />\n                        <source src=\"{{postData.videoPathWebm[2]}}\" type=\"video/webm\" />\n                        <source src=\"{{postData.videoPathOgg[2]}}\" type=\"video/ogg\" />\n                        </video>\n                    </div>\n                    <div *ngIf=\"!(showRowVideos[i] && showColumnVideos[2])\">\n                      <img src=\"{{postData.imagePath[2]}}\" class=\"w-100\">\n                    </div>\n                    <div class=\"category-title\">\n                      <p>{{postData.title[2]}}</p>\n                      <hr>\n                      <p>{{postData.description[2]}}</p>\n                    </div> \n                </div>\n          </div>\n          <div class=\"col-md-12 email-contact\">\n              Contact: mailbox@calvinparks.com\n          </div>\n        </section>\n    <br><br>\n   \n    \n  \n  \n  \n  </div>\n  \n  <br><br><br><br><br><br>\n  \n  \n  "

/***/ }),

/***/ "../../../../../src/app/components/playboy/playboy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayboyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayboyComponent = /** @class */ (function () {
    function PlayboyComponent(dataService) {
        this.dataService = dataService;
    }
    PlayboyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts("playboy").subscribe(function (post) {
            console.log(post);
            _this.posts = post;
            _this.postsData = _this.posts;
        });
        this.showRowImages = [true, true, true, true, true, true];
        this.showRowVideos = [false, false, false, false, false, false];
        this.showColumnImages = [true, true, true];
        this.showColumnVideos = [false, false, false];
        this.lastVideoViewed = "";
    };
    PlayboyComponent.prototype.onItemClick = function (theRow, theColumn) {
        // Begin: reset the images
        this.showRowImages = [true, true, true, true, true, true];
        this.showRowVideos = [false, false, false, false, false, false];
        this.showColumnImages = [true, true, true];
        this.showColumnVideos = [false, false, false];
        // End: reset the images
        if (this.lastVideoViewed == theRow + " " + theColumn)
            return;
        this.lastVideoViewed = theRow + " " + theColumn;
        this.showRowVideos[theRow] = true;
        this.showColumnVideos[theColumn] = true;
    };
    PlayboyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-playboy',
            template: __webpack_require__("../../../../../src/app/components/playboy/playboy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/playboy/playboy.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], PlayboyComponent);
    return PlayboyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/socialmedia/socialmedia.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/socialmedia/socialmedia.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n            <div class=\"col-md-12\"></div>\n          <h1 class=\"title\"><a href=\"\">www.CalvinParks.com</a><br/> <span>Social Media</span></h1>\n          \n      </div>\n        <br/><br/>\n      \n        <section class=\"group\">\n          <div class=\"row\" *ngFor=\"let postData of postsData; let last = last\" >\n              <div class=\"col-md-4 category\" >\n                <a #myanchor1 [ngClass]=\"setClickClass(myanchor1)\" href=\"{{postData.clickThrough[0]}}\">\n                <img src=\"{{postData.imagePath[0]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                  <p>{{postData.title[0]}}</p>\n                  <hr>\n                  <p>{{postData.description[0]}}</p>\n                </div>\n\n              </div>\n              <div class=\"col-md-4 category\" >\n              <a #myanchor2 [ngClass]=\"setClickClass(myanchor2)\" href=\"{{postData.clickThrough[1]}}\">\n                <img src=\"{{postData.imagePath[1]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                    <p>{{postData.title[1]}}</p>\n                    <hr>\n                    <p>{{postData.description[1]}}</p>\n                </div> \n\n              </div>\n                <div class=\"col-md-4 category\">\n                <a #myanchor3 [ngClass]=\"setClickClass(myanchor3)\" href=\"{{postData.clickThrough[2]}}\">\n                  <img src=\"{{postData.imagePath[2]}}\" class=\"w-100\">\n                </a>\n                  <div class=\"category-title\">\n                    <p>{{postData.title[2]}}</p>\n                    <hr>\n                    <p>{{postData.description[2]}}</p>\n                  </div>\n\n                </div> \n          </div>\n          <div class=\"col-md-12 email-contact\">\n              Contact: mailbox@calvinparks.com\n          </div>\n        </section>\n    <br><br>\n   \n    \n  \n  \n  \n  </div>\n  \n  <br><br><br><br><br><br>\n  \n  \n  \n"

/***/ }),

/***/ "../../../../../src/app/components/socialmedia/socialmedia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialmediaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__ = __webpack_require__("../../../../../src/app/components/globals/globals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocialmediaComponent = /** @class */ (function () {
    function SocialmediaComponent(dataService) {
        this.dataService = dataService;
        this.normalizeCategoryTitleDivHeights = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["c" /* normalizeCategoryTitleDivHeights */];
        this.deactiveNullAnchors = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["b" /* deactiveNullAnchors */];
    }
    SocialmediaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts("socialmedia").subscribe(function (post) {
            console.log(post);
            _this.posts = post;
            _this.postsData = _this.posts;
        });
    };
    SocialmediaComponent.prototype.setClickClass = function (theanchor) {
        var hideLink = false;
        console.log(theanchor.href);
        var theLink = theanchor.href;
        if (theLink.indexOf("nolink") > -1)
            hideLink = true;
        //console.log(hideLink);
        var classes = {
            'click-through-off': hideLink
        };
        return classes;
    };
    SocialmediaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-socialmedia',
            template: __webpack_require__("../../../../../src/app/components/socialmedia/socialmedia.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/socialmedia/socialmedia.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], SocialmediaComponent);
    return SocialmediaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/systems/systems.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/systems/systems.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n            <div class=\"col-md-12\"></div>\n          <h1 class=\"title\"><a href=\"\">www.CalvinParks.com</a><br/> <span>Systems</span></h1>\n          \n      </div>\n        <br/><br/>\n      \n        <section class=\"group\">\n          <div class=\"row\" *ngFor=\"let postData of postsData; let last = last\" >\n              <div class=\"col-md-4 category\" >\n                <a #myanchor1 [ngClass]=\"setClickClass(myanchor1)\" href=\"{{postData.clickThrough[0]}}\">\n                <img src=\"{{postData.imagePath[0]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                  <p>{{postData.title[0]}}</p>\n                  <hr>\n                  <p>{{postData.description[0]}}</p>\n                </div>\n\n              </div>\n              <div class=\"col-md-4 category\" >\n              <a #myanchor2 [ngClass]=\"setClickClass(myanchor2)\" href=\"{{postData.clickThrough[1]}}\">\n                <img src=\"{{postData.imagePath[1]}}\" class=\"w-100\">\n              </a>\n                <div class=\"category-title\">\n                    <p>{{postData.title[1]}}</p>\n                    <hr>\n                    <p>{{postData.description[1]}}</p>\n                </div> \n\n              </div>\n                <div class=\"col-md-4 category\">\n                <a #myanchor3 [ngClass]=\"setClickClass(myanchor3)\" href=\"{{postData.clickThrough[2]}}\">\n                  <img src=\"{{postData.imagePath[2]}}\" class=\"w-100\">\n                </a>\n                  <div class=\"category-title\">\n                    <p>{{postData.title[2]}}</p>\n                    <hr>\n                    <p>{{postData.description[2]}}</p>\n                  </div>\n\n                </div>\n          </div>\n          <div class=\"col-md-12 email-contact\">\n              Contact: mailbox@calvinparks.com\n          </div>\n        </section>\n    <br><br>\n   \n    \n  \n  \n  \n  </div>\n  \n  <br><br><br><br><br><br>\n  \n  \n  "

/***/ }),

/***/ "../../../../../src/app/components/systems/systems.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__ = __webpack_require__("../../../../../src/app/components/globals/globals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SystemsComponent = /** @class */ (function () {
    function SystemsComponent(dataService) {
        this.dataService = dataService;
        this.normalizeCategoryTitleDivHeights = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["c" /* normalizeCategoryTitleDivHeights */];
        this.deactiveNullAnchors = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["b" /* deactiveNullAnchors */];
    }
    SystemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts("systems").subscribe(function (post) {
            console.log(post);
            _this.posts = post;
            _this.postsData = _this.posts;
        });
    };
    SystemsComponent.prototype.setClickClass = function (theanchor) {
        var hideLink = false;
        console.log(theanchor.href);
        var theLink = theanchor.href;
        if (theLink.indexOf("nolink") > -1)
            hideLink = true;
        //console.log(hideLink);
        var classes = {
            'click-through-off': hideLink
        };
        return classes;
    };
    SystemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-systems',
            template: __webpack_require__("../../../../../src/app/components/systems/systems.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/systems/systems.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], SystemsComponent);
    return SystemsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/videocontrol/videocontrol.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/videocontrol/videocontrol.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n            <div class=\"col-md-12\"></div>\n          <h1 class=\"title\"><a href=\"\">www.CalvinParks.com</a><br/><span>Video Players</span></h1>\n          \n      </div>\n        <br/><br/>\n      \n        <section class=\"group\">\n          <div class=\"row\" *ngFor=\"let postData of postsData; let last = last\" >\n              <div class=\"col-md-4 category\" >\n                <a #myanchor1 [ngClass]=\"setClickClass(myanchor1)\" href=\"{{postData.clickThrough[0]}}\">\n                <img src=\"{{postData.imagePath[0]}}\" class=\"w-100\">\n                <div class=\"category-title\">\n                  <p>{{postData.title[0]}}</p>\n                  <hr>\n                  <p>{{postData.description[0]}}</p>\n                </div>\n                </a>\n              </div>\n              <div class=\"col-md-4 category\" >\n              <a #myanchor2 [ngClass]=\"setClickClass(myanchor2)\" href=\"{{postData.clickThrough[1]}}\">\n                <img src=\"{{postData.imagePath[1]}}\" class=\"w-100\">\n                <div class=\"category-title\">\n                    <p>{{postData.title[1]}}</p>\n                    <hr>\n                    <p>{{postData.description[1]}}</p>\n                </div> \n              </a>\n              </div>\n                <div class=\"col-md-4 category\">\n                <a #myanchor3 [ngClass]=\"setClickClass(myanchor3)\" href=\"{{postData.clickThrough[2]}}\">\n                  <img src=\"{{postData.imagePath[2]}}\" class=\"w-100\">\n                  <div class=\"category-title\">\n                    <p>{{postData.title[2]}}</p>\n                    <hr>\n                    <p>{{postData.description[2]}}</p>\n                  </div>\n                  </a>\n                </div>\n          </div>\n          <div class=\"col-md-12 email-contact\">\n              Contact: mailbox@calvinparks.com\n          </div>\n        </section>\n    <br><br>\n   \n    \n  \n  \n  \n  </div>\n  \n  <br><br><br><br><br><br>\n  \n  \n  "

/***/ }),

/***/ "../../../../../src/app/components/videocontrol/videocontrol.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideocontrolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__ = __webpack_require__("../../../../../src/app/components/globals/globals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideocontrolComponent = /** @class */ (function () {
    function VideocontrolComponent(dataService) {
        this.dataService = dataService;
        this.normalizeCategoryTitleDivHeights = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["c" /* normalizeCategoryTitleDivHeights */];
        this.deactiveNullAnchors = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["b" /* deactiveNullAnchors */];
    }
    VideocontrolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts("video").subscribe(function (post) {
            console.log(post);
            _this.posts = post;
            _this.postsData = _this.posts;
        });
    };
    VideocontrolComponent.prototype.setClickClass = function (theanchor) {
        var hideLink = false;
        console.log(theanchor.href);
        var theLink = theanchor.href;
        if (theLink.indexOf("nolink") > -1)
            hideLink = true;
        //console.log(hideLink);
        var classes = {
            'click-through-off': hideLink
        };
        return classes;
    };
    VideocontrolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-videocontrol',
            template: __webpack_require__("../../../../../src/app/components/videocontrol/videocontrol.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/videocontrol/videocontrol.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], VideocontrolComponent);
    return VideocontrolComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        console.log('Data Service Connected....');
    }
    DataService.prototype.getPosts = function (postType) {
        // alert('./assets/data/'+postType+'.json');
        return this.http.get('./assets/data/' + postType + '.json')
            .map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/utility/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, args) {
        if (value) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        }
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map