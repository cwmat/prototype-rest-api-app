webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "starter {\r\n  margin-top: 10em;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
        this.title = 'Smellmap - Assignment 6';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__smellprofile_list_smellprofile_list_component__ = __webpack_require__("./src/app/smellprofile-list/smellprofile-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__smellprofile_map_smellprofile_map_component__ = __webpack_require__("./src/app/smellprofile-map/smellprofile-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__smellprofile_details_smellprofile_details_component__ = __webpack_require__("./src/app/smellprofile-details/smellprofile-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__smellprofile_gallery_smellprofile_gallery_component__ = __webpack_require__("./src/app/smellprofile-gallery/smellprofile-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__smellprofile_new_smellprofile_new_component__ = __webpack_require__("./src/app/smellprofile-new/smellprofile-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__smellprofile_update_smellprofile_update_component__ = __webpack_require__("./src/app/smellprofile-update/smellprofile-update.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import { AgmCoreModule } from '@agm/core';
var routes = [
    { path: '', redirectTo: '/gallery', pathMatch: 'full' },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_9__smellprofile_gallery_smellprofile_gallery_component__["a" /* SmellprofileGalleryComponent */] },
    { path: 'smell/:id', component: __WEBPACK_IMPORTED_MODULE_8__smellprofile_details_smellprofile_details_component__["a" /* SmellprofileDetailsComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__smellprofile_list_smellprofile_list_component__["a" /* SmellprofileListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__smellprofile_map_smellprofile_map_component__["a" /* SmellprofileMapComponent */],
                __WEBPACK_IMPORTED_MODULE_8__smellprofile_details_smellprofile_details_component__["a" /* SmellprofileDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__smellprofile_gallery_smellprofile_gallery_component__["a" /* SmellprofileGalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_10__smellprofile_new_smellprofile_new_component__["a" /* SmellprofileNewComponent */],
                __WEBPACK_IMPORTED_MODULE_11__smellprofile_update_smellprofile_update_component__["a" /* SmellprofileUpdateComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/smellprofile-details/smellprofile-details.component.css":
/***/ (function(module, exports) {

module.exports = "starter {\r\n  margin-top: 10em;\r\n}\r\n\r\nbtn-secondary {\r\n  margin-left: 1em;\r\n}\r\n\r\ntbody tr:hover {\r\n  color: rgb(241, 95, 210);\r\n}\r\n\r\ntbody tr.selected {\r\n  color: rgb(198, 240, 49);\r\n}"

/***/ }),

/***/ "./src/app/smellprofile-details/smellprofile-details.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- State change buttons -->\r\n<div class=\"row starter\" style=\"margin-top: 5em;\">\r\n  <div class=\"col-lg-12 text-center starter\">\r\n    <button class=\"btn\" [class.btn-primary]=\"viewState == 'Details'\" (click)=\"changeViewState('Details')\">Details View</button>\r\n    <button class=\"btn\" [class.btn-primary]=\"viewState == 'Update'\" (click)=\"changeViewState('Update')\">Update View</button>\r\n  </div>\r\n</div>\r\n\r\n<!-- Find one -->\r\n<div class=\"row\" *ngIf=\"viewState == 'Details'\">\r\n    <!-- <div class=\"row\"> -->\r\n  <div class=\"col-lg-12 text-center\">\r\n    <h1 class=\"mt-5\">Smellprofile Details</h1>\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th>Field</th>\r\n            <th>Value</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody id=\"list-table\">\r\n          <tr [class.selected]=\"smellprofile === selectedSmellprofile\">\r\n            <td>ID</td>\r\n            <td>{{ smellprofile._id }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Name</td>\r\n            <td>{{ smellprofile.name }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Long/Lat</td>\r\n            <td>{{ smellprofile.long }}, {{ smellprofile.lat }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Type</td>\r\n            <td>{{ smellprofile.type }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Description</td>\r\n            <td>{{ smellprofile.desc }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <!-- Map -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-body\">\r\n            <div #Detailsgmap style=\"height: 300px;\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!-- Buttons -->\r\n    <div class=\"row\" style=\"margin-top: 1em;\">\r\n      <div class=\"col-lg-12\">\r\n        <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteSmell()\">Delete This Smell</button>\r\n        <button class=\"btn btn-warning\" style=\"margin-left: 1em;\" type=\"button\" (click)=\"goBack()\">Back to Gallery</button>\r\n      </div>\r\n    </div>\r\n    <!-- End Col -->\r\n  </div>\r\n  <!-- End if row -->\r\n</div>\r\n\r\n<!-- Update component -->\r\n<app-smellprofile-update *ngIf=\"viewState == 'Update'\"></app-smellprofile-update>\r\n\r\n"

/***/ }),

/***/ "./src/app/smellprofile-details/smellprofile-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmellprofileDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smellprofile_service__ = __webpack_require__("./src/app/smellprofile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import data service and data class

var SmellprofileDetailsComponent = /** @class */ (function () {
    function SmellprofileDetailsComponent(route, smellprofileService, router) {
        this.route = route;
        this.smellprofileService = smellprofileService;
        this.router = router;
        // State change instance member
        this.viewState = "Details";
    }
    SmellprofileDetailsComponent.prototype.ngOnInit = function () {
        // Find the specified Smell
        this.getSmell();
    };
    SmellprofileDetailsComponent.prototype.ngAfterViewInit = function () {
        // Draw the map after the DOM has rendered
        this.refreshMap();
    };
    SmellprofileDetailsComponent.prototype.getSmell = function () {
        var _this = this;
        // Use data service to find a specific smell
        var param = this.route.snapshot.paramMap.get('id');
        this.smellprofileService.getSmell(param)
            .subscribe(function (smellprofile) {
            _this.smellprofile = smellprofile[0];
        });
    };
    // Deletes smell using data Service
    SmellprofileDetailsComponent.prototype.deleteSmell = function () {
        var _this = this;
        if (confirm("Are you sure you want to delete " + this.smellprofile.desc + "?")) {
            console.log("deleting " + this.smellprofile._id);
            this.smellprofileService.deleteSmell(this.smellprofile._id)
                .subscribe(function (result) {
                alert("Smellprofile " + _this.smellprofile.desc + " has been deleted");
                _this.router.navigate(['/gallery']);
            });
        }
    };
    SmellprofileDetailsComponent.prototype.goBack = function () {
        // Navigate back to gallery
        this.router.navigate(['/gallery']);
    };
    // Change the view state between 'Details' and 'Update'
    SmellprofileDetailsComponent.prototype.changeViewState = function (newState) {
        this.viewState = newState;
        if (this.viewState == 'Details') {
            location.reload();
        }
    };
    SmellprofileDetailsComponent.prototype.refreshMap = function () {
        console.log("INIT!");
        // Rough center point for Richmond, VA
        var rva = {
            lat: 37.536954951447285,
            lng: -77.43867874145508
        };
        // Define a GMap
        this.map = new google.maps.Map(this.detailsGmapElement.nativeElement, {
            zoom: 12,
            center: rva
        });
        // Set a marker
        var marker = new google.maps.Marker({
            position: {
                lat: this.smellprofile.lat,
                lng: this.smellprofile.long
            },
            map: this.map,
            title: this.smellprofile.desc
        });
        // Cetner map
        this.map.setCenter({
            lat: this.smellprofile.lat,
            lng: this.smellprofile.long
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('Detailsgmap'),
        __metadata("design:type", Object)
    ], SmellprofileDetailsComponent.prototype, "detailsGmapElement", void 0);
    SmellprofileDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-smellprofile-details',
            template: __webpack_require__("./src/app/smellprofile-details/smellprofile-details.component.html"),
            styles: [__webpack_require__("./src/app/smellprofile-details/smellprofile-details.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__smellprofile_service__["a" /* SmellprofileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__smellprofile_service__["a" /* SmellprofileService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SmellprofileDetailsComponent);
    return SmellprofileDetailsComponent;
}());



/***/ }),

/***/ "./src/app/smellprofile-gallery/smellprofile-gallery.component.css":
/***/ (function(module, exports) {

module.exports = "starter {\r\n    margin-top: 10em;\r\n  }"

/***/ }),

/***/ "./src/app/smellprofile-gallery/smellprofile-gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row starter\" style=\"margin-top: 5em;\">\r\n    <div class=\"col-lg-12 text-center starter\">\r\n  <button class=\"btn\" [class.btn-primary]=\"viewState == 'Map'\" (click)=\"changeViewState('Map')\">Map View</button>\r\n  <button class=\"btn\" [class.btn-primary]=\"viewState == 'List'\" (click)=\"changeViewState('List')\">List View</button>\r\n  <button class=\"btn\" [class.btn-primary]=\"viewState == 'New'\" (click)=\"changeViewState('New')\">Create New</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row starter\">\r\n  <div class=\"col-lg-12 text-center\">\r\n    <h1>Smell Map</h1>\r\n  </div>\r\n</div>\r\n<app-smellprofile-list *ngIf=\"viewState == 'List'\"></app-smellprofile-list>\r\n<app-smellprofile-map *ngIf=\"viewState == 'Map'\"></app-smellprofile-map>\r\n<app-smellprofile-new *ngIf=\"viewState == 'New'\" (newSmellEvent)=\"updateSmells()\"></app-smellprofile-new>"

/***/ }),

/***/ "./src/app/smellprofile-gallery/smellprofile-gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmellprofileGalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smellprofile_list_smellprofile_list_component__ = __webpack_require__("./src/app/smellprofile-list/smellprofile-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SmellprofileGalleryComponent = /** @class */ (function () {
    function SmellprofileGalleryComponent() {
        this.viewState = 'Map';
    }
    SmellprofileGalleryComponent.prototype.ngOnInit = function () { };
    // Change view state back to map after creating a new smell
    SmellprofileGalleryComponent.prototype.updateSmells = function () {
        this.child.getSmells();
        this.changeViewState('Map');
    };
    // Set view state as either: 'Map', 'List', or 'Create'
    SmellprofileGalleryComponent.prototype.changeViewState = function (newState) {
        this.viewState = newState;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__smellprofile_list_smellprofile_list_component__["a" /* SmellprofileListComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__smellprofile_list_smellprofile_list_component__["a" /* SmellprofileListComponent */])
    ], SmellprofileGalleryComponent.prototype, "child", void 0);
    SmellprofileGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-smellprofile-gallery',
            template: __webpack_require__("./src/app/smellprofile-gallery/smellprofile-gallery.component.html"),
            styles: [__webpack_require__("./src/app/smellprofile-gallery/smellprofile-gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SmellprofileGalleryComponent);
    return SmellprofileGalleryComponent;
}());



/***/ }),

