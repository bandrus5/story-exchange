(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    /* font-family: 'Rambla', sans-serif; */\n    font-family: 'Lora', serif;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-banner></app-banner>\n<app-page-content></app-page-content>\n<link href=\"https://fonts.googleapis.com/css?family=Rambla\" rel=\"stylesheet\"> \n<link href=\"https://fonts.googleapis.com/css?family=Lora\" rel=\"stylesheet\"> \n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'story-exchange';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _page_content_page_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-content/page-content.component */ "./src/app/page-content/page-content.component.ts");
/* harmony import */ var _page_content_browse_page_browse_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-content/browse-page/browse-page.component */ "./src/app/page-content/browse-page/browse-page.component.ts");
/* harmony import */ var _page_content_your_stories_page_your_stories_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-content/your-stories-page/your-stories-page.component */ "./src/app/page-content/your-stories-page/your-stories-page.component.ts");
/* harmony import */ var _page_content_reviewing_page_reviewing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-content/reviewing-page/reviewing-page.component */ "./src/app/page-content/reviewing-page/reviewing-page.component.ts");
/* harmony import */ var _page_content_browse_page_browse_story_card_browse_story_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-content/browse-page/browse-story-card/browse-story-card.component */ "./src/app/page-content/browse-page/browse-story-card/browse-story-card.component.ts");
/* harmony import */ var _story_info_modal_story_info_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./story-info-modal/story-info-modal.component */ "./src/app/story-info-modal/story-info-modal.component.ts");
/* harmony import */ var _page_content_your_stories_page_posted_story_card_posted_story_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-content/your-stories-page/posted-story-card/posted-story-card.component */ "./src/app/page-content/your-stories-page/posted-story-card/posted-story-card.component.ts");
/* harmony import */ var _page_content_your_stories_page_add_story_form_add_story_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-content/your-stories-page/add-story-form/add-story-form.component */ "./src/app/page-content/your-stories-page/add-story-form/add-story-form.component.ts");
/* harmony import */ var _page_content_reviewing_page_story_review_card_story_review_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-content/reviewing-page/story-review-card/story-review-card.component */ "./src/app/page-content/reviewing-page/story-review-card/story-review-card.component.ts");
/* harmony import */ var _page_content_reviewing_page_add_review_form_add_review_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page-content/reviewing-page/add-review-form/add-review-form.component */ "./src/app/page-content/reviewing-page/add-review-form/add-review-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"],
                _page_content_page_content_component__WEBPACK_IMPORTED_MODULE_4__["PageContentComponent"],
                _page_content_browse_page_browse_page_component__WEBPACK_IMPORTED_MODULE_5__["BrowsePageComponent"],
                _page_content_your_stories_page_your_stories_page_component__WEBPACK_IMPORTED_MODULE_6__["YourStoriesPageComponent"],
                _page_content_reviewing_page_reviewing_page_component__WEBPACK_IMPORTED_MODULE_7__["ReviewingPageComponent"],
                _page_content_browse_page_browse_story_card_browse_story_card_component__WEBPACK_IMPORTED_MODULE_8__["BrowseStoryCardComponent"],
                _story_info_modal_story_info_modal_component__WEBPACK_IMPORTED_MODULE_9__["StoryInfoModalComponent"],
                _page_content_your_stories_page_posted_story_card_posted_story_card_component__WEBPACK_IMPORTED_MODULE_10__["PostedStoryCardComponent"],
                _page_content_your_stories_page_add_story_form_add_story_form_component__WEBPACK_IMPORTED_MODULE_11__["AddStoryFormComponent"],
                _page_content_reviewing_page_story_review_card_story_review_card_component__WEBPACK_IMPORTED_MODULE_12__["StoryReviewCardComponent"],
                _page_content_reviewing_page_add_review_form_add_review_form_component__WEBPACK_IMPORTED_MODULE_13__["AddReviewFormComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.css":
/*!*********************************************!*\
  !*** ./src/app/banner/banner.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner {\n    background-color: #2DABF3;\n    display: flex;\n    flex-direction: row;\n    color: white;\n    font-family: 'Rambla', sans-serif;\n    width: 100%;\n    height: 100px;\n}\n\n.banner p {\n    padding: 5px;\n}\n\n.right {\n    float: right;\n}\n\n.img-container {\n    width: 278px;\n}\n\nimg {\n    display: block;\n    width: 100%;\n    height: auto;\n    margin-top: 16px;\n    margin-left: 16px;\n}\n\n.banner-info {\n    position: absolute;\n    right: 25px;\n    line-height: 0px;\n    padding-top: 12px;\n    text-align: right;\n    font-size: larger;\n}"

/***/ }),

/***/ "./src/app/banner/banner.component.html":
/*!**********************************************!*\
  !*** ./src/app/banner/banner.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">\n  <div class=\"img-container\">\n    <img src=\"https://berkeleyandrus.com/story-exchange-logo.png\">\n  </div>\n  <div class=\"banner-info\">\n    <p>Welcome back, {{loggedInUser.getName()}}</p>\n    <p>You have {{loggedInUser.getCredit()}} credit</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_DataStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/DataStore */ "./src/app/services/DataStore.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
        this.dataStore = _services_DataStore__WEBPACK_IMPORTED_MODULE_1__["DataStore"].getInstance();
        this.loggedInUser = this.dataStore.getLoggedInUser();
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/page-content/browse-page/browse-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/page-content/browse-page/browse-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".browse-container {\n    position: relative;\n}"

/***/ }),

/***/ "./src/app/page-content/browse-page/browse-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/page-content/browse-page/browse-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"browse-container\">\n  <div class=\"search-container\">\n      <input \n        type=\"text\" \n        id=\"search-bar\"\n        #searchBar\n        placeholder=\"Search for an author, story title, or genre\"\n        (keydown.enter)=\"search(searchBar.value)\"\n      >\n  </div>\n  <div *ngFor=\"let story of displayedStories\"> \n    <app-browse-story-card [story]=\"story\"></app-browse-story-card>\n  </div>\n  <p>No more stories</p>\n</div>"

/***/ }),

/***/ "./src/app/page-content/browse-page/browse-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/page-content/browse-page/browse-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: BrowsePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowsePageComponent", function() { return BrowsePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_DataStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/DataStore */ "./src/app/services/DataStore.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrowsePageComponent = /** @class */ (function () {
    function BrowsePageComponent() {
        this.dataStore = _services_DataStore__WEBPACK_IMPORTED_MODULE_1__["DataStore"].getInstance();
        var loggedInName = this.dataStore.getLoggedInUser().getName();
        this.displayedStories = this.dataStore.getAllStories().filter(function (story) { return story.author != loggedInName; });
    }
    BrowsePageComponent.prototype.search = function (value) {
        debugger;
        this.displayedStories = this.dataStore.searchStories(value);
        this.searchBar.value = '';
    };
    BrowsePageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchBar'),
        __metadata("design:type", Object)
    ], BrowsePageComponent.prototype, "searchBar", void 0);
    BrowsePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-browse-page',
            template: __webpack_require__(/*! ./browse-page.component.html */ "./src/app/page-content/browse-page/browse-page.component.html"),
            styles: [__webpack_require__(/*! ./browse-page.component.css */ "./src/app/page-content/browse-page/browse-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BrowsePageComponent);
    return BrowsePageComponent;
}());



/***/ }),

