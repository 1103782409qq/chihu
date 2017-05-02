webpackJsonp([22],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(385);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_im_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_user_service__ = __webpack_require__(246);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(http, navCtrl, storage, ref, ImService, UserService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.ref = ref;
        this.ImService = ImService;
        this.UserService = UserService;
        this.tabanimate = false;
        this.isload = false;
        this.spanisload = false;
        this.old_scrollTop = 0;
        this.new_scrollTop = 0;
        this.ontouchstartY = 0;
        this.ontouchmoveY = 0;
        this.loadX = "-50px";
        this.checkload = true;
        this.itimer = null;
        //数据
        this.items = [
            {
                _id: "_id",
                uid: "uid",
                name: "Devon1",
                userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
                title: "鱼香肉丝",
                workbanner: "http://s2.cdn.xiachufang.com/b89670e8873311e6a9a10242ac110002_690w_459h.jpg?imageView2/2/w/660/interlace/1/q/90",
                text: "辣中带酸，酸中带甜，甜中带咸，咸中又带鲜……味道丰富而不杂腻！恰似女儿心，捉摸不透，又飘忽不定，似近又远，偶尔火辣又偶尔羞涩……",
                time: "10-10",
                food: [
                    { name: '里脊肉', len: '250克' },
                    { name: '青红辣椒', len: '各一个' },
                    { name: '红萝卜', len: '1/3根' },
                    { name: '干木耳', len: '30克' },
                    { name: '郫县豆瓣酱', len: '	2汤匙' },
                    { name: '蒜瓣', len: '两粒' },
                    { name: '姜蓉', len: '少许' },
                    { name: '泡椒', len: '八个' },
                    { name: '葱白', len: '	两段' },
                    { name: '盐', len: '一小勺' },
                    { name: '糖', len: '一汤匙' },
                    { name: '香醋', len: '一汤匙' },
                    { name: '酱油', len: '两汤匙' },
                    { name: '料酒', len: '少量' },
                    { name: '油', len: '适量' },
                    { name: '淀粉', len: '2汤匙' },
                    { name: '清水', len: '3汤匙' },
                ],
                work: [
                    { text: '木耳泡发，里脊肉切丝，用少许盐，糖抓均匀，一小勺淀粉上浆后用一小勺油拌匀封备用，木耳，辣椒，红萝卜也切丝备用，用糖、香醋，料酒，酱油，清水调成酱汁，比例约为：1：1：0.3：2：3', img: 'http://s1.cdn.xiachufang.com/697289a88c6911e6b87c0242ac110003_223w_149h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '223', height: '149' },
                    { text: '锅烧热，倒入少许油，倒入瘦肉滑油', img: 'http://s1.cdn.xiachufang.com/69963a6a8c6911e6a9a10242ac110002_224w_151h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '224', height: '151' },
                    { text: '肉身变白装起备用', img: 'http://s2.cdn.xiachufang.com/69a8c52c8c6911e6b87c0242ac110003_223w_152h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '223', height: '152' },
                    { text: '锅里留油，放少许蒜末，爆香后放入木耳快炒几秒', img: 'http://s2.cdn.xiachufang.com/69eb99928c6911e6a9a10242ac110002_224w_150h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '224', height: '158' },
                    { text: '加入红萝卜继续炒几秒至变软即可装起备用', img: 'http://s1.cdn.xiachufang.com/6a1445e08c6911e6b87c0242ac110003_224w_148h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '224', height: '148' },
                    { text: '锅里再次放入少许油，放入蒜末、切碎的泡椒、葱白、姜末爆香', img: 'http://s2.cdn.xiachufang.com/6a26cd508c6911e6b87c0242ac110003_226w_152h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '226', height: '152' },
                    { text: '舀入两汤匙郫县豆瓣酱', img: 'http://s2.cdn.xiachufang.com/6ab65dda8c6911e6a9a10242ac110002_222w_152h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '222', height: '152' },
                    { text: '炒出红油', img: 'http://s1.cdn.xiachufang.com/6b1cd5928c6911e6b87c0242ac110003_226w_153h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '226', height: '153' },
                    { text: '加入滑好的肉丝，翻炒均匀', img: 'http://s2.cdn.xiachufang.com/6b44cac08c6911e6b87c0242ac110003_222w_148h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '222', height: '148' },
                    { text: '倒入青红椒丝', img: 'http://s1.cdn.xiachufang.com/6b693d888c6911e6a9a10242ac110002_223w_151h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '223', height: '151' },
                    { text: '翻炒片刻后倒入之前炒好的红萝卜和黑木耳丝', img: 'http://s2.cdn.xiachufang.com/6b7c20608c6911e6b87c0242ac110003_223w_151h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '223', height: '151' },
                    { text: '再倒入之前兑好的酱汁（酱汁中可以加入3汤匙的清水），再次翻炒均匀', img: 'http://s2.cdn.xiachufang.com/6b9cc3ec8c6911e6b87c0242ac110003_220w_149h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '220', height: '149' },
                    { text: '少许淀粉加水兑好勾薄芡后即可装起享用', img: 'http://s1.cdn.xiachufang.com/6c01ab7c8c6911e6a9a10242ac110002_224w_148h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '224', height: '148' },
                ],
                tip: "1、步骤中提到的比例为大约，具体请根据个人口味稍作调整，要以自己喜欢的口感为准。 2、豆瓣酱一定要炒出红油再倒入肉丝，要不油色会相差比较远，亮泽度也会较差 3、酱汁提前兑好，在肉丝下锅炒均匀后立即可以倒入锅中，避免临时找酱汁引起遗漏 4、整个菜只需要很少的盐，只有在腌制肉丝的时候放一点点，因为酱油比较咸，豆瓣酱也咸，泡椒、香醋都有盐分 5、勾芡别太厚重，吃起来会腻，因为有酸，甜咸鲜味，搭配很均衡，所以，这道菜虽然看着红油很亮，其实并不太辣。",
                type: "1"
            },
            {
                _id: "_id",
                uid: "uid",
                name: "Devon2",
                userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
                title: "鱼香肉丝怎么做？",
                workbanner: "http://s2.cdn.xiachufang.com/b89670e8873311e6a9a10242ac110002_690w_459h.jpg?imageView2/2/w/660/interlace/1/q/90",
                text: "鱼香肉丝怎么做？辣中带酸，酸中带甜，甜中带咸，咸中又带鲜……味道丰富而不杂腻！恰似女儿心，捉摸不透，又飘忽不定，似近又远，偶尔火辣又偶尔羞涩……",
                time: "10-10",
                type: "0"
            },
            {
                _id: "_id",
                uid: "uid",
                name: "Devon1",
                userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
                title: "鱼香肉丝",
                workbanner: "http://s2.cdn.xiachufang.com/b89670e8873311e6a9a10242ac110002_690w_459h.jpg?imageView2/2/w/660/interlace/1/q/90",
                text: "辣中带酸，酸中带甜，甜中带咸，咸中又带鲜……味道丰富而不杂腻！恰似女儿心，捉摸不透，又飘忽不定，似近又远，偶尔火辣又偶尔羞涩……",
                time: "10-10",
                food: [
                    { name: '里脊肉', len: '250克' },
                    { name: '青红辣椒', len: '各一个' },
                    { name: '红萝卜', len: '1/3根' },
                    { name: '干木耳', len: '30克' },
                    { name: '郫县豆瓣酱', len: '	2汤匙' },
                    { name: '蒜瓣', len: '两粒' },
                    { name: '姜蓉', len: '少许' },
                    { name: '泡椒', len: '八个' },
                    { name: '葱白', len: '	两段' },
                    { name: '盐', len: '一小勺' },
                    { name: '糖', len: '一汤匙' },
                    { name: '香醋', len: '一汤匙' },
                    { name: '酱油', len: '两汤匙' },
                    { name: '料酒', len: '少量' },
                    { name: '油', len: '适量' },
                    { name: '淀粉', len: '2汤匙' },
                    { name: '清水', len: '3汤匙' },
                ],
                work: [
                    { text: '木耳泡发，里脊肉切丝，用少许盐，糖抓均匀，一小勺淀粉上浆后用一小勺油拌匀封备用，木耳，辣椒，红萝卜也切丝备用，用糖、香醋，料酒，酱油，清水调成酱汁，比例约为：1：1：0.3：2：3', img: 'http://s1.cdn.xiachufang.com/697289a88c6911e6b87c0242ac110003_223w_149h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '223', height: '149' },
                    { text: '锅烧热，倒入少许油，倒入瘦肉滑油', img: 'http://s1.cdn.xiachufang.com/69963a6a8c6911e6a9a10242ac110002_224w_151h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '224', height: '151' },
                    { text: '肉身变白装起备用', img: 'http://s2.cdn.xiachufang.com/69a8c52c8c6911e6b87c0242ac110003_223w_152h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '223', height: '152' },
                    { text: '锅里留油，放少许蒜末，爆香后放入木耳快炒几秒', img: 'http://s2.cdn.xiachufang.com/69eb99928c6911e6a9a10242ac110002_224w_150h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '224', height: '158' },
                    { text: '加入红萝卜继续炒几秒至变软即可装起备用', img: 'http://s1.cdn.xiachufang.com/6a1445e08c6911e6b87c0242ac110003_224w_148h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '224', height: '148' },
                    { text: '锅里再次放入少许油，放入蒜末、切碎的泡椒、葱白、姜末爆香', img: 'http://s2.cdn.xiachufang.com/6a26cd508c6911e6b87c0242ac110003_226w_152h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '226', height: '152' },
                    { text: '舀入两汤匙郫县豆瓣酱', img: 'http://s2.cdn.xiachufang.com/6ab65dda8c6911e6a9a10242ac110002_222w_152h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '222', height: '152' },
                    { text: '炒出红油', img: 'http://s1.cdn.xiachufang.com/6b1cd5928c6911e6b87c0242ac110003_226w_153h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '226', height: '153' },
                    { text: '加入滑好的肉丝，翻炒均匀', img: 'http://s2.cdn.xiachufang.com/6b44cac08c6911e6b87c0242ac110003_222w_148h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '222', height: '148' },
                    { text: '倒入青红椒丝', img: 'http://s1.cdn.xiachufang.com/6b693d888c6911e6a9a10242ac110002_223w_151h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '223', height: '151' },
                    { text: '翻炒片刻后倒入之前炒好的红萝卜和黑木耳丝', img: 'http://s2.cdn.xiachufang.com/6b7c20608c6911e6b87c0242ac110003_223w_151h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '223', height: '151' },
                    { text: '再倒入之前兑好的酱汁（酱汁中可以加入3汤匙的清水），再次翻炒均匀', img: 'http://s2.cdn.xiachufang.com/6b9cc3ec8c6911e6b87c0242ac110003_220w_149h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '220', height: '149' },
                    { text: '少许淀粉加水兑好勾薄芡后即可装起享用', img: 'http://s1.cdn.xiachufang.com/6c01ab7c8c6911e6a9a10242ac110002_224w_148h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '224', height: '148' },
                ],
                tip: "1、步骤中提到的比例为大约，具体请根据个人口味稍作调整，要以自己喜欢的口感为准。 2、豆瓣酱一定要炒出红油再倒入肉丝，要不油色会相差比较远，亮泽度也会较差 3、酱汁提前兑好，在肉丝下锅炒均匀后立即可以倒入锅中，避免临时找酱汁引起遗漏 4、整个菜只需要很少的盐，只有在腌制肉丝的时候放一点点，因为酱油比较咸，豆瓣酱也咸，泡椒、香醋都有盐分 5、勾芡别太厚重，吃起来会腻，因为有酸，甜咸鲜味，搭配很均衡，所以，这道菜虽然看着红油很亮，其实并不太辣。",
                type: "1"
            },
            {
                _id: "_id",
                uid: "uid",
                name: "Devon2",
                userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
                title: "鱼香肉丝怎么做？",
                workbanner: "http://s2.cdn.xiachufang.com/b89670e8873311e6a9a10242ac110002_690w_459h.jpg?imageView2/2/w/660/interlace/1/q/90",
                text: "鱼香肉丝怎么做？辣中带酸，酸中带甜，甜中带咸，咸中又带鲜……味道丰富而不杂腻！恰似女儿心，捉摸不透，又飘忽不定，似近又远，偶尔火辣又偶尔羞涩……",
                time: "10-10",
                type: "0"
            },
            {
                _id: "_id",
                uid: "uid",
                name: "Devon1",
                userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
                title: "鱼香肉丝",
                workbanner: "http://s2.cdn.xiachufang.com/b89670e8873311e6a9a10242ac110002_690w_459h.jpg?imageView2/2/w/660/interlace/1/q/90",
                text: "辣中带酸，酸中带甜，甜中带咸，咸中又带鲜……味道丰富而不杂腻！恰似女儿心，捉摸不透，又飘忽不定，似近又远，偶尔火辣又偶尔羞涩……",
                time: "10-10",
                food: [
                    { name: '里脊肉', len: '250克' },
                    { name: '青红辣椒', len: '各一个' },
                    { name: '红萝卜', len: '1/3根' },
                    { name: '干木耳', len: '30克' },
                    { name: '郫县豆瓣酱', len: '	2汤匙' },
                    { name: '蒜瓣', len: '两粒' },
                    { name: '姜蓉', len: '少许' },
                    { name: '泡椒', len: '八个' },
                    { name: '葱白', len: '	两段' },
                    { name: '盐', len: '一小勺' },
                    { name: '糖', len: '一汤匙' },
                    { name: '香醋', len: '一汤匙' },
                    { name: '酱油', len: '两汤匙' },
                    { name: '料酒', len: '少量' },
                    { name: '油', len: '适量' },
                    { name: '淀粉', len: '2汤匙' },
                    { name: '清水', len: '3汤匙' },
                ],
                work: [
                    { text: '木耳泡发，里脊肉切丝，用少许盐，糖抓均匀，一小勺淀粉上浆后用一小勺油拌匀封备用，木耳，辣椒，红萝卜也切丝备用，用糖、香醋，料酒，酱油，清水调成酱汁，比例约为：1：1：0.3：2：3', img: 'http://s1.cdn.xiachufang.com/697289a88c6911e6b87c0242ac110003_223w_149h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '223', height: '149' },
                    { text: '锅烧热，倒入少许油，倒入瘦肉滑油', img: 'http://s1.cdn.xiachufang.com/69963a6a8c6911e6a9a10242ac110002_224w_151h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '224', height: '151' },
                    { text: '肉身变白装起备用', img: 'http://s2.cdn.xiachufang.com/69a8c52c8c6911e6b87c0242ac110003_223w_152h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '223', height: '152' },
                    { text: '锅里留油，放少许蒜末，爆香后放入木耳快炒几秒', img: 'http://s2.cdn.xiachufang.com/69eb99928c6911e6a9a10242ac110002_224w_150h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '224', height: '158' },
                    { text: '加入红萝卜继续炒几秒至变软即可装起备用', img: 'http://s1.cdn.xiachufang.com/6a1445e08c6911e6b87c0242ac110003_224w_148h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '224', height: '148' },
                    { text: '锅里再次放入少许油，放入蒜末、切碎的泡椒、葱白、姜末爆香', img: 'http://s2.cdn.xiachufang.com/6a26cd508c6911e6b87c0242ac110003_226w_152h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '226', height: '152' },
                    { text: '舀入两汤匙郫县豆瓣酱', img: 'http://s2.cdn.xiachufang.com/6ab65dda8c6911e6a9a10242ac110002_222w_152h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '222', height: '152' },
                    { text: '炒出红油', img: 'http://s1.cdn.xiachufang.com/6b1cd5928c6911e6b87c0242ac110003_226w_153h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '226', height: '153' },
                    { text: '加入滑好的肉丝，翻炒均匀', img: 'http://s2.cdn.xiachufang.com/6b44cac08c6911e6b87c0242ac110003_222w_148h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '222', height: '148' },
                    { text: '倒入青红椒丝', img: 'http://s1.cdn.xiachufang.com/6b693d888c6911e6a9a10242ac110002_223w_151h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '223', height: '151' },
                    { text: '翻炒片刻后倒入之前炒好的红萝卜和黑木耳丝', img: 'http://s2.cdn.xiachufang.com/6b7c20608c6911e6b87c0242ac110003_223w_151h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '223', height: '151' },
                    { text: '再倒入之前兑好的酱汁（酱汁中可以加入3汤匙的清水），再次翻炒均匀', img: 'http://s2.cdn.xiachufang.com/6b9cc3ec8c6911e6b87c0242ac110003_220w_149h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '220', height: '149' },
                    { text: '少许淀粉加水兑好勾薄芡后即可装起享用', img: 'http://s1.cdn.xiachufang.com/6c01ab7c8c6911e6a9a10242ac110002_224w_148h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '224', height: '148' },
                ],
                tip: "1、步骤中提到的比例为大约，具体请根据个人口味稍作调整，要以自己喜欢的口感为准。 2、豆瓣酱一定要炒出红油再倒入肉丝，要不油色会相差比较远，亮泽度也会较差 3、酱汁提前兑好，在肉丝下锅炒均匀后立即可以倒入锅中，避免临时找酱汁引起遗漏 4、整个菜只需要很少的盐，只有在腌制肉丝的时候放一点点，因为酱油比较咸，豆瓣酱也咸，泡椒、香醋都有盐分 5、勾芡别太厚重，吃起来会腻，因为有酸，甜咸鲜味，搭配很均衡，所以，这道菜虽然看着红油很亮，其实并不太辣。",
                type: "1"
            },
            {
                _id: "_id",
                uid: "uid",
                name: "Devon2",
                userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
                title: "鱼香肉丝怎么做？",
                workbanner: "http://s2.cdn.xiachufang.com/b89670e8873311e6a9a10242ac110002_690w_459h.jpg?imageView2/2/w/660/interlace/1/q/90",
                text: "鱼香肉丝怎么做？辣中带酸，酸中带甜，甜中带咸，咸中又带鲜……味道丰富而不杂腻！恰似女儿心，捉摸不透，又飘忽不定，似近又远，偶尔火辣又偶尔羞涩……",
                time: "10-10",
                type: "0"
            }
        ];
        this._that = this;
    }
    HomePage.prototype.push = function () {
        this.navCtrl.push('AboutPage');
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.content.enableJsScroll();
    };
    HomePage.prototype.onScroll = function ($event) {
        this.isload = false;
        this.loadX = "-50px";
        var scrollTop = $event.scrollTop;
        console.log($event.scrollTop);
        if ($event.scrollTop == 0 && !this.checkload) {
            this.checkload = true;
        }
        if (scrollTop > 50 && (this.old_scrollTop - scrollTop) < 0) {
            if (!this.tabanimate) {
                this.tabanimate = true;
            }
        }
        else {
            this.tabanimate = false;
        }
        this.old_scrollTop = scrollTop;
        this.ref.detectChanges();
    };
    //打开页面
    HomePage.prototype.pushAnswerPage = function (_id, uid, type) {
        this.navCtrl.push('AnswerPage', {
            _id: _id,
            uid: uid,
            type: type
        });
    };
    //打开页面
    HomePage.prototype.pushQuestionPage = function () {
        this.navCtrl.push('Question');
    };
    //打开页面
    HomePage.prototype.pushArticlePage = function (_id, uid, type) {
        this.navCtrl.push('Article', {
            _id: _id,
            uid: uid,
            type: type
        });
    };
    //创建菜谱
    HomePage.prototype.CreateCook = function () {
        //this.checkLogin( CreateCookTitle )
        this.navCtrl.push('CreateCookTitle');
    };
    //提问
    HomePage.prototype.CreateQuestion = function () {
        //this.checkLogin(CreateQuestionType);
        this.navCtrl.push('CreateQuestionType');
    };
    //分享
    HomePage.prototype.CreateShare = function () {
        //this.checkLogin(CreateShare);
        this.navCtrl.push('CreateShare');
    };
    //检查登录状态
    HomePage.prototype.checkLogin = function (page) {
        if (this.UserService._user.id) {
            this.navCtrl.push(page);
        }
        else {
            this.navCtrl.push('Login');
        }
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        alert('Begin async operation');
        setTimeout(function () {
            infiniteScroll.complete();
        }, 3000);
    };
    HomePage.prototype.ontouchstart = function ($event) {
        //console.log($event.touches[0].clientY);
        clearTimeout(this.itimer);
        this.ontouchstartY = $event.touches[0].clientY;
        this.spanisload = false;
    };
    HomePage.prototype.ontouchmove = function ($event) {
        if (!this.checkload && this.old_scrollTop != 0) {
            return false;
        }
        this.ontouchmoveY = Math.floor($event.touches[0].clientY - this.ontouchstartY);
        if (this.ontouchmoveY >= 105) {
            this.ontouchmoveY = 105;
        }
        this.loadX = this.ontouchmoveY + 'px';
    };
    HomePage.prototype.ontouchend = function ($event) {
        this.isload = true;
        this.spanisload = true;
        var _that = this;
        if (this.ontouchmoveY >= 105) {
            this.itimer = setTimeout(function () {
                _that.isload = false;
                _that.loadX = "-50px";
            }, 5000);
        }
        else {
            _that.isload = false;
            _that.loadX = "-50px";
        }
        this.checkload = false;
    };
    return HomePage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Content */])
], HomePage.prototype, "content", void 0);
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/home/home.html"*/'<ion-header [class.animate]="tabanimate">\n    <ion-navbar color="bule">\n\n        <ion-searchbar placeholder="搜索"></ion-searchbar>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="content" (touchend)="ontouchend($event)" (touchmove)="ontouchmove($event)" (touchstart)="ontouchstart($event)" (ionScroll)="onScroll($event)">\n\n    <span class="dv_load" [class.dv_load_tran]="spanisload" [style.top]="loadX">\n        <span class="ouro">\n            <span class="left">\n                <span [class.load_move]="isload" class="anim"></span>\n    </span>\n    <span class="right">\n                <span [class.load_move]="isload" class="anim"></span>\n    </span>\n    </span>\n    </span>\n\n    <!--重复-->\n    <section class="dv_item" *ngFor="let item of items">\n        <section class="dv_item_head">\n            <img [src]="item.userimg" />\n            <p *ngIf="item.type == \'0\'">{{item.name}} 回答了问题</p>\n            <p *ngIf="item.type == \'1\'">{{item.name}} 分享的作品</p>\n        </section>\n        <section *ngIf="item.type == \'1\'" (click)="pushArticlePage( item._id, item.uid, item.type );" class="dv_item_banner" [style.background]="\'url(\'+item.workbanner+\')\'"></section>\n        <h6 *ngIf="item.type == \'0\'" (click)="pushQuestionPage( item._id, item.uid, item.type );">{{item.title}}</h6>\n        <h6 *ngIf="item.type == \'1\'" (click)="pushArticlePage( item._id, item.uid, item.type );">{{item.title}}</h6>\n        <div *ngIf="item.type == \'0\'" (click)="pushAnswerPage( item._id, item.uid, item.type );">\n            <p>{{item.text}}</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 赞同 • 677评论 • 关注问题</p>\n            </section>\n        </div>\n        <p *ngIf="item.type == \'1\'" (click)="pushArticlePage( item._id, item.uid, item.type );">{{item.text}}</p>\n        <section *ngIf="item.type == \'1\'" class="dv_item_bottom">\n            <p>4.7K 赞同 • 677评论 • 关注问题</p>\n        </section>\n    </section>\n\n    <!--发布按钮-->\n    <ion-fab right bottom edge #327eff>\n        <button ion-fab><ion-icon name="arrow-dropup"></ion-icon></button>\n        <ion-fab-list side="top">\n            <button (click)="CreateQuestion()" ion-fab><ion-icon name="help"></ion-icon></button>\n            <button (click)="CreateShare()" ion-fab><ion-icon name="images"></ion-icon></button>\n            <button (click)="CreateCook()" ion-fab><ion-icon name="clipboard"></ion-icon></button>\n        </ion-fab-list>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_4__service_im_service__["a" /* ImService */], __WEBPACK_IMPORTED_MODULE_5__service_user_service__["a" /* UserService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=22.main.js.map