/***/ "./src/app/smellprofile-list/smellprofile-list.component.css":
/***/ (function(module, exports) {

module.exports = "tbody tr:hover {\r\n  color: rgb(241, 95, 210);\r\n}\r\n\r\ntbody tr.selected {\r\n  color: rgb(198, 240, 49);\r\n}"

/***/ }),

/***/ "./src/app/smellprofile-list/smellprofile-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">Smellmap Entries</div>\r\n      <div class=\"panel-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>ID</th>\r\n                <th>Name</th>\r\n                <th>Lon/Lat</th>\r\n                <th>Type</th>\r\n                <th>Description</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody id=\"list-table\">\r\n              <tr *ngFor='let smellprofile of smellList'\r\n              [class.selected]=\"smellprofile === selectedSmellprofile\"\r\n              (click)=\"onSelect(smellprofile)\">\r\n                <td>{{ smellprofile._id }}</td>\r\n                <td>{{ smellprofile.name }}</td>\r\n                <td>{{ smellprofile.long }}, {{ smellprofile.lat }}</td>\r\n                <td>{{ smellprofile.type }}</td>\r\n                <td>{{ smellprofile.desc }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/smellprofile-list/smellprofile-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmellprofileListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smellprofile_service__ = __webpack_require__("./src/app/smellprofile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import data service and data class