/***/ "./src/app/page-content/browse-page/browse-story-card/browse-story-card.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/page-content/browse-page/browse-story-card/browse-story-card.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    width: 70%;\n    height: 126px;\n    border: 1px solid grey;\n    margin: 10px auto;\n    border-radius: 3px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    position: relative;\n}\n\np {\n    margin-left: 10px;\n    line-height: 0.5em;\n}\n\nbutton {\n    background-color: #2DABF3;\n    border: none;\n    border-radius: 5px;\n    color: white;\n    padding: 8px 7px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    margin-left: 11px;\n    cursor: pointer;\n}\n\n.info-col {\n    display: flex;\n    flex-direction: column;\n}\n\n.cta-col {\n    position: relative;\n    width: 260px;\n}\n\n.cta-buttons {\n    position: absolute;\n    bottom: 16px;\n}\n\n.indent {\n    padding-left: 20px;\n    line-height: 0em;\n}\n\n.story-title {\n    font-size: larger;\n    line-height: 1em;\n    margin-bottom: 10px;\n    color: #1c5899;\n}\n\n.credit-container1 {\n    font-size: x-large;\n}\n\n.credit-container2 {\n    display: flex;\n    margin-top: 24px;\n}\n\n.credit-display {\n    margin-left: auto;\n    margin-right: auto;\n    color: #1c5899;\n}\n\n.dark-button {\n    background-color: #2378bc;\n}\n\n.light-button {\n    border: 1px solid #2378bc;\n    color: #2378bc;\n    background-color: white;\n}\n\n.non-button {\n    border: 1px solid white;\n    color: #2378bc;\n    background-color: white;\n}\n\n.non-button:hover {\n    cursor: default;\n}"

/***/ }),

/***/ "./src/app/page-content/browse-page/browse-story-card/browse-story-card.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/page-content/browse-page/browse-story-card/browse-story-card.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"info-col\">\n    <p class=\"story-title\">{{story.title}}</p>\n    <p class=\"indent\">{{story.genre}}</p>\n    <!-- <p class=\"indent\">{{story.wordCount}} words</p> -->\n    <p class=\"indent\">Awaiting {{story.getReviewsLeft()}} reviews</p>\n  </div>\n  <div class=\"cta-col\">\n    <div class=\"credit-container1\">\n      <div class=\"credit-container2\">\n        <p class=\"credit-display\">+{{getStoryCredit()}} Credit</p>\n      </div>\n    </div>\n    <div class=\"cta-buttons\">\n      <button class=\"light-button\" (click)=\"showMore()\">See More</button>\n      <button *ngIf=\"!reserved() && !reviewed()\" class=\"dark-button\" (click)=\"reserveForReview()\">Reserve for Review</button>\n      <button *ngIf=\"reserved() && !reviewed()\" class=\"non-button\">Reserved</button>\n      <button *ngIf=\"reviewed()\" class=\"non-button\">Reviewed</button>\n    </div>\n  </div>\n</div>\n<app-story-info-modal \n  *ngIf=\"shouldShowMore\"\n  [story]=\"story\"\n  [isReservable]=\"!reserved() && !reviewed()\"\n  (closeEvent)=\"closeDialog($event)\"\n></app-story-info-modal>\n"

/***/ }),

/***/ "./src/app/page-content/browse-page/browse-story-card/browse-story-card.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/page-content/browse-page/browse-story-card/browse-story-card.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: BrowseStoryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseStoryCardComponent", function() { return BrowseStoryCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _types_Story__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types/Story */ "./src/app/types/Story.ts");
/* harmony import */ var _services_DataStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/DataStore */ "./src/app/services/DataStore.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrowseStoryCardComponent = /** @class */ (function () {
    function BrowseStoryCardComponent() {
        this.shouldShowMore = false;
        this.dataStore = _services_DataStore__WEBPACK_IMPORTED_MODULE_2__["DataStore"].getInstance();
    }
    BrowseStoryCardComponent.prototype.ngOnInit = function () {
    };
    BrowseStoryCardComponent.prototype.getStoryCredit = function () {
        return Math.round(this.story.wordCount * this.story.getReviewsLeft() / 100000);
    };
    BrowseStoryCardComponent.prototype.showMore = function () {
        this.shouldShowMore = true;
    };
    BrowseStoryCardComponent.prototype.closeDialog = function (e) {
        this.shouldShowMore = false;
    };
    BrowseStoryCardComponent.prototype.reserveForReview = function () {
        this.dataStore.reserveReview(this.story);
    };
    BrowseStoryCardComponent.prototype.reserved = function () {
        var _this = this;
        var user = this.dataStore.getLoggedInUser();
        var stories = user.getReservedStories().filter(function (rStory) { return rStory.story == _this.story.title; });
        return stories.length > 0;
    };
    BrowseStoryCardComponent.prototype.reviewed = function () {
        var _this = this;
        var user = this.dataStore.getLoggedInUser();
        var stories = user.getReviewedStories().filter(function (rStory) { return rStory.story == _this.story.title; });
        return stories.length > 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _types_Story__WEBPACK_IMPORTED_MODULE_1__["Story"])
    ], BrowseStoryCardComponent.prototype, "story", void 0);
    BrowseStoryCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-browse-story-card',
            template: __webpack_require__(/*! ./browse-story-card.component.html */ "./src/app/page-content/browse-page/browse-story-card/browse-story-card.component.html"),
            styles: [__webpack_require__(/*! ./browse-story-card.component.css */ "./src/app/page-content/browse-page/browse-story-card/browse-story-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BrowseStoryCardComponent);
    return BrowseStoryCardComponent;
}());



/***/ }),

/***/ "./src/app/page-content/page-content.component.css":
/*!*********************************************************!*\
  !*** ./src/app/page-content/page-content.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-content {\n    margin-top: 5px;\n}\n\n.tab-holder {\n    display: flex;\n    flex-direction: row;\n    font-family: 'Rambla', sans-serif;\n    margin-left: 14px;\n}\n\n.tab {\n    margin-right: 5px;\n    color: #2DABF3;\n    cursor: pointer;\n    font-size: x-large;\n    border-radius: 5px;\n}\n\n.tab:hover {\n    color: #2378bc;\n    text-decoration: underline;\n}\n\n.selected-tab {\n    text-decoration: underline;\n    cursor: auto;\n}\n\n.selected-tab:hover {\n    color: #2DABF3\n}\n\n.tab p {\n    line-height: 0.7em;\n    padding: 10px;\n    margin: 0;\n}\n\n.content-viewer {\n    /* border: 5px solid #2DABF3; */\n    width: 100%;\n    margin-top: -5px;\n}"

/***/ }),

/***/ "./src/app/page-content/page-content.component.html":
/*!**********************************************************!*\
  !*** ./src/app/page-content/page-content.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\n  <div class=\"tab-holder\">\n    <div \n      class=\"tab\" \n      (click)=\"setCurrentPage('browse')\"\n      [class.selected-tab]=\"currentPage === 'browse'\"\n    >\n      <p>Browse</p>\n    </div>\n    <div \n      class=\"tab\" \n      (click)=\"setCurrentPage('your-stories')\"\n      [class.selected-tab]=\"currentPage === 'your-stories'\"\n    >\n      <p>Your Stories</p>\n    </div>\n    <div \n      class=\"tab\" \n      (click)=\"setCurrentPage('reviewing')\"\n      [class.selected-tab]=\"currentPage === 'reviewing'\"  \n    >\n      <p>Reviewing</p>\n    </div>\n  </div>\n  <div class=\"content-viewer\">\n    <div *ngIf=\"currentPage=='browse'\">\n      <app-browse-page></app-browse-page>\n    </div>\n    <div *ngIf=\"currentPage=='your-stories'\">\n      <app-your-stories-page></app-your-stories-page>\n    </div>\n    <div *ngIf=\"currentPage=='reviewing'\">\n      <app-reviewing-page></app-reviewing-page>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page-content/page-content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/page-content/page-content.component.ts ***!
  \********************************************************/
/*! exports provided: PageContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContentComponent", function() { return PageContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageContentComponent = /** @class */ (function () {
    function PageContentComponent() {
        this.currentPage = 'browse';
    }
    PageContentComponent.prototype.ngOnInit = function () {
    };
    PageContentComponent.prototype.setCurrentPage = function (newPage) {
        this.currentPage = newPage;
    };
    PageContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-content',
            template: __webpack_require__(/*! ./page-content.component.html */ "./src/app/page-content/page-content.component.html"),
            styles: [__webpack_require__(/*! ./page-content.component.css */ "./src/app/page-content/page-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageContentComponent);
    return PageContentComponent;
}());



/***/ }),

