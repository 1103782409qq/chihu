webpackJsonp([34],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__answer__ = __webpack_require__(368);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerModule", function() { return AnswerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AnswerModule = (function () {
    function AnswerModule() {
    }
    return AnswerModule;
}());
AnswerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__answer__["a" /* AnswerPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__answer__["a" /* AnswerPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__answer__["a" /* AnswerPage */]
        ]
    })
], AnswerModule);

//# sourceMappingURL=answer.module.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Answer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AnswerPage = (function () {
    function AnswerPage(navCtrl, navParams, ref) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ref = ref;
        this.tabanimate = false;
        this.old_scrollTop = 0;
        this.title = "回答";
        this.data = {
            _id: "_id",
            uid: "uid",
            name: "Devon2",
            userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
            title: "鱼香肉丝怎么做？",
            workbanner: "http://s2.cdn.xiachufang.com/b89670e8873311e6a9a10242ac110002_690w_459h.jpg?imageView2/2/w/660/interlace/1/q/90",
            text: "鱼香肉丝怎么做？辣中带酸，酸中带甜，甜中带咸，咸中又带鲜……味道丰富而不杂腻！恰似女儿心，捉摸不透，又飘忽不定，似近又远，偶尔火辣又偶尔羞涩……鱼香肉丝怎么做？辣中带酸，酸中带甜，甜中带咸，咸中又带鲜……味道丰富而不杂腻！恰似女儿心，捉摸不透，又飘忽不定，似近又远，偶尔火辣又偶尔羞涩……鱼香肉丝怎么做？辣中带酸，酸中带甜，甜中带咸，咸中又带鲜……味道丰富而不杂腻！恰似女儿心，捉摸不透，又飘忽不定，似近又远，偶尔火辣又偶尔羞涩……",
            time: "10-10",
            type: "0"
        };
        this._that = this;
        this._id = this.navParams.get("_id");
        this.uid = this.navParams.get("uid");
    }
    AnswerPage.prototype.ionViewDidLoad = function () {
        this.content.enableJsScroll();
    };
    AnswerPage.prototype.pushPersonPage = function () {
        this.navCtrl.push('Person');
    };
    AnswerPage.prototype.onScroll = function ($event) {
        var scrollTop = $event.scrollTop;
        if (scrollTop > 110 && (this.old_scrollTop - scrollTop) < 0) {
            if (!this.tabanimate) {
                this.tabanimate = true;
            }
        }
        else {
            this.tabanimate = false;
            if (scrollTop > 100) {
                this.title = this.data.title;
            }
            else {
                this.title = "回答";
            }
        }
        this.old_scrollTop = scrollTop;
        this.ref.detectChanges();
    };
    return AnswerPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Content */])
], AnswerPage.prototype, "content", void 0);
AnswerPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-answer',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/answer/answer.html"*/'<!--\n  Generated template for the Answer page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border [class.animate]="tabanimate">\n\n    <ion-navbar color="bule">\n        <ion-title>{{title}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n              <ion-icon name="share"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button icon-only>\n              <ion-icon name="more"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content (ionScroll)="onScroll($event)">\n\n    <section class="dv_title">\n        <h2>{{data.title}}</h2>\n        <section class="user">\n            <img (click)="pushPersonPage();" src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n            <section (click)="pushPersonPage();" class="data">\n                <h4>{{data.name}}</h4>\n                <p>发布于：{{data.time}}</p>\n            </section>\n            <section class="fork">＋ 关注</section>\n        </section>\n    </section>\n\n    <section class="dv_content">\n        <p>{{data.text}}</p>\n\n    </section>\n\n\n</ion-content>\n\n<ion-footer [class.footanimate]="tabanimate">\n    <ion-toolbar color=\'fff\'>\n        <div class="dv_f">\n            <ion-icon name="happy"></ion-icon>\n            赞同\n        </div>\n        <div class="dv_f">\n            <ion-icon name="sad"></ion-icon>\n            反对\n        </div>\n        <div class="dv_f">\n            <ion-icon name="star-outline"></ion-icon>\n            收藏\n            <!--star-->\n        </div>\n        <div class="dv_f">\n            <ion-icon name="heart-outline"></ion-icon>\n            感谢\n            <!--heart-->\n        </div>\n        <div class="dv_f">\n            <ion-icon name="text"></ion-icon>\n            123\n        </div>\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/answer/answer.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ChangeDetectorRef */]])
], AnswerPage);

//# sourceMappingURL=answer.js.map

/***/ })

});
//# sourceMappingURL=34.main.js.map