var SmellprofileListComponent = /** @class */ (function () {
    // Inject data service in constructor
    function SmellprofileListComponent(smellprofileService, router) {
        this.smellprofileService = smellprofileService;
        this.router = router;
    }
    // On init, call the getSmells() method to obtain data from dataservice
    SmellprofileListComponent.prototype.ngOnInit = function () {
        this.getSmells();
    };
    // Uses data service to pull data fro REST API
    SmellprofileListComponent.prototype.getSmells = function () {
        var _this = this;
        // Subscribe to observable to obtain data asynchronously
        this.smellprofileService.listSmells()
            .subscribe(function (smellList) { return _this.smellList = smellList; });
    };
    // Upon selecting a table row, set that smellprofile as the currently selected.
    SmellprofileListComponent.prototype.onSelect = function (smellprofile) {
        this.selectedSmellprofile = smellprofile;
        this.router.navigate(['/smell/' + this.selectedSmellprofile._id]);
    };
    SmellprofileListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-smellprofile-list',
            template: __webpack_require__("./src/app/smellprofile-list/smellprofile-list.component.html"),
            styles: [__webpack_require__("./src/app/smellprofile-list/smellprofile-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__smellprofile_service__["a" /* SmellprofileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__smellprofile_service__["a" /* SmellprofileService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SmellprofileListComponent);
    return SmellprofileListComponent;
}());



/***/ }),