/***/ "./src/app/page-content/reviewing-page/add-review-form/add-review-form.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/page-content/reviewing-page/add-review-form/add-review-form.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.dimmer {\n    background: #000;\n    opacity: 0.9;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n}\n\n.dialog-container {\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    top: calc(5vh);\n    left: calc(50vw - 300px);\n    z-index: 2;\n}\n\n.dialog {\n    background-color: white;\n    width: 600px;\n    border-radius: 5px;\n    z-index: 2;\n    margin-top: 45px;\n}\n\n.close-button-container {\n    width: 100%;\n    display: flex;\n    padding: 8px 8px 0 0;\n    margin-left: auto;\n    cursor: pointer;\n    position: relative;\n}\n\n.close-button {\n    position: absolute;\n    left: 577px;\n    font-family: 'Rambla', sans-serif;\n}\n\n.indent {\n    padding-left: 20px;\n    line-height: 1em;\n}\n\n.story-title {\n    font-size: larger;\n    color: #2DABF3;\n    font-weight: bold;\n}\n\n.info {\n    margin: 15px;\n    margin-left: 20px;\n}\n\n.button-container {\n    margin-bottom: 14px;\n    float: right;\n    margin-right: 16px;\n}\n\nbutton {\n    background-color: #2DABF3;\n    border: none;\n    border-radius: 5px;\n    color: white;\n    padding: 8px 7px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    margin-left: 11px;\n    cursor: pointer;\n}\n\n.wide-input {\n    width: 366px;\n}\n\n.wide-select {\n    width: 366px;\n}\n\n.wide-textarea {\n    width: 572px;\n    font-family: 'Lora', serif;\n}\n\ninput[type=text], input[type=number], select, textarea {\n    padding: 9px 9px;\n    margin: 4px 13px;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    color: #666;\n    background-color: white;\n}\n\n::-webkit-input-placeholder {\n    color: #999;\n    opacity: 1;\n}\n\n::-ms-input-placeholder {\n    color: #999;\n    opacity: 1;\n}\n\n::placeholder {\n    color: #999;\n    opacity: 1;\n}\n\n.form {\n    margin-bottom: 7px;\n}"

/***/ }),

/***/ "./src/app/page-content/reviewing-page/add-review-form/add-review-form.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/page-content/reviewing-page/add-review-form/add-review-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dimmer\"></div>\n<div class=\"dialog-container\">\n\t<div class=\"dialog\">\n        <div class=\"close-button-container\" (click)=\"close()\"><div class=\"close-button\">X</div></div>\n        <form \n          name=\"add-story-form\" \n          class=\"form\"\n          (submit)=\"addReview(storyReview.value); $event.preventDefault()\">\n          <p>{{reservation.story}}</p>\n          <p>Reserved on [FIXME: insert date]</p>\n          <textarea class=\"wide-textarea\" rows=\"8\" cols=\"80\" name=\"review\" placeholder=\"What feedback do you have on {{reservation.story}}?\" #storyReview></textarea>\n          <div class=\"button-container\">\n            <button type=\"button\" (click)=\"close()\">Cancel</button>\n            <button type=\"submit\">Send Review</button>\n          </div>\n        </form>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/page-content/reviewing-page/add-review-form/add-review-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/page-content/reviewing-page/add-review-form/add-review-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AddReviewFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewFormComponent", function() { return AddReviewFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_DataStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/DataStore */ "./src/app/services/DataStore.ts");
/* harmony import */ var _types_ReviewReservation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types/ReviewReservation */ "./src/app/types/ReviewReservation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddReviewFormComponent = /** @class */ (function () {
    function AddReviewFormComponent() {
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataStore = _services_DataStore__WEBPACK_IMPORTED_MODULE_1__["DataStore"].getInstance();
    }
    AddReviewFormComponent.prototype.ngOnInit = function () {
    };
    AddReviewFormComponent.prototype.close = function () {
        this.closeEvent.emit();
    };
    AddReviewFormComponent.prototype.addReview = function (review) {
        if (review.length > 100) {
            this.reservation.reviewText = review;
            this.reservation.reviewCompleted = new Date();
            this.close();
        }
        else {
            console.log("Not enough detail my dude");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _types_ReviewReservation__WEBPACK_IMPORTED_MODULE_2__["ReviewReservation"])
    ], AddReviewFormComponent.prototype, "reservation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddReviewFormComponent.prototype, "closeEvent", void 0);
    AddReviewFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-review-form',
            template: __webpack_require__(/*! ./add-review-form.component.html */ "./src/app/page-content/reviewing-page/add-review-form/add-review-form.component.html"),
            styles: [__webpack_require__(/*! ./add-review-form.component.css */ "./src/app/page-content/reviewing-page/add-review-form/add-review-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddReviewFormComponent);
    return AddReviewFormComponent;
}());



/***/ }),

/***/ "./src/app/page-content/reviewing-page/reviewing-page.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/page-content/reviewing-page/reviewing-page.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".completion-label {\n    color: #2378bc;\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/page-content/reviewing-page/reviewing-page.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/page-content/reviewing-page/reviewing-page.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"completion-label\">Uncompleted</h1>\n<div *ngFor=\"let review of getUncompletedReviews()\">\n  <app-story-review-card [review]=\"review\" [completed]=\"false\"></app-story-review-card>\n</div>\n<h1 class=\"completion-label\">Completed</h1>\n<div *ngFor=\"let review of getCompletedReviews()\">\n  <app-story-review-card [review]=\"review\" [completed]=\"true\"></app-story-review-card>\n</div>\n"

/***/ }),

/***/ "./src/app/page-content/reviewing-page/reviewing-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/page-content/reviewing-page/reviewing-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReviewingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewingPageComponent", function() { return ReviewingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_DataStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/DataStore */ "./src/app/services/DataStore.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewingPageComponent = /** @class */ (function () {
    function ReviewingPageComponent() {
        this.dataStore = _services_DataStore__WEBPACK_IMPORTED_MODULE_1__["DataStore"].getInstance();
        this.uncompletedReviews = this.dataStore.getReservedStories();
        this.completedReviews = this.dataStore.getReviewedStories();
    }
    ReviewingPageComponent.prototype.ngOnInit = function () {
    };
    ReviewingPageComponent.prototype.getUncompletedReviews = function () {
        return this.uncompletedReviews.filter(function (review) { return review.reviewCompleted == null; });
    };
    ReviewingPageComponent.prototype.getCompletedReviews = function () {
        return this.uncompletedReviews.filter(function (review) { return review.reviewCompleted != null; }).concat(this.completedReviews);
    };
    ReviewingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviewing-page',
            template: __webpack_require__(/*! ./reviewing-page.component.html */ "./src/app/page-content/reviewing-page/reviewing-page.component.html"),
            styles: [__webpack_require__(/*! ./reviewing-page.component.css */ "./src/app/page-content/reviewing-page/reviewing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewingPageComponent);
    return ReviewingPageComponent;
}());



/***/ }),

/***/ "./src/app/page-content/reviewing-page/story-review-card/story-review-card.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/page-content/reviewing-page/story-review-card/story-review-card.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    width: 70%;\n    height: 126px;\n    border: 1px solid grey;\n    margin: 10px auto;\n    border-radius: 3px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    position: relative;\n\n}\n\np {\n    margin-left: 10px;\n    line-height: 0.5em;\n}\n\nbutton {\n    background-color: #2DABF3;\n    border: none;\n    color: white;\n    padding: 8px 7px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    margin-left: 11px;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.info-col {\n    display: flex;\n    flex-direction: column;\n}\n\n.cta-col {\n    position: relative;\n    width: 276px;\n}\n\n.cta-buttons {\n    position: absolute;\n    bottom: 16px;\n}\n\n.indent {\n    padding-left: 20px;\n    line-height: 0em;\n}\n\n.story-title {\n    font-size: larger;\n    line-height: 1em;\n    margin-bottom: 10px;\n    color: #1c5899;\n}\n\n.dark-button {\n    background-color: #2378bc;\n}\n\n.light-button {\n    border: 1px solid #2378bc;\n    color: #2378bc;\n    background-color: white;\n}\n\n.non-button {\n    border: 1px solid white;\n    color: #2378bc;\n    background-color: white;\n}\n\n.non-button:hover {\n    cursor: default;\n}"