/***/ "./src/app/smellprofile-map/smellprofile-map.component.css":
/***/ (function(module, exports) {

module.exports = "#map {\r\n  height: 400px;\r\n}\r\n\r\n.map-text {\r\n  color: black !important;\r\n}"

/***/ }),

/***/ "./src/app/smellprofile-map/smellprofile-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-body\">\r\n        <div #gmap style=\"height: 600px;\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/smellprofile-map/smellprofile-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmellprofileMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smellprofile__ = __webpack_require__("./src/app/smellprofile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smellprofile_service__ = __webpack_require__("./src/app/smellprofile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SmellprofileMapComponent = /** @class */ (function () {
    function SmellprofileMapComponent(smellprofileService) {
        this.smellprofileService = smellprofileService;
    }
    SmellprofileMapComponent.prototype.ngOnInit = function () {
        // Rough center point for Richmond, VA
        var rva = {
            lat: 37.536954951447285,
            lng: -77.43867874145508
        };
        // Define a GMap
        this.map = new google.maps.Map(this.gmapElement.nativeElement, {
            zoom: 12,
            center: rva
        });
        this.addMarkers();
        // When the user clicks, open an infowindow
        this.map.data.addListener('click', function (event) {
            var myHTML = "<p><strong>" + event.feature.getProperty("name") + "</strong></p>" + "<p>" + event.feature.getProperty("type") + "</p>" + "<p>" + event.feature.getProperty("desc") + "</p>" + event.feature.getProperty("edit") + event.feature.getProperty("delete");
            this.infowindow.setContent("<div style='width:150px; text-align: center;'>" + myHTML + "</div>");
            this.infowindow.setPosition(event.feature.getGeometry().get());
            this.infowindow.setOptions({
                pixelOffset: new google.maps.Size(0, -30)
            });
            this.infowindow.open(this.map);
        });
    };
    SmellprofileMapComponent.prototype.getSmells = function () {
        var _this = this;
        // Subscribe to observable to obtain data asynchronously
        this.smellprofileService.listSmells()
            .subscribe(function (smellList) { return _this.smellList = smellList; });
    };
    // Load all data as markers on map
    SmellprofileMapComponent.prototype.addMarkers = function () {
        var _this = this;
        this.smellprofileService.listSmells()
            .subscribe(function (mapList) {
            _this.mapList = mapList;
            var _loop_1 = function (i) {
                var currentSmell = _this.mapList[i];
                var myHTML = "<div class='map-text' style='color: black;'>" + "<p style='font-weight: bold;'>" + currentSmell.type + "</p>" + "<p>" + currentSmell.desc + "</p>" + "<p><a href='/smell/" + currentSmell._id + "'>Details</a></p>" + "</div>";
                var infowindow = new google.maps.InfoWindow({
                    content: myHTML
                });
                var marker = new google.maps.Marker({
                    position: {
                        lat: _this.mapList[i].lat,
                        lng: _this.mapList[i].long
                    },
                    map: _this.map,
                    title: _this.mapList[i].desc
                });
                marker.addListener('click', function () {
                    infowindow.open(this.map, marker);
                });
            };
            for (var i = 0; i <= _this.mapList.length; i++) {
                _loop_1(i);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('gmap'),
        __metadata("design:type", Object)
    ], SmellprofileMapComponent.prototype, "gmapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__smellprofile__["a" /* Smellprofile */])
    ], SmellprofileMapComponent.prototype, "smellprofile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SmellprofileMapComponent.prototype, "smellList", void 0);
    SmellprofileMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-smellprofile-map',
            template: __webpack_require__("./src/app/smellprofile-map/smellprofile-map.component.html"),
            styles: [__webpack_require__("./src/app/smellprofile-map/smellprofile-map.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__smellprofile_service__["a" /* SmellprofileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__smellprofile_service__["a" /* SmellprofileService */]])
    ], SmellprofileMapComponent);
    return SmellprofileMapComponent;
}());



/***/ }),

/***/ "./src/app/smellprofile-new/smellprofile-new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/smellprofile-new/smellprofile-new.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Create -->\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <h1 class=\"mt-5 starter\">Add Data</h1>\r\n    <div id=\"page-wrapper\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"container\">\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 page-wrapper\">\r\n                    <form #newSmellForm=\"ngForm\" (ngSubmit)=\"createSmell(newSmellForm)\">\r\n                      <div class=\"form-group\">\r\n                        <label>Name</label>\r\n                        <input required [(ngModel)]=\"newSmell.name\" #name=\"ngModel\" placeholder=\"Enter text\" name=\"name\" class=\"form-control\" />\r\n                        <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">Field is required</div>\r\n                      </div>\r\n\r\n                      <!-- Map -->\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                          <div class=\"panel panel-default\">\r\n                            <div class=\"panel-body\">\r\n                              <div #Creategmap style=\"height: 300px;\"></div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"col-lg-6\">\r\n                        <div class=\"form-group\">\r\n                          <label>Longitude</label>\r\n                          <input required type=\"number\" #long=\"ngModel\" [(ngModel)]=\"newSmell.long\" placeholder=\"Enter text\" name=\"lon\" class=\"form-control\"\r\n                          />\r\n                          <div *ngIf=\"long.invalid && (long.dirty || long.touched)\" class=\"alert alert-danger\">Field is required and must be numeric</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-6\">\r\n                        <div class=\"form-group\">\r\n                          <label>Latitude</label>\r\n                          <input required type=\"number\" #lat=\"ngModel\" [(ngModel)]=\"newSmell.lat\" placeholder=\"Enter text\" name=\"lat\" class=\"form-control\"\r\n                          />\r\n                          <div *ngIf=\"lat.invalid && (lat.dirty || lat.touched)\" class=\"alert alert-danger\">Field is required and must be numeric</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label>Type</label>\r\n                        <select required #type=\"ngModel\" [(ngModel)]=\"newSmell.type\" name=\"type\" class=\"form-control\">\r\n                          <option>Good</option>\r\n                          <option>Neutral</option>\r\n                          <option>Bad</option>\r\n                        </select>\r\n                        <div *ngIf=\"type.invalid && (type.dirty || type.touched)\" class=\"alert alert-danger\">Field is required</div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label>Description</label>\r\n                        <textarea required #desc=\"ngModel\" [(ngModel)]=\"newSmell.desc\" rows=\"3\" name=\"desc\" class=\"form-control\"></textarea>\r\n                        <div *ngIf=\"desc.invalid && (desc.dirty || desc.touched)\" class=\"alert alert-danger\">Field is required</div>\r\n                      </div>\r\n                      <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!newSmellForm.valid\">Submit</button>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br />\r\n"

/***/ }),

/***/ "./src/app/smellprofile-new/smellprofile-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmellprofileNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smellprofile_service__ = __webpack_require__("./src/app/smellprofile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import data service and data class

var SmellprofileNewComponent = /** @class */ (function () {
    function SmellprofileNewComponent(smellprofileService) {
        this.smellprofileService = smellprofileService;
        this.newSmellEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.newSmell = {};
    }
    SmellprofileNewComponent.prototype.ngOnInit = function () { };
    // Load map after DOM renders
    SmellprofileNewComponent.prototype.ngAfterViewInit = function () {
        this.refreshMap();
    };
    // Use data service to create new smell
    SmellprofileNewComponent.prototype.createSmell = function (newSmellForm) {
        var _this = this;
        var data = {
            name: this.newSmell.name,
            type: this.newSmell.type,
            desc: this.newSmell.desc,
            lat: this.newSmell.lat,
            lon: this.newSmell.long
        };
        console.log("Data", data);
        this.smellprofileService.createSmell(data)
            .subscribe(function (smell) {
            console.log("Smell", smell);
            _this.newSmellEvent.emit();
            newSmellForm.reset();
        });
    };
    // Create/refresh the map
    SmellprofileNewComponent.prototype.refreshMap = function () {
        var _this = this;
        console.log("INIT!");
        // Rough center point for Richmond, VA
        var rva = {
            lat: 37.536954951447285,
            lng: -77.43867874145508
        };
        // Define a GMap
        this.map = new google.maps.Map(this.detailsGmapElement.nativeElement, {
            zoom: 12,
            center: rva
        });
        google.maps.event.addListener(this.map, 'click', function (event) {
            _this.newSmell.lat = event.latLng.lat();
            _this.newSmell.long = event.latLng.lng();
            if (_this.marker) {
                _this.marker.setMap(null);
            }
            _this.marker = new google.maps.Marker({
                position: {
                    lat: _this.newSmell.lat,
                    lng: _this.newSmell.long
                },
                map: _this.map
            });
            _this.map.setCenter({
                lat: _this.newSmell.lat,
                lng: _this.newSmell.long
            });
        });
    };
    // Map click event for setting lat/long for input
    SmellprofileNewComponent.prototype.mapClick = function (event) {
        this.newSmell.lat = event.latLng.lat();
        this.newSmell.long = event.latLng.lng();
        var marker = new google.maps.Marker({
            position: {
                lat: this.newSmell.lat,
                lng: this.newSmell.long
            },
            map: this.map
        });
        this.map.setCenter({
            lat: this.newSmell.lat,
            lng: this.newSmell.long
        });
        console.log(this.newSmell.lat, this.newSmell.long);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('Creategmap'),
        __metadata("design:type", Object)
    ], SmellprofileNewComponent.prototype, "detailsGmapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SmellprofileNewComponent.prototype, "newSmellEvent", void 0);
    SmellprofileNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-smellprofile-new',
            template: __webpack_require__("./src/app/smellprofile-new/smellprofile-new.component.html"),
            styles: [__webpack_require__("./src/app/smellprofile-new/smellprofile-new.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__smellprofile_service__["a" /* SmellprofileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__smellprofile_service__["a" /* SmellprofileService */]])
    ], SmellprofileNewComponent);
    return SmellprofileNewComponent;
}());