/***/ }),

/***/ "./src/app/page-content/reviewing-page/story-review-card/story-review-card.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/page-content/reviewing-page/story-review-card/story-review-card.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"info-col\">\n    <p class=\"story-title\">{{review.story}}</p>\n    <p class=\"indent\">{{getDateStatement()}}</p>\n  </div>\n  <div class=\"cta-col\">\n    <div class=\"cta-buttons\">\n      <button (click)=\"showDetails()\" class=\"light-button\">See Story Details</button>\n      <button *ngIf=\"!completed\" class=\"dark-button\" (click)=\"addReview()\">Add Review</button>\n      <button *ngIf=\"completed\" class=\"non-button\" disabled>Completed</button>\n    </div>\n  </div>\n</div>\n\n<app-story-info-modal \n  *ngIf=\"shouldShowDetails\"\n  [story]=\"getStory()\"\n  [isReservable]=\"false\"\n  (closeEvent)=\"closeDetails($event)\"\n></app-story-info-modal>\n\n<app-add-review-form \n  *ngIf=\"showAddForm\" \n  [reservation]=\"review\" \n  (closeEvent)=\"closeAddForm()\">\n</app-add-review-form>"

/***/ }),

/***/ "./src/app/page-content/reviewing-page/story-review-card/story-review-card.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/page-content/reviewing-page/story-review-card/story-review-card.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: StoryReviewCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryReviewCardComponent", function() { return StoryReviewCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _types_ReviewReservation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types/ReviewReservation */ "./src/app/types/ReviewReservation.ts");
/* harmony import */ var _services_DataStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/DataStore */ "./src/app/services/DataStore.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoryReviewCardComponent = /** @class */ (function () {
    function StoryReviewCardComponent() {
    }
    StoryReviewCardComponent.prototype.ngOnInit = function () {
    };
    StoryReviewCardComponent.prototype.getDateStatement = function () {
        var status = "";
        var date = null;
        if (this.completed) {
            date = this.review.reviewCompleted;
            status = "Reviewed on ";
        }
        else {
            date = this.review.dateReserved;
            status = "Reserved on ";
        }
        var stringDate = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
        return status + stringDate;
    };
    StoryReviewCardComponent.prototype.getStory = function () {
        return _services_DataStore__WEBPACK_IMPORTED_MODULE_2__["DataStore"].getInstance().getStoryByName(this.review.story);
    };
    StoryReviewCardComponent.prototype.showDetails = function () {
        this.shouldShowDetails = true;
    };
    StoryReviewCardComponent.prototype.closeDetails = function () {
        this.shouldShowDetails = false;
    };
    StoryReviewCardComponent.prototype.addReview = function () {
        this.showAddForm = true;
    };
    StoryReviewCardComponent.prototype.closeAddForm = function () {
        this.showAddForm = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StoryReviewCardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StoryReviewCardComponent.prototype, "completed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _types_ReviewReservation__WEBPACK_IMPORTED_MODULE_1__["ReviewReservation"])
    ], StoryReviewCardComponent.prototype, "review", void 0);
    StoryReviewCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-story-review-card',
            template: __webpack_require__(/*! ./story-review-card.component.html */ "./src/app/page-content/reviewing-page/story-review-card/story-review-card.component.html"),
            styles: [__webpack_require__(/*! ./story-review-card.component.css */ "./src/app/page-content/reviewing-page/story-review-card/story-review-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoryReviewCardComponent);
    return StoryReviewCardComponent;
}());



/***/ }),

/***/ "./src/app/page-content/your-stories-page/add-story-form/add-story-form.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/page-content/your-stories-page/add-story-form/add-story-form.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.dimmer {\n    background: #000;\n    opacity: 0.9;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n}\n\n.dialog-container {\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    top: calc(5vh);\n    left: calc(50vw - 300px);\n    z-index: 2;\n}\n\n.dialog {\n    background-color: white;\n    width: 600px;\n    border-radius: 5px;\n    z-index: 2;\n    margin-top: 45px;\n}\n\n.close-button-container {\n    width: 100%;\n    display: flex;\n    padding: 8px 8px 0 0;\n    margin-left: auto;\n    cursor: pointer;\n    position: relative;\n}\n\n.close-button {\n    position: absolute;\n    left: 577px;\n    font-family: 'Rambla', sans-serif;\n}\n\n.indent {\n    padding-left: 20px;\n    line-height: 1em;\n}\n\n.story-title {\n    font-size: larger;\n    color: #2DABF3;\n    font-weight: bold;\n}\n\n.info {\n    margin: 15px;\n    margin-left: 20px;\n}\n\n.button-container {\n    margin-bottom: 14px;\n    float: right;\n    margin-right: 16px;\n}\n\nbutton {\n    background-color: #2DABF3;\n    border: none;\n    border-radius: 5px;\n    color: white;\n    padding: 8px 7px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    margin-left: 11px;\n    cursor: pointer;\n}\n\n.wide-input {\n    width: 366px;\n}\n\n.wide-select {\n    width: 366px;\n}\n\n.wide-textarea {\n    width: 572px;\n    font-family: 'Lora', serif;\n}\n\ninput[type=text], input[type=number], select, textarea {\n    padding: 9px 9px;\n    margin: 4px 13px;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    color: #666;\n    background-color: white;\n}\n\n::-webkit-input-placeholder {\n    color: #999;\n    opacity: 1;\n}\n\n::-ms-input-placeholder {\n    color: #999;\n    opacity: 1;\n}\n\n::placeholder {\n    color: #999;\n    opacity: 1;\n}\n\n.form {\n    margin-bottom: 7px;\n}"

/***/ }),