/***/ }),

/***/ "./src/app/smellprofile-update/smellprofile-update.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/smellprofile-update/smellprofile-update.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Update -->\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <h1 class=\"mt-5 starter\">Update Data</h1>\n    <div id=\"page-wrapper\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"container\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-lg-12 page-wrapper\">\n                    <form #newSmellForm=\"ngForm\" (ngSubmit)=\"updateSmell(newSmellForm)\">\n                      <div class=\"form-group\">\n                        <label>Name</label>\n                        <input required ([ngModel])=\"smellprofile.name\" #name placeholder=\"Enter text\" name=\"name\" class=\"form-control\" value=\"{{ smellprofile.name }}\" />\n                      </div>\n\n                      <!-- Map -->\n                      <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                          <div class=\"panel panel-default\">\n                            <div class=\"panel-body\">\n                              <div #Updategmap style=\"height: 300px;\"></div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n\n                      <div class=\"col-lg-6\">\n                        <div class=\"form-group\">\n                          <label>Longitude</label>\n                          <input required ([ngModel])=\"smellprofile.long\" type=\"number\" #long placeholder=\"Enter text\" name=\"lon\" class=\"form-control\" value=\"{{ smellprofile.long }}\"\n                          />\n                        </div>\n                      </div>\n                      <div class=\"col-lg-6\">\n                        <div class=\"form-group\">\n                          <label>Latitude</label>\n                          <input required ([ngModel])=\"smellprofile.lat\" type=\"number\" #lat placeholder=\"Enter text\" name=\"lat\" class=\"form-control\" value=\"{{ smellprofile.lat }}\"\n                          />\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label>Type</label>\n                        <select required ([ngModel])=\"smellprofile.type\" #type name=\"type\" class=\"form-control\">\n                          <option [selected]=\"smellprofile.type == 'Good'\">Good</option>\n                          <option [selected]=\"smellprofile.type == 'Neutral'\">Neutral</option>\n                          <option [selected]=\"smellprofile.type == 'Bad'\">Bad</option>\n                        </select>\n                      </div>\n                      <div class=\"form-group\">\n                        <label>Description</label>\n                        <textarea required ([ngModel])=\"smellprofile.desc\" #desc rows=\"3\" name=\"desc\" class=\"form-control\" value=\"{{ smellprofile.desc }}\">{{ smellprofile.desc }}</textarea>\n                      </div>\n                      <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!newSmellForm.valid\">Submit</button>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<br />"

/***/ }),

/***/ "./src/app/smellprofile-update/smellprofile-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmellprofileUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smellprofile_service__ = __webpack_require__("./src/app/smellprofile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import data service and data class