/***/ "./src/app/page-content/your-stories-page/add-story-form/add-story-form.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/page-content/your-stories-page/add-story-form/add-story-form.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dimmer\"></div>\n<div class=\"dialog-container\">\n\t<div class=\"dialog\">\n        <div class=\"close-button-container\" (click)=\"close()\"><div class=\"close-button\">X</div></div>\n        <form \n          name=\"add-story-form\" \n          class=\"form\"\n          (submit)=\"addStory(storyTitle.value, storyGenre.value, storyLink.value, storyBlurb.value, storyLength.value, storyReviews.value); $event.preventDefault()\">\n          <input class=\"wide-input\" maxlength=\"50\" type=\"text\" name=\"title\" placeholder=\"Title\" #storyTitle />\n          <select class=\"wide-select\" name=\"genre\" required #storyGenre>\n            <option selected disabled>Genre</option>\n            <option value=\"Action\">Action</option>\n            <option value=\"Adventure\">Adventure</option>\n            <option value=\"Drama\">Drama</option>\n            <option value=\"Fantasy\">Fantasy</option>\n            <option value=\"Fan-Fiction\">Fan-Fiction</option>\n            <option value=\"Horror\">Horror</option>\n            <option value=\"Humor\">Humor</option>\n            <option value=\"Mystery\">Mystery</option>\n            <option value=\"Romance\">Romance</option>\n            <option value=\"Sci-Fi\">Sci-Fi</option>\n          </select>\n          <input class=\"wide-input\" maxLength=\"100\" type=\"text\" name=\"link\" placeholder=\"Link (where can reviewers find your story?\" #storyLink />\n          <textarea class=\"wide-textarea\" rows=\"8\" cols=\"80\" name=\"blurb\" placeholder=\"Notes (what do you want reviewers to know about your story?\" #storyBlurb></textarea>\n          <input class=\"wide-input\" maxLength=\"10\" type=\"number\" name=\"length\" placeholder=\"Word Count\" #storyLength />\n          <select class=\"wide-select\" name=\"desiredReviews\" required #storyReviews>\n              <option selected disabled>Desired Reviews</option>\n              <option value=\"1\">1</option>\n              <option value=\"2\">2</option>\n              <option value=\"3\">3</option>\n              <option value=\"4\">4</option>\n              <option value=\"5\">5</option>\n              <option value=\"6\">6</option>\n              <option value=\"7\">7</option>\n              <option value=\"8\">8</option>\n              <option value=\"9\">9</option>\n              <option value=\"10\">10</option>\n            </select> \n          <div class=\"button-container\">\n            <button type=\"button\" (click)=\"close()\">Cancel</button>\n            <button type=\"submit\">Post Now</button>\n          </div>\n        </form>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/page-content/your-stories-page/add-story-form/add-story-form.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/page-content/your-stories-page/add-story-form/add-story-form.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddStoryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStoryFormComponent", function() { return AddStoryFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_DataStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/DataStore */ "./src/app/services/DataStore.ts");
/* harmony import */ var _types_Story__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types/Story */ "./src/app/types/Story.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddStoryFormComponent = /** @class */ (function () {
    function AddStoryFormComponent() {
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataStore = _services_DataStore__WEBPACK_IMPORTED_MODULE_1__["DataStore"].getInstance();
    }
    AddStoryFormComponent.prototype.ngOnInit = function () {
    };
    AddStoryFormComponent.prototype.close = function () {
        this.closeEvent.emit();
    };
    AddStoryFormComponent.prototype.addStory = function (title, genre, link, blurb, storyLength, storyReviews) {
        if (title && genre && link && blurb && storyLength && storyReviews) {
            var newStory = new _types_Story__WEBPACK_IMPORTED_MODULE_2__["Story"](title, title + '1234', this.dataStore.getLoggedInUser().getName(), genre, link, blurb, +storyLength, new Date(), +storyReviews, []);
            this.dataStore.addStories([newStory]);
            this.close();
        }
        else {
            console.log("Not enough detail my dude");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddStoryFormComponent.prototype, "closeEvent", void 0);
    AddStoryFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-story-form',
            template: __webpack_require__(/*! ./add-story-form.component.html */ "./src/app/page-content/your-stories-page/add-story-form/add-story-form.component.html"),
            styles: [__webpack_require__(/*! ./add-story-form.component.css */ "./src/app/page-content/your-stories-page/add-story-form/add-story-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddStoryFormComponent);
    return AddStoryFormComponent;
}());



/***/ }),

/***/ "./src/app/page-content/your-stories-page/posted-story-card/posted-story-card.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/page-content/your-stories-page/posted-story-card/posted-story-card.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    width: 70%;\n    height: 126px;\n    border: 1px solid grey;\n    margin: 10px auto;\n    border-radius: 3px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    position: relative;\n}\n\np {\n    margin-left: 10px;\n    line-height: 0.5em;\n}\n\nbutton {\n    background-color: #2DABF3;\n    border: none;\n    border-radius: 5px;\n    color: white;\n    padding: 8px 7px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    margin-left: 11px;\n    cursor: pointer;\n}\n\n.info-col {\n    display: flex;\n    flex-direction: column;\n}\n\n.cta-col {\n    position: relative;\n    width: 276px;\n}\n\n.cta-buttons {\n    position: absolute;\n    bottom: 16px;\n}\n\n.indent {\n    padding-left: 20px;\n    line-height: 0em;\n}\n\n.story-title {\n    font-size: larger;\n    line-height: 1em;\n    margin-bottom: 10px;\n    color: #1c5899;\n}\n\n.dark-button {\n    background-color: #2378bc;\n}\n\n.light-button {\n    border: 1px solid #2378bc;\n    color: #2378bc;\n    background-color: white;\n}\n\n.reviews {\n    max-height: 800px;\n    transition: max-height 0.8s ease 0.1s;\n    overflow: hidden;\n}\n\n.reviews p {\n    line-height: 1em;\n    border: 2px solid gray;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    padding-bottom: 17px;\n    padding-top: 11px;\n    width: 68%;\n    margin: auto;\n}\n\n.hidden {\n    max-height: 0;\n}\n\n.non-button {\n    border: 1px solid white;\n    color: #2378bc;\n    background-color: white;\n}\n\n.non-button:hover {\n    cursor: default;\n}"

/***/ }),

/***/ "./src/app/page-content/your-stories-page/posted-story-card/posted-story-card.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/page-content/your-stories-page/posted-story-card/posted-story-card.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"info-col\">\n    <p class=\"story-title\">{{story.title}}</p>\n    <p class=\"indent\">{{getTimeDiffStatement()}}</p>\n    <p class=\"indent\">Awaiting {{story.getReviewsLeft()}} reviews</p>\n  </div>\n  <div class=\"cta-col\">\n    <div class=\"cta-buttons\">\n      <button (click)=\"showMore()\" class=\"light-button\">See Story Details</button>\n      <button *ngIf=\"reviewsAvailable() && !shouldShowReviews\" (click)=\"showReviews()\" class=\"dark-button\">See Reviews</button>\n      <button *ngIf=\"reviewsAvailable() && shouldShowReviews\" (click)=\"hideReviews()\" class=\"light-button\">Hide Reviews</button>\n      <button *ngIf=\"!reviewsAvailable()\" class=\"non-button\">No reviews</button>\n    </div>\n  </div>\n</div>\n<div class=\"reviews\" [ngClass]=\"{hidden: !shouldShowReviews}\">\n  <p *ngFor=\"let review of getStoryReviews()\">{{review.reviewText}} - {{getFormattedDate(review.reviewCompleted)}}</p>\n</div>\n<app-story-info-modal \n  *ngIf=\"shouldShowMore\"\n  [story]=\"story\"\n  [isReservable]=\"false\"\n  (closeEvent)=\"closeDialog($event)\"\n></app-story-info-modal>\n  "

/***/ }),

/***/ "./src/app/page-content/your-stories-page/posted-story-card/posted-story-card.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/page-content/your-stories-page/posted-story-card/posted-story-card.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PostedStoryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostedStoryCardComponent", function() { return PostedStoryCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_DataStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/DataStore */ "./src/app/services/DataStore.ts");
/* harmony import */ var _types_Story__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types/Story */ "./src/app/types/Story.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostedStoryCardComponent = /** @class */ (function () {
    function PostedStoryCardComponent() {
        this.shouldShowMore = false;
        this.shouldShowReviews = false;
        this.dataStore = _services_DataStore__WEBPACK_IMPORTED_MODULE_1__["DataStore"].getInstance();
        this.now = Date.now();
    }
    PostedStoryCardComponent.prototype.ngOnInit = function () {
    };
    PostedStoryCardComponent.prototype.getStoryCredit = function () {
        return Math.round(this.story.wordCount * this.story.getReviewsLeft() / 100000);
    };
    PostedStoryCardComponent.prototype.showMore = function () {
        this.shouldShowMore = true;
    };
    PostedStoryCardComponent.prototype.closeDialog = function (e) {
        this.shouldShowMore = false;
    };
    PostedStoryCardComponent.prototype.reserveForReview = function () {
        this.dataStore.reserveReview(this.story);
    };
    PostedStoryCardComponent.prototype.getTimeDiff = function () {
        return Math.round((this.story.datePosted.getTime() - this.now) / (1000 * 60 * 60 * 24));
    };
    PostedStoryCardComponent.prototype.getTimeDiffStatement = function () {
        var days = Math.round((this.now - this.story.datePosted.getTime()) / (1000 * 60 * 60 * 24));
        if (days > 0) {
            return days == 1 ? "Posted yesterday" : "Posted " + days + " day(s) ago";
        }
        return "Posted today";
    };
    PostedStoryCardComponent.prototype.showReviews = function () {
        this.shouldShowReviews = true;
    };
    PostedStoryCardComponent.prototype.hideReviews = function () {
        this.shouldShowReviews = false;
    };
    PostedStoryCardComponent.prototype.getStoryReviews = function () {
        return this.story.completedReviews.filter(function (review) { return review.reviewText != null; });
    };
    PostedStoryCardComponent.prototype.reviewsAvailable = function () {
        return this.getStoryReviews().length >= 1;
    };
    PostedStoryCardComponent.prototype.getFormattedDate = function (date) {
        var month = date.getMonth();
        var day = date.getDay();
        var year = date.getFullYear();
        return month + '/' + day + '/' + year;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _types_Story__WEBPACK_IMPORTED_MODULE_2__["Story"])
    ], PostedStoryCardComponent.prototype, "story", void 0);
    PostedStoryCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posted-story-card',
            template: __webpack_require__(/*! ./posted-story-card.component.html */ "./src/app/page-content/your-stories-page/posted-story-card/posted-story-card.component.html"),
            styles: [__webpack_require__(/*! ./posted-story-card.component.css */ "./src/app/page-content/your-stories-page/posted-story-card/posted-story-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostedStoryCardComponent);
    return PostedStoryCardComponent;
}());