var SmellprofileUpdateComponent = /** @class */ (function () {
    function SmellprofileUpdateComponent(route, smellprofileService, router) {
        this.route = route;
        this.smellprofileService = smellprofileService;
        this.router = router;
        this.updateProfile = {};
    }
    SmellprofileUpdateComponent.prototype.ngOnInit = function () {
        this.getSmell();
    };
    // Draw map after rendering DOM
    SmellprofileUpdateComponent.prototype.ngAfterViewInit = function () {
        this.updateMap();
    };
    // Get a specific smell
    SmellprofileUpdateComponent.prototype.getSmell = function () {
        var _this = this;
        var param = this.route.snapshot.paramMap.get('id');
        this.smellprofileService.getSmell(param)
            .subscribe(function (smellprofile) {
            _this.smellprofile = smellprofile[0];
        });
    };
    // Use data service to update entry
    SmellprofileUpdateComponent.prototype.updateSmell = function (form) {
        // console.log(data);
        this.updateProfile.name = this.smellprofile.name;
        this.updateProfile.type = this.smellprofile.type;
        this.updateProfile.desc = this.smellprofile.desc;
        this.updateProfile.lat = this.smellprofile.lat;
        this.updateProfile.lon = this.smellprofile.long;
        console.log(this.updateProfile);
        this.smellprofileService.updateSmell(this.smellprofile._id, this.updateProfile)
            .subscribe(function (result) {
            location.reload();
        });
    };
    // Draw/refresh the map
    SmellprofileUpdateComponent.prototype.updateMap = function () {
        var _this = this;
        console.log("INIT!");
        // Rough center point for Richmond, VA
        var rva = {
            lat: 37.536954951447285,
            lng: -77.43867874145508
        };
        // Define a GMap
        this.uMap = new google.maps.Map(this.updateGmapElement.nativeElement, {
            zoom: 12,
            center: rva
        });
        this.updateMarker = new google.maps.Marker({
            position: {
                lat: this.smellprofile.lat,
                lng: this.smellprofile.long
            },
            map: this.uMap,
            title: this.smellprofile.desc
        });
        this.uMap.setCenter({
            lat: this.smellprofile.lat,
            lng: this.smellprofile.long
        });
        google.maps.event.addListener(this.uMap, 'click', function (event) {
            _this.smellprofile.lat = event.latLng.lat();
            _this.smellprofile.long = event.latLng.lng();
            if (_this.updateMarker) {
                _this.updateMarker.setMap(null);
            }
            _this.updateMarker = new google.maps.Marker({
                position: {
                    lat: _this.smellprofile.lat,
                    lng: _this.smellprofile.long
                },
                map: _this.uMap
            });
            _this.uMap.setCenter({
                lat: _this.smellprofile.lat,
                lng: _this.smellprofile.long
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('Updategmap'),
        __metadata("design:type", Object)
    ], SmellprofileUpdateComponent.prototype, "updateGmapElement", void 0);
    SmellprofileUpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-smellprofile-update',
            template: __webpack_require__("./src/app/smellprofile-update/smellprofile-update.component.html"),
            styles: [__webpack_require__("./src/app/smellprofile-update/smellprofile-update.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__smellprofile_service__["a" /* SmellprofileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__smellprofile_service__["a" /* SmellprofileService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SmellprofileUpdateComponent);
    return SmellprofileUpdateComponent;
}());



/***/ }),

/***/ "./src/app/smellprofile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmellprofileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SmellprofileService = /** @class */ (function () {
    function SmellprofileService(http) {
        this.http = http;
        this.apiurl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiurl;
    }
    // List all smells
    SmellprofileService.prototype.listSmells = function () {
        return this.http.get(this.apiurl);
    };
    // Get a single smell
    SmellprofileService.prototype.getSmell = function (id) {
        return this.http.get(this.apiurl + id);
    };
    // Create
    SmellprofileService.prototype.createSmell = function (smell) {
        return this.http.post(this.apiurl, smell);
    };
    // Update
    SmellprofileService.prototype.updateSmell = function (id, data) {
        return this.http.put(this.apiurl + id, data);
    };
    // Delete
    SmellprofileService.prototype.deleteSmell = function (id) {
        return this.http.delete(this.apiurl + id);
    };
    SmellprofileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SmellprofileService);
    return SmellprofileService;
}());



/***/ }),

/***/ "./src/app/smellprofile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Smellprofile; });
// Define a schema for smellprofiles
var Smellprofile = /** @class */ (function () {
    function Smellprofile() {
    }
    return Smellprofile;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiurl: 'http://67.205.177.107:8086/api/smellmap/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map