/***/ }),

/***/ "./src/app/page-content/your-stories-page/your-stories-page.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/page-content/your-stories-page/your-stories-page.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".your-stories-container {\n    position: relative;\n}\n\nbutton {\n    background-color: #2DABF3;\n    border: none;\n    color: white;\n    padding: 8px 7px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    margin-left: 11px;\n    cursor: pointer;\n}\n\n.add-button {\n    background-color: #2378bc;\n    margin: 20px;\n    margin-left: 15%;\n    font-size: xx-large;\n    margin-bottom: 0px;\n    border-radius: 5px;\n    padding: 5px 12px;\n}"

/***/ }),

/***/ "./src/app/page-content/your-stories-page/your-stories-page.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/page-content/your-stories-page/your-stories-page.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"your-stories-container\">\n  <button class=\"add-button\" (click)=\"openAddModal()\">+ Add</button>\n  <div *ngFor=\"let story of stories\">\n    <app-posted-story-card [story]=\"story\"></app-posted-story-card>\n  </div>\n</div>\n<app-add-story-form *ngIf=\"showAddModal\" (closeEvent)=\"closeAddModal()\"></app-add-story-form>"

/***/ }),

/***/ "./src/app/page-content/your-stories-page/your-stories-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/page-content/your-stories-page/your-stories-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: YourStoriesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourStoriesPageComponent", function() { return YourStoriesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_DataStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/DataStore */ "./src/app/services/DataStore.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YourStoriesPageComponent = /** @class */ (function () {
    function YourStoriesPageComponent() {
        this.showAddModal = false;
        this.dataStore = _services_DataStore__WEBPACK_IMPORTED_MODULE_1__["DataStore"].getInstance();
        this.stories = this.dataStore.getStoriesByUsername(this.dataStore.getLoggedInUser().getName());
    }
    YourStoriesPageComponent.prototype.ngOnInit = function () {
    };
    YourStoriesPageComponent.prototype.openAddModal = function () {
        this.showAddModal = true;
    };
    YourStoriesPageComponent.prototype.closeAddModal = function () {
        this.showAddModal = false;
        this.stories = this.dataStore.getStoriesByUsername(this.dataStore.getLoggedInUser().getName());
    };
    YourStoriesPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-your-stories-page',
            template: __webpack_require__(/*! ./your-stories-page.component.html */ "./src/app/page-content/your-stories-page/your-stories-page.component.html"),
            styles: [__webpack_require__(/*! ./your-stories-page.component.css */ "./src/app/page-content/your-stories-page/your-stories-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], YourStoriesPageComponent);
    return YourStoriesPageComponent;
}());



/***/ }),

/***/ "./src/app/services/DataStore.ts":
/*!***************************************!*\
  !*** ./src/app/services/DataStore.ts ***!
  \***************************************/
/*! exports provided: DataStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStore", function() { return DataStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _types_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/User */ "./src/app/types/User.ts");
/* harmony import */ var _types_Story__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/Story */ "./src/app/types/Story.ts");
/* harmony import */ var _types_ReviewReservation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/ReviewReservation */ "./src/app/types/ReviewReservation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataStore = /** @class */ (function () {
    function DataStore() {
        this.loremText = "lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque non euismod liber pellentesque ac augue lobortis facilisis magna ut molestie odio Ut sollicitudin condimentum venenati praesent ultricies feugiat augue non".split(" ");
        this.userNames = ["bettyTheBot", "tommyj", "shj1996", "megera", "bandr", "mstbrn", "hotman"];
        this.genres = "Mystery Sci-Fi Fantasy Drama Romance Adventure Action Horror Fan-Fiction Humor".split(" ");
        this.loggedInUser = null;
        this.allUsers = [];
        this.allStories = [];
        this.allReviewReservations = [];
        this.generateUsers();
        this.generateStories();
        this.generateReviews();
    }
    DataStore_1 = DataStore;
    DataStore.getInstance = function () {
        if (DataStore_1.instance == null) {
            DataStore_1.instance = new DataStore_1();
        }
        return DataStore_1.instance;
    };
    DataStore.prototype.getStoriesByUsername = function (username) {
        return this.allStories.filter(function (story) {
            return story.author == username;
        }).sort(function (a, b) {
            return b.datePosted.getTime() - a.datePosted.getTime();
        });
    };
    DataStore.prototype.addUsers = function (users) {
        var _this = this;
        users.forEach(function (user) {
            _this.allUsers.push(user);
        });
    };
    DataStore.prototype.addStories = function (stories) {
        var _a;
        (_a = this.allStories).push.apply(_a, stories);
    };
    DataStore.prototype.addReviewReservations = function (revRes) {
        var _this = this;
        var _a;
        revRes.forEach(function (reservation) {
            var title = reservation.story;
            _this.allStories.filter(function (story) { return story.title == title; })[0].completedReviews.push(reservation);
        });
        (_a = this.allReviewReservations).push.apply(_a, revRes);
    };
    DataStore.prototype.logInUser = function (user) {
        this.loggedInUser = user;
    };
    DataStore.prototype.getPostedStories = function () {
        return this.loggedInUser.getPostedStories();
    };
    DataStore.prototype.getStoryByName = function (name) {
        return this.allStories.filter(function (story) { return story.title == name; })[0];
    };
    DataStore.prototype.getReservedStories = function () {
        return this.loggedInUser.getReservedStories();
    };
    DataStore.prototype.getReviewedStories = function () {
        return this.loggedInUser.getReviewedStories();
    };
    DataStore.prototype.getCredit = function () {
        return this.loggedInUser.getCredit();
    };
    DataStore.prototype.getLoggedInUser = function () {
        return this.loggedInUser;
    };
    DataStore.prototype.reserveReview = function (story) {
        var reservation = new _types_ReviewReservation__WEBPACK_IMPORTED_MODULE_3__["ReviewReservation"](story.title, this.loggedInUser.getName(), new Date());
        this.addReviewReservations([reservation]);
    };
    DataStore.prototype.searchStories = function (searchQuery) {
        var _this = this;
        debugger;
        return this.allStories.filter(function (story) {
            debugger;
            return (story.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                story.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
                story.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
                story.author !== _this.loggedInUser.getName();
        });
        // }).sort((a, b) => {
        //     return a.getReviewsLeft() - b.getReviewsLeft();
        // });
    };
    DataStore.prototype.getAllStories = function () {
        return this.allStories;
    };
    DataStore.prototype.generateStories = function () {
        var story = new _types_Story__WEBPACK_IMPORTED_MODULE_2__["Story"]("A Wonderous Journey", "a123", "tommyj", "Action", "superfakelink.com", "This story is going to be pretty boring unless you care about Western Canadian history, fair warning :)", 192560, this.generateRandomDate(), 12, []);
        var story2 = new _types_Story__WEBPACK_IMPORTED_MODULE_2__["Story"]("Modestly Mean", "a124", "shj1996", "Romance", "inkitt.com/also-fake", "This is the first story I've ever finished!! I hope you like it, thanks for reviewing!", 43567, this.generateRandomDate(), 8, []);
        var story3 = new _types_Story__WEBPACK_IMPORTED_MODULE_2__["Story"]("Uncovered", "uncovered", "bettyTheBot", "Sci-Fi", "http://berkeleyandrus.com/novels/Uncovered.pdf", "A super-hero action story with a bit of mystery mixed in...needs work, but plot has potential", 98567, new Date(2019, 1, 10), 10, []);
        var story4 = new _types_Story__WEBPACK_IMPORTED_MODULE_2__["Story"]("Those Ills We Bear", "TIWB", "bettyTheBot", "Drama", "inkitt.com/so-fake", "The story of Hamlet, gender bent and put in a modern setting", 49230, new Date(2019, 1, 1), 7, []);
        var allStories = [story, story2, story3, story4];
        for (var i = 0; i < 500; i++) {
            this.shuffleLoremText();
            var title = this.generateStoryTitle();
            var id = title + Math.random().toString();
            var blurb = this.generateStoryBlurb();
            var userName = this.userNames[Math.floor(Math.random() * this.userNames.length)];
            var genre = this.genres[Math.floor(Math.random() * this.genres.length)];
            var link = "superfakelink.com";
            var wordCount = 35000 + Math.floor(Math.random() * 100000);
            var desiredReviews = 4 + Math.floor(Math.random() * 12);
            var date = this.generateRandomDate();
            allStories.push(new _types_Story__WEBPACK_IMPORTED_MODULE_2__["Story"](title, id, userName, genre, link, blurb, wordCount, date, desiredReviews, []));
        }
        this.addStories(allStories);
    };
    DataStore.prototype.generateStoryTitle = function () {
        var title = "";
        for (var i = Math.random() * 2; i < 3.5; i += 1.0) {
            var word = this.loremText[Math.floor(2 + i)];
            word = word[0].toUpperCase() + word.substr(1);
            title += word + " ";
        }
        if (title.length > 25) {
            title = title.substr(0, 25);
        }
        return title;
    };
    DataStore.prototype.generateStoryBlurb = function () {
        var blurb = "";
        for (var i = 5; i < 18; i++) {
            blurb += this.loremText[i] + " ";
        }
        return blurb;
    };
    DataStore.prototype.generateReviewText = function () {
        var review = "";
        for (var i = 0; i < 130; i++) {
            review += this.loremText[Math.floor(Math.random() * this.loremText.length)] + " ";
        }
        return review;
    };
    DataStore.prototype.generateRandomDate = function () {
        var startDate = new Date(2018, 10, 1);
        var endDate = new Date(2019, 0, 1);
        return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    };
    DataStore.prototype.generateUsers = function () {
        var user1 = new _types_User__WEBPACK_IMPORTED_MODULE_1__["User"]("bettyTheBot", "betty@mailinator.com", [], [], 56);
        var user2 = new _types_User__WEBPACK_IMPORTED_MODULE_1__["User"]("tommyj", "tom@mailinator.com", [], [], -12);
        var user3 = new _types_User__WEBPACK_IMPORTED_MODULE_1__["User"]("shj1996", "sash@mailinator.com", [], [], 119);
        var user4 = new _types_User__WEBPACK_IMPORTED_MODULE_1__["User"]("megera", "booky@mailinator.com", [], [], 95);
        var user5 = new _types_User__WEBPACK_IMPORTED_MODULE_1__["User"]("bandr", "band@mailinator.com", [], [], 12);
        var user6 = new _types_User__WEBPACK_IMPORTED_MODULE_1__["User"]("mstbrn", "mist@mailinator.com", [], [], 64);
        var user7 = new _types_User__WEBPACK_IMPORTED_MODULE_1__["User"]("hotman", "flameo@mailinator.com", [], [], 44);
        this.logInUser(user1);
        this.allUsers = [user1, user2, user3, user4, user5, user6, user7];
    };
    DataStore.prototype.generateReviews = function () {
        var stories = this.getAllStories();
        var goodReview = new _types_ReviewReservation__WEBPACK_IMPORTED_MODULE_3__["ReviewReservation"]("Uncovered", "shj1996", new Date());
        var goodReview2 = new _types_ReviewReservation__WEBPACK_IMPORTED_MODULE_3__["ReviewReservation"]("Those Ills We Bear", "tommyj", this.generateRandomDate(), new Date(), "This was a great story! I really liked your characters. I felt like I could never predict what Jessica would do, but I actually kind of loved that about her character. I thought the plot was pretty good, but the first quarter was a little slow for me. Chapters 4 and 5 felt like they could be combined, for example, and I don't see why chapter 7 is there at all. The biggest weakness though was with setting - I never felt like I had a good idea of where the characters were. Take some time to describe the buildings, the weather, the yellow wallpaper, whatever it takes to give me some hints and let my imagination do the rest.");
        var goodReview3 = new _types_ReviewReservation__WEBPACK_IMPORTED_MODULE_3__["ReviewReservation"]("Those Ills We Bear", "shj1996", this.generateRandomDate(), this.generateRandomDate(), "Overall this was pretty solid. I like the way the characters interacted with each other and how you had a few that were constant but most of them fell in and out of the story. It made it seem more realistic. I also liked you pacing, although at some points it felt like you were stretching to hit a specific word count. If you want to improve, I would say my biggest issue was with prose. Tighten it up a little more and try to find your own voice, then keep that voice consistent throughout the story. Also, don't try to use big words if you don't know what they mean.");
        var goodReview4 = new _types_ReviewReservation__WEBPACK_IMPORTED_MODULE_3__["ReviewReservation"]("Uncovered", "tommyj", this.generateRandomDate(), new Date(), "This was a great story! I really liked your characters. I felt like I could never predict what Jessica would do, but I actually kind of loved that about her character. I thought the plot was pretty good, but the first quarter was a little slow for me. Chapters 4 and 5 felt like they could be combined, for example, and I don't see why chapter 7 is there at all. The biggest weakness though was with setting - I never felt like I had a good idea of where the characters were. Take some time to describe the buildings, the weather, the yellow wallpaper, whatever it takes to give me some hints and let my imagination do the rest.");
        var goodReview5 = new _types_ReviewReservation__WEBPACK_IMPORTED_MODULE_3__["ReviewReservation"]("Uncovered", "shj1996", this.generateRandomDate(), this.generateRandomDate(), "Overall this was pretty solid. I like the way the characters interacted with each other and how you had a few that were constant but most of them fell in and out of the story. It made it seem more realistic. I also liked you pacing, although at some points it felt like you were stretching to hit a specific word count. If you want to improve, I would say my biggest issue was with prose. Tighten it up a little more and try to find your own voice, then keep that voice consistent throughout the story. Also, don't try to use big words if you don't know what they mean.");
        this.addReviewReservations([goodReview, goodReview2, goodReview3, goodReview4, goodReview5]);
        var _loop_1 = function () {
            var story = stories[Math.floor(Math.random() * stories.length)];
            var reviewer = this_1.userNames[Math.floor(Math.random() * this_1.userNames.length)];
            if (reviewer == story.author) {
                i--;
                return "continue";
            }
            var reservation = new _types_ReviewReservation__WEBPACK_IMPORTED_MODULE_3__["ReviewReservation"](story.title, reviewer, new Date());
            this_1.allUsers.filter(function (user) { return user.getName() == reviewer; })[0].addReservedStory(reservation);
            this_1.addReviewReservations([reservation]);
        };
        var this_1 = this;
        for (var i = 0; i < 200; i++) {
            _loop_1();
        }
        var _loop_2 = function () {
            this_2.shuffleLoremText();
            var story = stories[Math.floor(Math.random() * stories.length)];
            var reviewer = this_2.userNames[Math.floor(Math.random() * this_2.userNames.length)];
            if (reviewer == story.author) {
                i--;
                return "continue";
            }
            var reviewText = this_2.generateReviewText();
            var review = new _types_ReviewReservation__WEBPACK_IMPORTED_MODULE_3__["ReviewReservation"](story.title, reviewer, new Date(), new Date(), reviewText);
            this_2.allUsers.filter(function (user) { return user.getName() == reviewer; })[0].addReservedStory(review);
            this_2.addReviewReservations([review]);
        };
        var this_2 = this;
        for (var i = 0; i < 400; i++) {
            _loop_2();
        }
    };
    DataStore.prototype.shuffleLoremText = function () {
        for (var i = 0; i < 100; i++) {
            var randomIndex = Math.floor(Math.random() * (this.loremText.length));
            var randomIndex2 = Math.floor(Math.random() * (this.loremText.length));
            var temp = this.loremText[randomIndex];
            this.loremText[randomIndex] = this.loremText[randomIndex2];
            this.loremText[randomIndex2] = temp;
        }
    };
    var DataStore_1;
    DataStore.instance = null;
    DataStore = DataStore_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataStore);
    return DataStore;
}());



/***/ }),

/***/ "./src/app/story-info-modal/story-info-modal.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/story-info-modal/story-info-modal.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.dimmer {\n    background: #000;\n    opacity: 0.9;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n}\n\n.dialog-container {\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    top: calc(20vh);\n    left: calc(50vw - 300px);\n    z-index: 2;\n}\n\n.dialog {\n    background-color: white;\n    width: 600px;\n    border-radius: 4px;\n    z-index: 2;\n    margin-top: 45px;\n}\n\n.close-button-container {\n    width: 100%;\n    display: flex;\n    padding: 8px 8px 0 0;\n    margin-left: auto;\n    cursor: pointer;\n    position: relative;\n}\n\n.close-button {\n    position: absolute;\n    left: 577px;\n    font-family: 'Rambla', sans-serif;\n}\n\n.indent {\n    padding-left: 20px;\n    line-height: 1em;\n}\n\n.story-title {\n    font-size: larger;\n    color: #2378bc;\n    font-weight: bold;\n}\n\n.info {\n    margin: 15px;\n    margin-left: 20px;\n}\n\n.button-container {\n    margin-bottom: 14px;\n    float: right;\n    margin-right: 16px;\n}\n\nbutton {\n    background-color: #2378bc;\n    border-radius: 5px;\n    border: none;\n    color: white;\n    padding: 8px 7px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    margin-left: 11px;\n    cursor: pointer;\n}\n\n.light-button {\n    border: 1px solid #2378bc;\n    color: #2378bc;\n    background-color: white;\n}"

/***/ }),

/***/ "./src/app/story-info-modal/story-info-modal.component.html":
/*!******************************************************************!*\
  !*** ./src/app/story-info-modal/story-info-modal.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dimmer\"></div>\n<div class=\"dialog-container\">\n\t<div class=\"dialog\">\n        <div class=\"close-button-container\" (click)=\"close()\"><div class=\"close-button\">X</div></div>\n        <div class=\"info\">\n            <p class=\"story-title\">{{story.title}}</p>\n            <p class=\"indent\">Posted by {{story.author}} two days ago</p>\n            <p class=\"indent\">Genre: {{story.genre}}</p>\n            <p class=\"indent\">{{story.wordCount}} words</p>\n            <p class=\"indent\">Awaiting {{story.getReviewsLeft()}} reviews</p>\n            <p class=\"indent\">Author's notes: {{story.blurb}}</p>\n            <p *ngIf=\"reservable()\" class=\"indent\">Reviewing this story is worth +{{getStoryCredit()}} credit</p>\n        </div>\n        <div class=\"button-container\">\n            <button *ngIf=\"reservable()\" (click)=\"reserveForReview()\">Reserve for Review</button> \n            <button *ngIf=\"!reservable()\" (click)=\"close()\" class=\"light-button\">Exit</button>\n        </div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/story-info-modal/story-info-modal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/story-info-modal/story-info-modal.component.ts ***!
  \****************************************************************/
/*! exports provided: StoryInfoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryInfoModalComponent", function() { return StoryInfoModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _types_Story__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/Story */ "./src/app/types/Story.ts");
/* harmony import */ var _services_DataStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/DataStore */ "./src/app/services/DataStore.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoryInfoModalComponent = /** @class */ (function () {
    function StoryInfoModalComponent() {
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataStore = _services_DataStore__WEBPACK_IMPORTED_MODULE_2__["DataStore"].getInstance();
    }
    StoryInfoModalComponent.prototype.ngOnInit = function () {
    };
    StoryInfoModalComponent.prototype.close = function () {
        this.closeEvent.emit();
    };
    StoryInfoModalComponent.prototype.reserveForReview = function () {
        this.dataStore.reserveReview(this.story);
        this.close();
    };
    StoryInfoModalComponent.prototype.getStoryCredit = function () {
        return Math.round(this.story.wordCount * this.story.getReviewsLeft() / 100000);
    };
    StoryInfoModalComponent.prototype.reservable = function () {
        return this.isReservable && this.story.author != this.dataStore.getLoggedInUser().getName();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _types_Story__WEBPACK_IMPORTED_MODULE_1__["Story"])
    ], StoryInfoModalComponent.prototype, "story", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StoryInfoModalComponent.prototype, "isReservable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StoryInfoModalComponent.prototype, "closeEvent", void 0);
    StoryInfoModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-story-info-modal',
            template: __webpack_require__(/*! ./story-info-modal.component.html */ "./src/app/story-info-modal/story-info-modal.component.html"),
            styles: [__webpack_require__(/*! ./story-info-modal.component.css */ "./src/app/story-info-modal/story-info-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoryInfoModalComponent);
    return StoryInfoModalComponent;
}());



/***/ }),

/***/ "./src/app/types/ReviewReservation.ts":
/*!********************************************!*\
  !*** ./src/app/types/ReviewReservation.ts ***!
  \********************************************/
/*! exports provided: ReviewReservation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewReservation", function() { return ReviewReservation; });
var ReviewReservation = /** @class */ (function () {
    function ReviewReservation(story, reviewer, dateReserved, reviewCompleted, reviewText) {
        this.story = story;
        this.reviewer = reviewer;
        this.dateReserved = dateReserved;
        this.reviewCompleted = reviewCompleted;
        this.reviewText = reviewText;
    }
    return ReviewReservation;
}());



/***/ }),

/***/ "./src/app/types/Story.ts":
/*!********************************!*\
  !*** ./src/app/types/Story.ts ***!
  \********************************/
/*! exports provided: Story */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Story", function() { return Story; });
var Story = /** @class */ (function () {
    function Story(title, storyID, author, genre, link, blurb, wordCount, datePosted, desiredReviews, completedReviews) {
        this.title = title;
        this.storyID = storyID;
        this.author = author;
        this.genre = genre;
        this.link = link;
        this.blurb = blurb;
        this.wordCount = wordCount;
        this.datePosted = datePosted;
        this.desiredReviews = desiredReviews;
        this.completedReviews = completedReviews;
    }
    Story.prototype.getReviewsLeft = function () {
        return this.desiredReviews - this.completedReviews.length;
    };
    return Story;
}());



/***/ }),

/***/ "./src/app/types/User.ts":
/*!*******************************!*\
  !*** ./src/app/types/User.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(name, emailAddress, postedStories, reservedStories, credit) {
        this.name = name;
        this.emailAddress = emailAddress;
        this.postedStories = postedStories;
        this.reservedStories = reservedStories;
        this.credit = credit;
    }
    User.prototype.getPostedStories = function () {
        return this.postedStories;
    };
    User.prototype.getReservedStories = function () {
        return this.reservedStories.filter(function (review) { return review.reviewCompleted == null; });
    };
    User.prototype.getReviewedStories = function () {
        return this.reservedStories.filter(function (review) { return review.reviewCompleted != null; });
    };
    User.prototype.getCredit = function () {
        return this.credit;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.addReservedStory = function (review) {
        this.reservedStories.push(review);
    };
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bandrus/Documents/356/story-exchange/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map