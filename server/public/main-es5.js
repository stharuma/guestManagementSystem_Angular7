(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<br/><br/><br/>\n<router-outlet></router-outlet>\n<br/><br/><br/>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/guest/guest-add.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/guest/guest-add.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" *ngIf=\"dataLoading\"></div>\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  An error occured. Here is the error : {{ errorMessage }}.\n</div>\n<button type=\"button\" routerLink=\"/guest-search\" class=\"btn btn-primary\">Search</button>\n&nbsp;\n<button type=\"button\" routerLink=\"/guest-result\" class=\"btn btn-primary\">Top Results</button>\n<br /><br />\n<div *ngIf=\"!savedChanges else savedForm\">\n  <h6>Add New Guest</h6>\n  <form class=\"form-signin\" #addForm=\"ngForm\" (ngSubmit)=\"setGuest(addForm.value)\">\n    <input type=\"text\" id=\"inputName\" name=\"inputName\" class=\"form-control\" placeholder=\"Name\" #inputName=\"ngModel\"\n      autofocus required ngModel minlength=\"3\" maxlength=\"50\">\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"inputName.invalid && (inputName.dirty || inputName.touched)\">\n      Please enter a valid Name between 3 and 50 characters.\n    </div>\n    <input type=\"text\" id=\"inputAddress\" name=\"inputAddress\" class=\"form-control\" placeholder=\"Address\"\n      #inputAddress=\"ngModel\" autofocus required ngModel minlength=\"3\" maxlength=\"150\">\n    <div class=\"alert alert-danger\" role=\"alert\"\n      *ngIf=\"inputAddress.invalid && (inputAddress.dirty || inputAddress.touched)\">\n      Please enter a valid Address between 3 and 150 characters.\n    </div>\n    <input type=\"email\" id=\"inputEmail\" name=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\"\n      #inputEmail=\"ngModel\" email autofocus required ngModel>\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"inputEmail.invalid && (inputEmail.dirty || inputEmail.touched)\">\n      Please enter a valid email.\n    </div>\n    <input type=\"text\" id=\"inputPhone\" name=\"inputPhone\" class=\"form-control\" placeholder=\"Phone\" #inputPhone=\"ngModel\"\n      pattern=\"^\\d*\\.?\\d+$\" minlength=\"10\" autofocus required ngModel>\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"inputPhone.invalid && (inputPhone.dirty || inputPhone.touched)\">\n      Please enter a valid phone number.\n    </div>\n    <input type=\"text\" id=\"inputComments\" name=\"inputComments\" class=\"form-control\" placeholder=\"Comments\"\n      #inputComments=\"ngModel\" autofocus required ngModel>\n    <div class=\"alert alert-danger\" role=\"alert\"\n      *ngIf=\"inputComments.invalid && (inputComments.dirty || inputComments.touched)\">\n      Please enter valid comments.\n    </div>\n    <div *ngIf=\"!addForm.valid else showSubmitButton\">\n      <button class=\"btn btn-lg btn-light btn-block\" disabled=\"\" type=\"button\">Create New Guest</button>\n    </div>\n    <ng-template #showSubmitButton>\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Create New Guest</button>\n    </ng-template>\n  </form>\n</div>\n<ng-template #savedForm>\n  <br /><br />\n  <div class=\"alert alert-danger\" role=\"alert\">\n    Your changes are saved.\n  </div>\n  <br /><br />\n  <button routerLink=\"/guest-result\" class=\"btn btn-lg btn-primary\" type=\"button\">Back to Results</button>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/guest/guest-edit.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/guest/guest-edit.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" *ngIf=\"dataLoading\"></div>\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  An error occured. Here is the error : {{ errorMessage }}.\n</div>\n<button type=\"button\" routerLink=\"/guest-search\" class=\"btn btn-primary\">Search</button>\n&nbsp;\n<button type=\"button\" routerLink=\"/guest-result\" class=\"btn btn-primary\">Top Results</button>\n<br /><br />\n<div *ngIf=\"!savedChanges else savedForm\">\n  <h6>Update Guest</h6>\n  <form class=\"form-signin\" #editForm=\"ngForm\" (ngSubmit)=\"setGuest(editForm.value)\">\n    <input type=\"text\" id=\"inputName\" name=\"inputName\" class=\"form-control\" placeholder=\"Name\" #inputName=\"ngModel\"\n      autofocus required ngModel minlength=\"3\" maxlength=\"50\" [ngModel]=\"docData?.inputName\">\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"inputName.invalid && (inputName.dirty || inputName.touched)\">\n      Please enter a valid Name between 3 and 50 characters.\n    </div>\n    <input type=\"text\" id=\"inputAddress\" name=\"inputAddress\" class=\"form-control\" placeholder=\"Address\"\n      #inputAddress=\"ngModel\" autofocus required ngModel minlength=\"3\" maxlength=\"150\"\n      [ngModel]=\"docData?.inputAddress\">\n    <div class=\"alert alert-danger\" role=\"alert\"\n      *ngIf=\"inputAddress.invalid && (inputAddress.dirty || inputAddress.touched)\">\n      Please enter a valid Address between 3 and 150 characters.\n    </div>\n    <input type=\"email\" id=\"inputEmail\" name=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\"\n      #inputEmail=\"ngModel\" email autofocus required ngModel [ngModel]=\"docData?.inputEmail\">\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"inputEmail.invalid && (inputEmail.dirty || inputEmail.touched)\">\n      Please enter a valid email.\n    </div>\n    <input type=\"text\" id=\"inputPhone\" name=\"inputPhone\" class=\"form-control\" placeholder=\"Phone\" #inputPhone=\"ngModel\"\n      pattern=\"^\\d*\\.?\\d+$\" minlength=\"10\" autofocus required ngModel [ngModel]=\"docData?.inputPhone\">\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"inputPhone.invalid && (inputPhone.dirty || inputPhone.touched)\">\n      Please enter a valid phone number.\n    </div>\n    <input type=\"text\" id=\"inputComments\" name=\"inputComments\" class=\"form-control\" placeholder=\"Comments\"\n      #inputComments=\"ngModel\" autofocus required ngModel [ngModel]=\"docData?.inputComments\">\n    <div class=\"alert alert-danger\" role=\"alert\"\n      *ngIf=\"inputComments.invalid && (inputComments.dirty || inputComments.touched)\">\n      Please enter valid comments.\n    </div>\n    <div *ngIf=\"!editForm.valid else showSubmitButton\">\n      <button class=\"btn btn-lg btn-light btn-block\" disabled=\"\" type=\"button\">Update Guest</button>\n    </div>\n    <ng-template #showSubmitButton>\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Update Guest</button><br />\n      <button type=\"button\" (click)=\"deleteGuest()\" class=\"btn btn-info\">Delete Guest</button>\n    </ng-template>\n  </form>\n</div>\n<ng-template #savedForm>\n  <br /><br />\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"!error\">\n    Your changes are saved.\n  </div>\n  <br /><br />\n  <button routerLink=\"/guest-result\" class=\"btn btn-lg btn-primary\" type=\"button\">Back to Results</button>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/guest/guest-result.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/guest/guest-result.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" *ngIf=\"dataLoading\"></div>\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  An error occured. Here is the error : {{ errorMessage }}.\n</div>\n<button type=\"button\" routerLink=\"/guest-search\" class=\"btn btn-primary\">Search</button>\n&nbsp;\n<button type=\"button\" routerLink=\"/guest-add\" class=\"btn btn-primary\">Add New Guest</button>\n<br /><br />\n<div class=\"alert alert-info\" role=\"alert\">\n  Check-In with Guest !\n</div>\n<br /><br />\n<div *ngFor=\"let item of docData\">\n  Name: {{ item.inputName }} <br />\n  EMail: {{ item.inputEmail }} <br />\n  Address: {{ item.inputAddress }} <br />\n  Phone: {{ item.inputPhone }} <br />\n  Picture: {{ item.pic }} <br />\n  <button type=\"button\" routerLink=\"/guest-edit/{{item._id}}\" class=\"btn btn-info\">Edit Guest</button>\n  &nbsp;\n  <!-- <button type=\"button\" routerLink=\"/register-result/{{item._id}}\" class=\"btn btn-primary\">Check-In</button>-->\n  <button type=\"button\" (click)=\"checkIn(item._id,item.inputName)\" class=\"btn btn-primary\">Check-In</button>\n  <br /><br />\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/guest/guest-search.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/guest/guest-search.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" routerLink=\"/guest-add\" class=\"btn btn-primary\">Add New</button>\n&nbsp;\n<button type=\"button\" routerLink=\"/guest-result\" class=\"btn btn-primary\">Top Results</button>\n<br/><br/>\n<h6>Search Guest</h6>\n<form #srchForm=\"ngForm\" class=\"form-signin\" (ngSubmit)=\"getGuests(srchForm.value)\">\n    <input type=\"text\" id=\"inputName\" name=\"inputName\" ngModel class=\"form-control\" placeholder=\"Name\" autofocus>\n    <input type=\"text\" id=\"inputAddress\" name=\"inputAddress\" ngModel class=\"form-control\" placeholder=\"Address\" autofocus>\n    <input type=\"email\" id=\"inputEmail\" name=\"inputEmail\" ngModel class=\"form-control\" placeholder=\"Email address\" autofocus>\n    <input type=\"text\" id=\"inputPhone\" name=\"inputPhone\" ngModel class=\"form-control\" placeholder=\"Phone\" autofocus>\n   <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Search Guest</button>\n  </form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/host/host-add.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/host/host-add.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" *ngIf=\"dataLoading\"></div>\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  An error occured. Here is the error : {{ errorMessage }}.\n</div>\n<button type=\"button\" routerLink=\"/host-search\" class=\"btn btn-primary\">Search</button>\n&nbsp;\n<button type=\"button\" routerLink=\"/host-result\" class=\"btn btn-primary\">Top Results</button>\n<br /><br />\n<div *ngIf=\"!savedChanges else savedForm\">\n  <h6>Add New Host</h6>\n  <form class=\"form-signin\" #addForm=\"ngForm\" (ngSubmit)=\"setHost(addForm.value)\">\n    <input type=\"text\" id=\"inputName\" name=\"inputName\" class=\"form-control\" placeholder=\"Name\" #inputName=\"ngModel\"\n      autofocus required ngModel minlength=\"3\" maxlength=\"50\">\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"inputName.invalid && (inputName.dirty || inputName.touched)\">\n      Please enter a valid Name between 3 and 50 characters.\n    </div>\n    <input type=\"text\" id=\"inputAddress\" name=\"inputAddress\" class=\"form-control\" placeholder=\"Address\"\n      #inputAddress=\"ngModel\" autofocus required ngModel minlength=\"3\" maxlength=\"150\">\n    <div class=\"alert alert-danger\" role=\"alert\"\n      *ngIf=\"inputAddress.invalid && (inputAddress.dirty || inputAddress.touched)\">\n      Please enter a valid Address between 3 and 150 characters.\n    </div>\n    <input type=\"email\" id=\"inputEmail\" name=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\"\n      #inputEmail=\"ngModel\" email autofocus required ngModel>\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"inputEmail.invalid && (inputEmail.dirty || inputEmail.touched)\">\n      Please enter a valid email.\n    </div>\n    <input type=\"text\" id=\"inputPhone\" name=\"inputPhone\" class=\"form-control\" placeholder=\"Phone\" #inputPhone=\"ngModel\"\n      pattern=\"^\\d*\\.?\\d+$\" minlength=\"10\" autofocus required ngModel>\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"inputPhone.invalid && (inputPhone.dirty || inputPhone.touched)\">\n      Please enter a valid phone number.\n    </div>\n    <input type=\"text\" id=\"inputComments\" name=\"inputComments\" class=\"form-control\" placeholder=\"Comments\"\n      #inputComments=\"ngModel\" autofocus required ngModel>\n    <div class=\"alert alert-danger\" role=\"alert\"\n      *ngIf=\"inputComments.invalid && (inputComments.dirty || inputComments.touched)\">\n      Please enter valid comments.\n    </div>\n    <div *ngIf=\"!addForm.valid else showSubmitButton\">\n      <button class=\"btn btn-lg btn-light btn-block\" disabled=\"\" type=\"button\">Create New Host</button>\n    </div>\n    <ng-template #showSubmitButton>\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Create New Host</button>\n    </ng-template>\n  </form>\n</div>\n<ng-template #savedForm>\n  <br /><br />\n  <div class=\"alert alert-danger\" role=\"alert\">\n    Your changes are saved.\n  </div>\n  <br /><br />\n  <button routerLink=\"/host-result\" class=\"btn btn-lg btn-primary\" type=\"button\">Back to Results</button>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/host/host-edit.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/host/host-edit.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" *ngIf=\"dataLoading\"></div>\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  An error occured. Here is the error : {{ errorMessage }}.\n</div>\n<button type=\"button\" routerLink=\"/host-search\" class=\"btn btn-primary\">Search</button>\n&nbsp;\n<button type=\"button\" routerLink=\"/host-result\" class=\"btn btn-primary\">Top Results</button>\n<br/><br/>\n<div *ngIf=\"!savedChanges else savedForm\">\n  <h6>Update Host</h6>\n  <form class=\"form-signin\" #editForm=\"ngForm\" (ngSubmit)=\"setHost(editForm.value)\">\n      <input type=\"text\" id=\"inputName\" name=\"inputName\" class=\"form-control\" placeholder=\"Name\"\n      #inputName=\"ngModel\" autofocus required ngModel minlength=\"3\" maxlength=\"50\" [ngModel]=\"docData?.inputName\">\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"inputName.invalid && (inputName.dirty || inputName.touched)\">\n          Please enter a valid Name between 3 and 50 characters.\n        </div>\n      <input type=\"text\" id=\"inputAddress\" name=\"inputAddress\" class=\"form-control\" placeholder=\"Address\"\n      #inputAddress=\"ngModel\" autofocus required ngModel minlength=\"3\" maxlength=\"150\" [ngModel]=\"docData?.inputAddress\">\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"inputAddress.invalid && (inputAddress.dirty || inputAddress.touched)\">\n          Please enter a valid Address between 3 and 150 characters.\n        </div>\n      <input type=\"email\" id=\"inputEmail\" name=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\"\n      #inputEmail=\"ngModel\" email autofocus required ngModel [ngModel]=\"docData?.inputEmail\">\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"inputEmail.invalid && (inputEmail.dirty || inputEmail.touched)\">\n          Please enter a valid email.\n        </div>\n      <input type=\"text\" id=\"inputPhone\" name=\"inputPhone\" class=\"form-control\" placeholder=\"Phone\"\n      #inputPhone=\"ngModel\" pattern=\"^\\d*\\.?\\d+$\" minlength=\"10\" autofocus required ngModel [ngModel]=\"docData?.inputPhone\">\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"inputPhone.invalid && (inputPhone.dirty || inputPhone.touched)\">\n          Please enter a valid phone number.\n        </div>\n      <input type=\"text\" id=\"inputComments\" name=\"inputComments\" class=\"form-control\" placeholder=\"Comments\"\n      #inputComments=\"ngModel\" autofocus required ngModel [ngModel]=\"docData?.inputComments\">\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"inputComments.invalid && (inputComments.dirty || inputComments.touched)\">\n          Please enter valid comments.\n        </div>\n        <div *ngIf=\"!editForm.valid else showSubmitButton\">\n            <button class=\"btn btn-lg btn-light btn-block\" disabled=\"\" type=\"button\">Update Host</button>\n          </div>\n          <ng-template #showSubmitButton>\n              <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Update Host</button><br/>\n              <button type=\"button\" (click)=\"deleteHost()\" class=\"btn btn-info\">Delete Host</button>\n          </ng-template>\n    </form>\n</div>\n<ng-template #savedForm>\n    <br/><br/>\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"!error\">\n        Your changes are saved.\n      </div>\n    <br/><br/>\n  <button routerLink=\"/host-result\" class=\"btn btn-lg btn-primary\" type=\"button\">Back to Results</button>\n</ng-template>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/host/host-result.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/host/host-result.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" *ngIf=\"dataLoading\"></div>\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  An error occured. Here is the error : {{ errorMessage }}.\n</div>\n<button type=\"button\" routerLink=\"/host-search\" class=\"btn btn-primary\">Search</button>\n&nbsp;\n<button type=\"button\" routerLink=\"/host-add\" class=\"btn btn-primary\">Add New Host</button>\n<br /><br />\n<div class=\"alert alert-info\" role=\"alert\">\n  Check-In with Host !\n</div>\n<br /><br />\n<div *ngFor=\"let item of docData\">\n  Name: {{ item.inputName }} <br />\n  EMail: {{ item.inputEmail }} <br />\n  Address: {{ item.inputAddress }} <br />\n  Phone: {{ item.inputPhone }} <br />\n  Picture: {{ item.pic }} <br />\n  <button type=\"button\" routerLink=\"/host-edit/{{item._id}}\" class=\"btn btn-info\">Edit Host</button>\n  &nbsp;\n  <!-- <button type=\"button\" routerLink=\"/register-result/{{item._id}}\" class=\"btn btn-primary\">Check-In</button>-->\n  <button type=\"button\" (click)=\"checkIn(item._id,item.inputName)\" class=\"btn btn-primary\">Check-In</button>\n  <br /><br />\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/host/host-search.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/host/host-search.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" routerLink=\"/host-add\" class=\"btn btn-primary\">Add New</button>\n&nbsp;\n<button type=\"button\" routerLink=\"/host-result\" class=\"btn btn-primary\">Top Results</button>\n<br/><br/>\n<h6>Search Host</h6>\n<form #srchForm=\"ngForm\" class=\"form-signin\" (ngSubmit)=\"getHosts(srchForm.value)\">\n    <input type=\"text\" id=\"inputName\" name=\"inputName\" ngModel class=\"form-control\" placeholder=\"Name\" autofocus>\n    <input type=\"text\" id=\"inputAddress\" name=\"inputAddress\" ngModel class=\"form-control\" placeholder=\"Address\" autofocus>\n    <input type=\"email\" id=\"inputEmail\" name=\"inputEmail\" ngModel class=\"form-control\" placeholder=\"Email address\" autofocus>\n    <input type=\"text\" id=\"inputPhone\" name=\"inputPhone\" ngModel class=\"form-control\" placeholder=\"Phone\" autofocus>\n   <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Search Host</button>\n  </form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register-result.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register-result.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" *ngIf=\"dataLoading\"></div>\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  An error occured. Here is the error : {{ errorMessage }}.\n</div>\n<button type=\"button\" routerLink=\"/host-result\" class=\"btn btn-primary\">Back</button>\n<br /><br />\n<div class=\"alert alert-info\" role=\"alert\">\n    Check-In Information !\n  </div>\n<div *ngIf=\"!savedChanges else savedForm\">\n<div *ngIf=\"!showHistory else showHistoryDiv\">\n  <form #registerForm=\"ngForm\" class=\"form-signin\" (ngSubmit)=\"setRegister(registerForm.value)\">\n    <input type=\"hidden\" readonly=\"\" id=\"hostId\" name=\"hostId\" #hostId=\"ngModel\" required [ngModel]=\"checkInHostId\" class=\"form-control\" placeholder=\"Host ID\"\n      autofocus>\n    <input type=\"text\" readonly=\"\" id=\"hostName\" name=\"hostName\" #hostName=\"ngModel\" required [ngModel]=\"checkInHostName\" class=\"form-control\" placeholder=\"Host Name\"\n      autofocus>\n    <div *ngIf=\"checkInHostId\">\n      <button type=\"button\" (click)=\"getRegister('host');showHistory=!showHistory\" class=\"btn btn-primary\">View Host\n        History</button>\n    </div>\n    <input type=\"hidden\" readonly=\"\" id=\"guestId\" name=\"guestId\" required #guestId=\"ngModel\" [ngModel]=\"checkInGuestId\" class=\"form-control\" placeholder=\"Guest ID\"\n      autofocus>\n    <input type=\"text\" readonly=\"\" id=\"guestName\" name=\"guestName\" required #guestName=\"ngModel\" [ngModel]=\"checkInGuestName\" class=\"form-control\" placeholder=\"Guest Name\"\n      autofocus>\n    <div *ngIf=\"checkInGuestId\">\n      <button type=\"button\" (click)=\"getRegister('guest');showHistory=!showHistory\" class=\"btn btn-primary\">View Guest\n        History</button>\n    </div>\n    <input type=\"text\" readonly=\"\" id=\"checkInDTTM\" name=\"checkInDTTM\" required #checkInDTTM=\"ngModel\" [ngModel]=\"currentDttm\" class=\"form-control\"\n      placeholder=\"Check-In DTTM\" autofocus>\n      <input type=\"text\" id=\"purpose\" name=\"purpose\" ngModel class=\"form-control\"\n      placeholder=\"Purpose of Visit\" autofocus>\n    <div *ngIf=\"!registerForm.valid else showSubmitButton\">\n      <button disabled class=\"btn btn-lg btn-light btn-block\" type=\"submit\">Check-In</button>\n    </div>\n    <ng-template #showSubmitButton>\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Check-In</button>\n    </ng-template>\n    <button routerLink=\"/guest-result\" class=\"btn btn-lg btn-primary btn-block\" type=\"button\">Pick Visitor</button>\n  </form>\n  <br /><br />\n</div>\n\n<ng-template #showHistoryDiv>\n  <h6>Visitor Register History</h6>\n  <button type=\"button\" (click)=\"showHistory=!showHistory\" class=\"btn btn-primary\">Close History</button>\n  <br />\n  <ul>\n    <li *ngFor=\"let item of docData\">\n      Host: {{ item.hostName }}<br/>\n      Guest: {{ item.guestName }}<br/>\n      CheckIn: {{ item.checkInDTTM }}<br/>\n      Purpose: {{ item.purpose }}<br/>\n    </li>\n  </ul>\n</ng-template>\n</div>\n<ng-template #savedForm>\n    <br/><br/>\n    <div class=\"alert alert-danger\" role=\"alert\">\n        Your changes are saved.\n      </div>\n    <br/><br/>\n  <button routerLink=\"/login\" class=\"btn btn-lg btn-primary\" type=\"button\">new Guest Check-In</button>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/aboutus.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/aboutus.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"inner cover\">\n  <h1 class=\"cover-heading\">Visitor Management App</h1>\n  <span class=\"lead\">\n    An Electronic Visitor register App for storing Host & Guest Records, Picture Attendance with GPS Locations\n    <br /><br />\n    <h2>Objective</h2>\n    Store all visitor & host records electronically.<br />\n   </span>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"mastfoot mt-auto\">\n  <div class=\"inner\">\n    <p>&copy; <a href=\"https://github.com/stharuma\">Suresh Tharuma</a>, by <a href=\"\">@suresh Tharuma</a>.</p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"masthead mb-auto\">\n  <div class=\"inner\">\n    <nav class=\"nav nav-masthead justify-content-center\">\n      <img width=\"30\" height=\"30\" src=\"assets/icons/favicon.ico\">&nbsp;&nbsp;&nbsp;\n      <a class=\"nav-link\" routerLink=\"/aboutus\">Aboutus</a>\n      <a class=\"nav-link\" routerLink=\"/login\">Settings</a>\n    </nav>\n  </div>\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/login.component.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/login.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" *ngIf=\"dataLoading\"></div>\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  An error occured. Here is the error : {{ errorMessage }}.\n</div>\n<div *ngIf=\"!savedChanges else logoutForm\">\n  <form class=\"form-signin\" #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm.value)\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n    <input type=\"email\" id=\"inputEmail\" name=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" autofocus\n      #inputEmail=\"ngModel\" autofocus required email ngModel>\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"inputEmail.invalid && (inputEmail.dirty || inputEmail.touched)\">\n      Please enter a valid email.\n    </div>\n    <input type=\"password\" id=\"inputPassword\" name=\"inputPassword\" class=\"form-control\" placeholder=\"Password\"\n      #inputPassword=\"ngModel\" required minlength=\"3\" maxlength=\"20\" ngModel>\n    <div class=\"alert alert-danger\" role=\"alert\"\n      *ngIf=\"inputPassword.invalid && (inputPassword.dirty || inputPassword.touched)\">\n      Please enter a valid password between 3 to 20 chars.\n    </div>\n    <div *ngIf=\"!loginForm.valid else showSubmitButton\">\n      <button class=\"btn btn-lg btn-light btn-block\" disabled=\"\" type=\"submit\">Log in</button>\n    </div>\n    <ng-template #showSubmitButton>\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Log in</button>\n    </ng-template>\n    <br />\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" routerLink=\"/signup\">Create New Account</button>\n  </form>\n</div>\n<ng-template #logoutForm>\n  <button (click)=\"logout()\" class=\"btn btn-lg btn-primary\" type=\"button\">Logout</button>\n  <br /><br />\n  <h1 class=\"h3 mb-3 font-weight-normal\">Vistior Register</h1>\n  <button routerLink=\"/host-result\" class=\"btn btn-lg btn-primary btn-block\" type=\"button\">Guest Check In</button>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" *ngIf=\"dataLoading\"></div>\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  An error occured. Here is the error : {{ errorMessage }}.\n</div>\n<div *ngIf=\"savedChanges else showForm\">\n  New Account is created. Please login.\n  <button class=\"btn btn-lg btn-primary btn-block\" routerLink=\"/login\" type=\"button\">Login</button>\n</div>\n<ng-template #showForm>\n  <form class=\"form-signin\" #newUserForm=\"ngForm\" (ngSubmit)=\"setUser(newUserForm.value)\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Create Account</h1>\n    <input type=\"email\" name=\"inputEmail\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\"\n      #inputEmail=\"ngModel\" autofocus required email ngModel>\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"inputEmail.invalid && (inputEmail.dirty || inputEmail.touched)\">\n      Please enter a valid email.\n    </div>\n    <input type=\"password\" name=\"inputPassword\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\"\n      #inputPassword=\"ngModel\" required minlength=\"3\" maxlength=\"20\" ngModel>\n    <div class=\"alert alert-danger\" role=\"alert\"\n      *ngIf=\"inputPassword.invalid && (inputPassword.dirty || inputPassword.touched)\">\n      Please enter a valid password between 3 to 20 chars.\n    </div>\n    <div *ngIf=\"!newUserForm.valid else showSubmitButton\">\n      <button class=\"btn btn-lg btn-light btn-block\" disabled type=\"submit\">Create New Account</button>\n    </div>\n    <ng-template #showSubmitButton>\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Create New Account</button>\n    </ng-template>\n    <br />\n    <button class=\"btn btn-lg btn-primary btn-block\" routerLink=\"/login\" type=\"submit\">Log in</button>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/login.component */ "./src/app/shared/login.component.ts");
/* harmony import */ var _shared_aboutus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/aboutus.component */ "./src/app/shared/aboutus.component.ts");
/* harmony import */ var _shared_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/signup.component */ "./src/app/shared/signup.component.ts");
/* harmony import */ var _host_host_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./host/host-add.component */ "./src/app/host/host-add.component.ts");
/* harmony import */ var _host_host_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./host/host-edit.component */ "./src/app/host/host-edit.component.ts");
/* harmony import */ var _host_host_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./host/host-search.component */ "./src/app/host/host-search.component.ts");
/* harmony import */ var _host_host_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./host/host-result.component */ "./src/app/host/host-result.component.ts");
/* harmony import */ var _guest_guest_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guest/guest-add.component */ "./src/app/guest/guest-add.component.ts");
/* harmony import */ var _guest_guest_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guest/guest-edit.component */ "./src/app/guest/guest-edit.component.ts");
/* harmony import */ var _guest_guest_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guest/guest-search.component */ "./src/app/guest/guest-search.component.ts");
/* harmony import */ var _guest_guest_result_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guest/guest-result.component */ "./src/app/guest/guest-result.component.ts");
/* harmony import */ var _register_register_result_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register-result.component */ "./src/app/register/register-result.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
















var routes = [
    { path: '', redirectTo: '/aboutus', pathMatch: 'full' },
    { path: 'aboutus', component: _shared_aboutus_component__WEBPACK_IMPORTED_MODULE_4__["AboutusComponent"] },
    { path: 'login', component: _shared_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _shared_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'host-add', component: _host_host_add_component__WEBPACK_IMPORTED_MODULE_6__["HostAddComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    { path: 'host-edit/:id', component: _host_host_edit_component__WEBPACK_IMPORTED_MODULE_7__["HostEditComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    { path: 'host-search', component: _host_host_search_component__WEBPACK_IMPORTED_MODULE_8__["HostSearchComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    { path: 'host-result', component: _host_host_result_component__WEBPACK_IMPORTED_MODULE_9__["HostResultComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    { path: 'host-result/:inputName:inputAddress:inputEmail:inputPhone', component: _host_host_result_component__WEBPACK_IMPORTED_MODULE_9__["HostResultComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    { path: 'guest-add', component: _guest_guest_add_component__WEBPACK_IMPORTED_MODULE_10__["GuestAddComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    { path: 'guest-edit/:id', component: _guest_guest_edit_component__WEBPACK_IMPORTED_MODULE_11__["GuestEditComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    { path: 'guest-search', component: _guest_guest_search_component__WEBPACK_IMPORTED_MODULE_12__["GuestSearchComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    { path: 'guest-result', component: _guest_guest_result_component__WEBPACK_IMPORTED_MODULE_13__["GuestResultComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    { path: 'guest-result/:inputName:inputAddress:inputEmail:inputPhone', component: _guest_guest_result_component__WEBPACK_IMPORTED_MODULE_13__["GuestResultComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    { path: 'register-result', component: _register_register_result_component__WEBPACK_IMPORTED_MODULE_14__["RegisterResultComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    { path: '**', redirectTo: '/aboutus', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client App';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/header.component */ "./src/app/shared/header.component.ts");
/* harmony import */ var _shared_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer.component */ "./src/app/shared/footer.component.ts");
/* harmony import */ var _shared_aboutus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/aboutus.component */ "./src/app/shared/aboutus.component.ts");
/* harmony import */ var _shared_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/login.component */ "./src/app/shared/login.component.ts");
/* harmony import */ var _shared_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/signup.component */ "./src/app/shared/signup.component.ts");
/* harmony import */ var _guest_guest_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guest/guest-add.component */ "./src/app/guest/guest-add.component.ts");
/* harmony import */ var _guest_guest_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guest/guest-edit.component */ "./src/app/guest/guest-edit.component.ts");
/* harmony import */ var _guest_guest_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guest/guest-search.component */ "./src/app/guest/guest-search.component.ts");
/* harmony import */ var _guest_guest_result_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guest/guest-result.component */ "./src/app/guest/guest-result.component.ts");
/* harmony import */ var _host_host_result_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./host/host-result.component */ "./src/app/host/host-result.component.ts");
/* harmony import */ var _host_host_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./host/host-search.component */ "./src/app/host/host-search.component.ts");
/* harmony import */ var _host_host_add_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./host/host-add.component */ "./src/app/host/host-add.component.ts");
/* harmony import */ var _host_host_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./host/host-edit.component */ "./src/app/host/host-edit.component.ts");
/* harmony import */ var _register_register_result_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./register/register-result.component */ "./src/app/register/register-result.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");



//import {ScrollDispatchModule} from '@angular/cdk/scrolling';



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _shared_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _shared_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _shared_aboutus_component__WEBPACK_IMPORTED_MODULE_9__["AboutusComponent"],
                _shared_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _shared_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                _guest_guest_add_component__WEBPACK_IMPORTED_MODULE_12__["GuestAddComponent"],
                _guest_guest_edit_component__WEBPACK_IMPORTED_MODULE_13__["GuestEditComponent"],
                _guest_guest_search_component__WEBPACK_IMPORTED_MODULE_14__["GuestSearchComponent"],
                _guest_guest_result_component__WEBPACK_IMPORTED_MODULE_15__["GuestResultComponent"],
                _host_host_result_component__WEBPACK_IMPORTED_MODULE_16__["HostResultComponent"],
                _host_host_search_component__WEBPACK_IMPORTED_MODULE_17__["HostSearchComponent"],
                _host_host_add_component__WEBPACK_IMPORTED_MODULE_18__["HostAddComponent"],
                _host_host_edit_component__WEBPACK_IMPORTED_MODULE_19__["HostEditComponent"],
                _register_register_result_component__WEBPACK_IMPORTED_MODULE_20__["RegisterResultComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                // ScrollDispatchModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guest/guest-add.component.css":
/*!***********************************************!*\
  !*** ./src/app/guest/guest-add.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1ZXN0L2d1ZXN0LWFkZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/guest/guest-add.component.ts":
/*!**********************************************!*\
  !*** ./src/app/guest/guest-add.component.ts ***!
  \**********************************************/
/*! exports provided: GuestAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestAddComponent", function() { return GuestAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");



var GuestAddComponent = /** @class */ (function () {
    function GuestAddComponent(_backendService) {
        this._backendService = _backendService;
        this.error = false;
        this.errorMessage = "Something went wrong with App";
        this.dataLoading = false;
        this.savedChanges = false;
    }
    GuestAddComponent.prototype.ngOnInit = function () { };
    GuestAddComponent.prototype.setGuest = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.setGuest(formData).subscribe(function (res) {
            if (res["errorCode"] > 0) {
                _this.error = false;
                _this.errorMessage = "";
                _this.dataLoading = false;
                _this.savedChanges = true;
            }
            else {
                _this.error = true;
                _this.errorMessage = res["errorMessage"];
                _this.dataLoading = false;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    GuestAddComponent.prototype.ngOnDestroy = function () {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    GuestAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-guest-add",
            template: __webpack_require__(/*! raw-loader!./guest-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/guest/guest-add.component.html"),
            styles: [__webpack_require__(/*! ./guest-add.component.css */ "./src/app/guest/guest-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]])
    ], GuestAddComponent);
    return GuestAddComponent;
}());



/***/ }),

/***/ "./src/app/guest/guest-edit.component.css":
/*!************************************************!*\
  !*** ./src/app/guest/guest-edit.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1ZXN0L2d1ZXN0LWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/guest/guest-edit.component.ts":
/*!***********************************************!*\
  !*** ./src/app/guest/guest-edit.component.ts ***!
  \***********************************************/
/*! exports provided: GuestEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestEditComponent", function() { return GuestEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var GuestEditComponent = /** @class */ (function () {
    function GuestEditComponent(_backendService, _route) {
        this._backendService = _backendService;
        this._route = _route;
        this.error = false;
        this.errorMessage = "Something went wrong with App";
        this.dataLoading = false;
        this.savedChanges = false;
        this.docId = "fakeId";
    }
    GuestEditComponent.prototype.ngOnInit = function () {
        this.docId = this._route.snapshot.paramMap.get("id");
        this.getData(this.docId);
    };
    GuestEditComponent.prototype.getData = function (docId) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.getGuest(docId).subscribe(function (res) {
            if (res["errorCode"] > 0) {
                _this.error = false;
                _this.errorMessage = "";
                _this.dataLoading = false;
                _this.docData = res["data"]["0"];
            }
            else {
                _this.error = true;
                _this.errorMessage = res["errorMessage"];
                _this.dataLoading = false;
                _this.savedChanges = true;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
            _this.savedChanges = true;
        }, function () {
            _this.dataLoading = false;
        });
    };
    GuestEditComponent.prototype.setGuest = function (formData) {
        var _this = this;
        this.dataLoading = true;
        if (this.docId) {
            formData._id = this.docId;
        }
        this.querySubscription = this._backendService
            .updateGuest(formData)
            .subscribe(function (res) {
            if (res["errorCode"] > 0) {
                _this.error = false;
                _this.errorMessage = "";
                _this.dataLoading = false;
                _this.savedChanges = true;
            }
            else {
                _this.error = true;
                _this.errorMessage = res["errorMessage"];
                _this.dataLoading = false;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    GuestEditComponent.prototype.deleteGuest = function () {
        var _this = this;
        if (confirm("Are you sure want to delete this record ?")) {
            this.dataLoading = true;
            var formData = { _id: this.docId };
            this.querySubscription = this._backendService
                .deleteGuest(formData)
                .subscribe(function (res) {
                if (res["errorCode"] > 0) {
                    _this.error = false;
                    _this.errorMessage = "";
                    _this.dataLoading = false;
                    _this.savedChanges = true;
                }
                else {
                    _this.error = true;
                    _this.errorMessage = res["errorMessage"];
                    _this.dataLoading = false;
                }
            }, function (error) {
                _this.error = true;
                _this.errorMessage = error.message;
                _this.dataLoading = false;
            }, function () {
                _this.dataLoading = false;
            });
        }
    };
    GuestEditComponent.prototype.ngOnDestroy = function () {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    GuestEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-guest-edit",
            template: __webpack_require__(/*! raw-loader!./guest-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/guest/guest-edit.component.html"),
            styles: [__webpack_require__(/*! ./guest-edit.component.css */ "./src/app/guest/guest-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], GuestEditComponent);
    return GuestEditComponent;
}());



/***/ }),

/***/ "./src/app/guest/guest-result.component.css":
/*!**************************************************!*\
  !*** ./src/app/guest/guest-result.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1ZXN0L2d1ZXN0LXJlc3VsdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/guest/guest-result.component.ts":
/*!*************************************************!*\
  !*** ./src/app/guest/guest-result.component.ts ***!
  \*************************************************/
/*! exports provided: GuestResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestResultComponent", function() { return GuestResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var GuestResultComponent = /** @class */ (function () {
    function GuestResultComponent(_backendService, _route, _router) {
        this._backendService = _backendService;
        this._route = _route;
        this._router = _router;
        this.error = false;
        this.errorMessage = 'Something went wrong with App';
        this.dataLoading = false;
        this.savedChanges = false;
    }
    GuestResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.queryParams.subscribe(function (res) {
            _this.docId = res;
            _this.getData();
        });
    };
    GuestResultComponent.prototype.getData = function () {
        var _this = this;
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getGuests(this.docId).subscribe(function (res) {
            if (res["errorCode"] > 0) {
                _this.error = false;
                _this.errorMessage = "";
                _this.dataLoading = false;
                _this.docData = res["data"];
            }
            else {
                _this.error = true;
                _this.errorMessage = res["errorMessage"];
                _this.dataLoading = false;
                _this.savedChanges = true;
            }
        }, function (error) {
            _this.error = true;
            // this.errorMessage = error.message;
            _this.dataLoading = false;
            _this.savedChanges = true;
        }, function () {
            _this.dataLoading = false;
        });
    };
    GuestResultComponent.prototype.checkIn = function (guestId, guestName) {
        this._backendService.setCheckIn('', '', guestId, guestName);
        this._router.navigate(['/register-result']);
    };
    GuestResultComponent.prototype.ngOnDestroy = function () {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    GuestResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guest-result',
            template: __webpack_require__(/*! raw-loader!./guest-result.component.html */ "./node_modules/raw-loader/index.js!./src/app/guest/guest-result.component.html"),
            styles: [__webpack_require__(/*! ./guest-result.component.css */ "./src/app/guest/guest-result.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GuestResultComponent);
    return GuestResultComponent;
}());



/***/ }),

/***/ "./src/app/guest/guest-search.component.css":
/*!**************************************************!*\
  !*** ./src/app/guest/guest-search.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1ZXN0L2d1ZXN0LXNlYXJjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/guest/guest-search.component.ts":
/*!*************************************************!*\
  !*** ./src/app/guest/guest-search.component.ts ***!
  \*************************************************/
/*! exports provided: GuestSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestSearchComponent", function() { return GuestSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var GuestSearchComponent = /** @class */ (function () {
    function GuestSearchComponent(_router) {
        this._router = _router;
    }
    GuestSearchComponent.prototype.ngOnInit = function () {
    };
    GuestSearchComponent.prototype.getGuests = function (formData) {
        this._router.navigate(['/guest-result'], { queryParams: { 'inputName': formData.inputName, 'inputAddress': formData.inputAddress, 'inputEmail': formData.inputEmail, 'inputPhone': formData.inputPhone } });
    };
    GuestSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guest-search',
            template: __webpack_require__(/*! raw-loader!./guest-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/guest/guest-search.component.html"),
            styles: [__webpack_require__(/*! ./guest-search.component.css */ "./src/app/guest/guest-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GuestSearchComponent);
    return GuestSearchComponent;
}());



/***/ }),

/***/ "./src/app/host/host-add.component.css":
/*!*********************************************!*\
  !*** ./src/app/host/host-add.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3QvaG9zdC1hZGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/host/host-add.component.ts":
/*!********************************************!*\
  !*** ./src/app/host/host-add.component.ts ***!
  \********************************************/
/*! exports provided: HostAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostAddComponent", function() { return HostAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");



var HostAddComponent = /** @class */ (function () {
    function HostAddComponent(_backendService) {
        this._backendService = _backendService;
        this.error = false;
        this.errorMessage = "Something went wrong with App";
        this.dataLoading = false;
        this.savedChanges = false;
    }
    HostAddComponent.prototype.ngOnInit = function () { };
    HostAddComponent.prototype.setHost = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.setHost(formData).subscribe(function (res) {
            if (res["errorCode"] > 0) {
                _this.error = false;
                _this.errorMessage = "";
                _this.dataLoading = false;
                _this.savedChanges = true;
            }
            else {
                _this.error = true;
                _this.errorMessage = res["errorMessage"];
                _this.dataLoading = false;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    HostAddComponent.prototype.ngOnDestroy = function () {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    HostAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-host-add",
            template: __webpack_require__(/*! raw-loader!./host-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/host/host-add.component.html"),
            styles: [__webpack_require__(/*! ./host-add.component.css */ "./src/app/host/host-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]])
    ], HostAddComponent);
    return HostAddComponent;
}());



/***/ }),

/***/ "./src/app/host/host-edit.component.css":
/*!**********************************************!*\
  !*** ./src/app/host/host-edit.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3QvaG9zdC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/host/host-edit.component.ts":
/*!*********************************************!*\
  !*** ./src/app/host/host-edit.component.ts ***!
  \*********************************************/
/*! exports provided: HostEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostEditComponent", function() { return HostEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HostEditComponent = /** @class */ (function () {
    function HostEditComponent(_backendService, _route) {
        this._backendService = _backendService;
        this._route = _route;
        this.error = false;
        this.errorMessage = 'Something went wrong with App';
        this.dataLoading = false;
        this.savedChanges = false;
        this.docId = 'fakeId';
    }
    HostEditComponent.prototype.ngOnInit = function () {
        this.docId = this._route.snapshot.paramMap.get('id');
        this.getData(this.docId);
    };
    HostEditComponent.prototype.getData = function (docId) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.getHost(docId).subscribe(function (res) {
            if (res["errorCode"] > 0) {
                _this.error = false;
                _this.errorMessage = "";
                _this.dataLoading = false;
                _this.docData = res["data"]["0"];
            }
            else {
                _this.error = true;
                _this.errorMessage = res["errorMessage"];
                _this.dataLoading = false;
                _this.savedChanges = true;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
            _this.savedChanges = true;
        }, function () {
            _this.dataLoading = false;
        });
    };
    HostEditComponent.prototype.setHost = function (formData) {
        var _this = this;
        this.dataLoading = true;
        if (this.docId) {
            formData._id = this.docId;
        }
        this.querySubscription = this._backendService.updateHost(formData).subscribe(function (res) {
            if (res["errorCode"] > 0) {
                _this.error = false;
                _this.errorMessage = "";
                _this.dataLoading = false;
                _this.savedChanges = true;
            }
            else {
                _this.error = true;
                _this.errorMessage = res["errorMessage"];
                _this.dataLoading = false;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    HostEditComponent.prototype.deleteHost = function () {
        var _this = this;
        if (confirm("Are you sure want to delete this record ?")) {
            this.dataLoading = true;
            var formData = { _id: this.docId };
            this.querySubscription = this._backendService.deleteHost(formData).subscribe(function (res) {
                if (res["errorCode"] > 0) {
                    _this.error = false;
                    _this.errorMessage = "";
                    _this.dataLoading = false;
                    _this.savedChanges = true;
                }
                else {
                    _this.error = true;
                    _this.errorMessage = res["errorMessage"];
                    _this.dataLoading = false;
                }
            }, function (error) {
                _this.error = true;
                _this.errorMessage = error.message;
                _this.dataLoading = false;
            }, function () {
                _this.dataLoading = false;
            });
        }
    };
    HostEditComponent.prototype.ngOnDestroy = function () {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    HostEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-host-edit',
            template: __webpack_require__(/*! raw-loader!./host-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/host/host-edit.component.html"),
            styles: [__webpack_require__(/*! ./host-edit.component.css */ "./src/app/host/host-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], HostEditComponent);
    return HostEditComponent;
}());



/***/ }),

/***/ "./src/app/host/host-result.component.css":
/*!************************************************!*\
  !*** ./src/app/host/host-result.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3QvaG9zdC1yZXN1bHQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/host/host-result.component.ts":
/*!***********************************************!*\
  !*** ./src/app/host/host-result.component.ts ***!
  \***********************************************/
/*! exports provided: HostResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostResultComponent", function() { return HostResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HostResultComponent = /** @class */ (function () {
    function HostResultComponent(_backendService, _route, _router) {
        this._backendService = _backendService;
        this._route = _route;
        this._router = _router;
        this.error = false;
        this.errorMessage = 'Something went wrong with App';
        this.dataLoading = false;
        this.savedChanges = false;
    }
    HostResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.queryParams.subscribe(function (res) {
            console.log("res", res);
            _this.docId = res;
            _this.getData();
        });
    };
    HostResultComponent.prototype.getData = function () {
        var _this = this;
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getHosts(this.docId).subscribe(function (res) {
            if (res["errorCode"] > 0) {
                _this.error = false;
                _this.errorMessage = "";
                _this.dataLoading = false;
                _this.docData = res["data"];
            }
            else {
                _this.error = true;
                _this.errorMessage = res["errorMessage"];
                _this.dataLoading = false;
                _this.savedChanges = true;
            }
        }, function (error) {
            _this.error = true;
            // this.errorMessage = error.message;
            _this.dataLoading = false;
            _this.savedChanges = true;
        }, function () {
            _this.dataLoading = false;
        });
    };
    HostResultComponent.prototype.checkIn = function (hostId, hostName) {
        this._backendService.setCheckIn(hostId, hostName, '', '');
        this._router.navigate(['/register-result']);
    };
    HostResultComponent.prototype.ngOnDestroy = function () {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    HostResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-host-result',
            template: __webpack_require__(/*! raw-loader!./host-result.component.html */ "./node_modules/raw-loader/index.js!./src/app/host/host-result.component.html"),
            styles: [__webpack_require__(/*! ./host-result.component.css */ "./src/app/host/host-result.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HostResultComponent);
    return HostResultComponent;
}());



/***/ }),

/***/ "./src/app/host/host-search.component.css":
/*!************************************************!*\
  !*** ./src/app/host/host-search.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3QvaG9zdC1zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/host/host-search.component.ts":
/*!***********************************************!*\
  !*** ./src/app/host/host-search.component.ts ***!
  \***********************************************/
/*! exports provided: HostSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostSearchComponent", function() { return HostSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HostSearchComponent = /** @class */ (function () {
    function HostSearchComponent(_router) {
        this._router = _router;
    }
    HostSearchComponent.prototype.ngOnInit = function () {
    };
    HostSearchComponent.prototype.getHosts = function (formData) {
        this._router.navigate(['/host-result'], { queryParams: { 'inputName': formData.inputName, 'inputAddress': formData.inputAddress, 'inputEmail': formData.inputEmail, 'inputPhone': formData.inputPhone } });
    };
    HostSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-host-search',
            template: __webpack_require__(/*! raw-loader!./host-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/host/host-search.component.html"),
            styles: [__webpack_require__(/*! ./host-search.component.css */ "./src/app/host/host-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HostSearchComponent);
    return HostSearchComponent;
}());



/***/ }),

/***/ "./src/app/register/register-result.component.css":
/*!********************************************************!*\
  !*** ./src/app/register/register-result.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLXJlc3VsdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/register/register-result.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/register/register-result.component.ts ***!
  \*******************************************************/
/*! exports provided: RegisterResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterResultComponent", function() { return RegisterResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");



var RegisterResultComponent = /** @class */ (function () {
    function RegisterResultComponent(_backendService) {
        this._backendService = _backendService;
        this.showHistory = false;
        this.error = false;
        this.errorMessage = 'Something went wrong with App';
        this.dataLoading = false;
        this.savedChanges = false;
    }
    RegisterResultComponent.prototype.ngOnInit = function () {
        this.currentDttm = new Date();
        this.getHost();
    };
    RegisterResultComponent.prototype.getHost = function () {
        this.checkInHostId = this._backendService.checkInHostId;
        this.checkInHostName = this._backendService.checkInHostName;
        this.checkInGuestId = this._backendService.checkInGuestId;
        this.checkInGuestName = this._backendService.checkInGuestName;
    };
    RegisterResultComponent.prototype.getRegister = function (filter) {
        var _this = this;
        var formData = { _id: "", srchType: filter };
        formData._id = (filter === "guest") ? this.checkInGuestId : this.checkInHostId;
        this.dataLoading = true;
        this.querySubscription = this._backendService.getRegister(formData).subscribe(function (res) {
            if (res["errorCode"] > 0) {
                _this.error = false;
                _this.errorMessage = "";
                _this.dataLoading = false;
                _this.docData = res["data"];
            }
            else {
                _this.error = true;
                _this.errorMessage = res["errorMessage"];
                _this.dataLoading = false;
                _this.savedChanges = true;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
            _this.savedChanges = true;
        }, function () {
            _this.dataLoading = false;
        });
    };
    RegisterResultComponent.prototype.setRegister = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.setRegister(formData).subscribe(function (res) {
            if (res["errorCode"] > 0) {
                _this.error = false;
                _this.errorMessage = "";
                _this.dataLoading = false;
                _this.savedChanges = true;
            }
            else {
                _this.error = true;
                _this.errorMessage = res["errorMessage"];
                _this.dataLoading = false;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    RegisterResultComponent.prototype.ngOnDestroy = function () {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    RegisterResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-result',
            template: __webpack_require__(/*! raw-loader!./register-result.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register-result.component.html"),
            styles: [__webpack_require__(/*! ./register-result.component.css */ "./src/app/register/register-result.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]])
    ], RegisterResultComponent);
    return RegisterResultComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(_router) {
        this._router = _router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (localStorage.getItem("token")) {
            return true;
        }
        else {
            this._router.navigate(["/login"]);
            return false;
        }
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/backend.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/backend.service.ts ***!
  \*********************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BackendService = /** @class */ (function () {
    function BackendService(_http) {
        this._http = _http;
    }
    BackendService.prototype.login = function (formData) {
        //  let fakeResponse_1 = {
        //    "errorCode" : 0,
        //    "errorMessage" : "User Id is invalid",
        //    "rowCount" : "30",
        //    "data": {
        //      "token" : "abcd"
        //    }
        //  };
        //  let fakeResponse_2 = {
        //   "errorCode" : 0,
        //   "errorMessage" : "Password not valid.",
        //   "rowCount" : "30",
        //   "data": {
        //     "token" : "abcd"
        //   }
        // };
        // let fakeResponse_3 = {
        //   "errorCode" : 1,
        //   "errorMessage" : "Authentication Successful.",
        //   "rowCount" : "30",
        //   "data": {
        //     "token" : "abcd"
        //   }
        // };
        //  return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_3)}, 2000)});
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': token }) };
        return this._http.post("api/login", formData, httpOptions);
    };
    BackendService.prototype.setUser = function (formData) {
        //   let fakeResponse_1 = {
        //     "errorCode" : 0,
        //     "errorMessage" : "User Id is taken",
        //     "rowCount" : "30",
        //     "data": {
        //       "token" : "abcd"
        //     }
        //   };
        //   let fakeResponse_2 = {
        //    "errorCode" : 0,
        //    "errorMessage" : "Password not strong enough.",
        //    "rowCount" : "30",
        //    "data": {
        //      "token" : "abcd"
        //    }
        //  };
        //  let fakeResponse_3 = {
        //    "errorCode" : 1,
        //    "errorMessage" : "Authentication Successful.",
        //    "rowCount" : "30",
        //    "data": {
        //      "token" : "abcd"
        //    }
        //  };
        //   return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_1)}, 2000)});
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': token }) };
        return this._http.post("api/signup", formData, httpOptions);
    };
    BackendService.prototype.setHost = function (formData) {
        //  let fakeResponse_1 = {
        //    "errorCode" : 0,
        //    "errorMessage" : "Host Already exists..",
        //    "rowCount" : "30",
        //    "data": {
        //      "token" : "abcd"
        //    }
        //  };
        //  let fakeResponse_2 = {
        //    "errorCode" : 1,
        //    "errorMessage" : "Host Created.",
        //    "rowCount" : "30",
        //    "data": {
        //      "token" : "abcd"
        //    }
        //  };
        //  return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_2)}, 2000)});
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': token }) };
        return this._http.post("api/sethost", formData, httpOptions);
    };
    BackendService.prototype.getHost = function (docId) {
        var formData = { _id: "" };
        formData._id = docId;
        // let fakeResponse_1 = {
        //   "errorCode" : 0,
        //   "errorMessage" : "ID Not found",
        //   "rowCount" : "30",
        //   "data": {
        //     noVal : ""
        //   }
        // };
        // let fakeResponse_3 = {
        //   "errorCode" : 1,
        //   "errorMessage" : "",
        //   "rowCount" : "30",
        //   "data": {
        //     "inputName" : "Amit",
        //     "inputAddress": "123 Main St",
        //     "inputEmail": "amit@elishconsulting.com",
        //     "inputPhone": "1234567890",
        //     "inputComments": "Test"
        //   }
        // };
        // return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_3)}, 2000)});
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': token }) };
        return this._http.post("api/gethost", formData, httpOptions);
    };
    BackendService.prototype.updateHost = function (formData) {
        //  let fakeResponse_1 = {
        //    "errorCode" : 0,
        //    "errorMessage" : "Host Already exists..",
        //    "rowCount" : "30",
        //    "data": {
        //      "token" : "abcd"
        //    }
        //  };
        //  let fakeResponse_2 = {
        //    "errorCode" : 1,
        //    "errorMessage" : "Host Created.",
        //    "rowCount" : "30",
        //    "data": {
        //      "token" : "abcd"
        //    }
        //  };
        //  return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_2)}, 2000)});
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': token }) };
        return this._http.post("api/updatehost", formData, httpOptions);
    };
    BackendService.prototype.deleteHost = function (formData) {
        // let fakeResponse_1 = {
        //   "errorCode" : 0,
        //   "errorMessage" : "ID Not found",
        //   "rowCount" : "30",
        //   "data": {
        //     noVal : ""
        //   }
        // };
        // let fakeResponse_3 = {
        //   "errorCode" : 1,
        //   "errorMessage" : "",
        //   "rowCount" : "30",
        //   "data": {
        //     "inputName" : "Amit",
        //     "inputAddress": "123 Main St",
        //     "inputEmail": "amit@elishconsulting.com",
        //     "inputPhone": "1234567890",
        //     "inputComments": "Test"
        //   }
        // };
        // return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_3)}, 2000)});
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': token }) };
        return this._http.post("api/deletehost", formData, httpOptions);
    };
    BackendService.prototype.getHosts = function (formData) {
        //   let fakeResponse_1 = {
        //     "errorCode" : 0,
        //     "errorMessage" : "No Data found",
        //     "rowCount" : 0,
        //     "data": {
        //       noVal : ""
        //     }
        //   };
        //   let fakeResponse_3 = {
        //     "errorCode" : 1,
        //     "errorMessage" : "",
        //     "rowCount" : 30,
        //     "data": [{
        //       "_id": 1,
        //       "inputName" : "Amit",
        //       "inputAddress": "123 Main St",
        //       "inputEmail": "amit@elishconsulting.com",
        //       "inputPhone": "1234567890",
        //       "inputComments": "Test",
        //       "pic": "abcd.jpeg"
        //     },
        //     {
        //       "_id": "2",
        //       "inputName" : "Mike",
        //       "inputAddress": "123 Main St",
        //       "inputEmail": "Mike@elishconsulting.com",
        //       "inputPhone": "1234567890",
        //       "inputComments": "Test",
        //       "pic": "abcd.jpeg"
        //     },
        //     {
        //       "_id": "3",
        //       "inputName" : "Jeff",
        //       "inputAddress": "123 Main St",
        //       "inputEmail": "Jeff@elishconsulting.com",
        //       "inputPhone": "1234567890",
        //       "inputComments": "Test",
        //       "pic": "abcd.jpeg"
        //     }]
        //   };
        //  return of(fakeResponse_3);
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': token }) };
        return this._http.post("api/gethosts", formData, httpOptions);
    };
    BackendService.prototype.setGuest = function (formData) {
        //  let fakeResponse_1 = {
        //    "errorCode" : 0,
        //    "errorMessage" : "Guest Already exists..",
        //    "rowCount" : "30",
        //    "data": {
        //      "token" : "abcd"
        //    }
        //  };
        //  let fakeResponse_2 = {
        //    "errorCode" : 1,
        //    "errorMessage" : "Guest Created.",
        //    "rowCount" : "30",
        //    "data": {
        //      "token" : "abcd"
        //    }
        //  };
        //  return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_2)}, 2000)});
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': token }) };
        return this._http.post("api/setguest", formData, httpOptions);
    };
    BackendService.prototype.getGuest = function (docId) {
        var formData = { _id: "" };
        formData._id = docId;
        // let fakeResponse_1 = {
        //   "errorCode" : 0,
        //   "errorMessage" : "ID Not found",
        //   "rowCount" : "30",
        //   "data": {
        //     noVal : ""
        //   }
        // };
        // let fakeResponse_3 = {
        //   "errorCode" : 1,
        //   "errorMessage" : "",
        //   "rowCount" : "30",
        //   "data": {
        //     "inputName" : "Amit",
        //     "inputAddress": "123 Main St",
        //     "inputEmail": "amit@elishconsulting.com",
        //     "inputPhone": "1234567890",
        //     "inputComments": "Test"
        //   }
        // };
        // return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_3)}, 2000)});
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': token }) };
        return this._http.post("api/getguest", formData, httpOptions);
    };
    BackendService.prototype.updateGuest = function (formData) {
        //  let fakeResponse_1 = {
        //    "errorCode" : 0,
        //    "errorMessage" : "Guest Already exists..",
        //    "rowCount" : "30",
        //    "data": {
        //      "token" : "abcd"
        //    }
        //  };
        //  let fakeResponse_2 = {
        //    "errorCode" : 1,
        //    "errorMessage" : "Guest Created.",
        //    "rowCount" : "30",
        //    "data": {
        //      "token" : "abcd"
        //    }
        //  };
        //  return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_2)}, 2000)});
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': token }) };
        return this._http.post("api/updateguest", formData, httpOptions);
    };
    BackendService.prototype.deleteGuest = function (formData) {
        // let fakeResponse_1 = {
        //   "errorCode" : 0,
        //   "errorMessage" : "ID Not found",
        //   "rowCount" : "30",
        //   "data": {
        //     noVal : ""
        //   }
        // };
        // let fakeResponse_3 = {
        //   "errorCode" : 1,
        //   "errorMessage" : "",
        //   "rowCount" : "30",
        //   "data": {
        //     "inputName" : "Amit",
        //     "inputAddress": "123 Main St",
        //     "inputEmail": "amit@elishconsulting.com",
        //     "inputPhone": "1234567890",
        //     "inputComments": "Test"
        //   }
        // };
        // return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_3)}, 2000)});
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': token }) };
        return this._http.post("api/deleteguest", formData, httpOptions);
    };
    BackendService.prototype.getGuests = function (formData) {
        //   let fakeResponse_1 = {
        //     "errorCode" : 0,
        //     "errorMessage" : "No Data found",
        //     "rowCount" : 0,
        //     "data": {
        //       noVal : ""
        //     }
        //   };
        //   let fakeResponse_3 = {
        //     "errorCode" : 1,
        //     "errorMessage" : "",
        //     "rowCount" : 30,
        //     "data": [{
        //       "_id": 1,
        //       "inputName" : "Amit",
        //       "inputAddress": "123 Main St",
        //       "inputEmail": "amit@elishconsulting.com",
        //       "inputPhone": "1234567890",
        //       "inputComments": "Test",
        //       "pic": "abcd.jpeg"
        //     },
        //     {
        //       "_id": "2",
        //       "inputName" : "Mike",
        //       "inputAddress": "123 Main St",
        //       "inputEmail": "Mike@elishconsulting.com",
        //       "inputPhone": "1234567890",
        //       "inputComments": "Test",
        //       "pic": "abcd.jpeg"
        //     },
        //     {
        //       "_id": "3",
        //       "inputName" : "Jeff",
        //       "inputAddress": "123 Main St",
        //       "inputEmail": "Jeff@elishconsulting.com",
        //       "inputPhone": "1234567890",
        //       "inputComments": "Test",
        //       "pic": "abcd.jpeg"
        //     }]
        //   };
        //  return of(fakeResponse_3);
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': token }) };
        return this._http.post("api/getguests", formData, httpOptions);
    };
    BackendService.prototype.setCheckIn = function (hostId, hostName, guestId, guestName) {
        if (hostId) {
            this.checkInHostId = hostId;
            this.checkInHostName = hostName;
        }
        if (guestId) {
            this.checkInGuestId = guestId;
            this.checkInGuestName = guestName;
        }
    };
    BackendService.prototype.setRegister = function (formData) {
        // let fakeResponse_1 = {
        //   "errorCode" : 0,
        //   "errorMessage" : "Entry Already exists..",
        //   "rowCount" : "30",
        //   "data": {
        //     "token" : "abcd"
        //   }
        // };
        // let fakeResponse_2 = {
        //   "errorCode" : 1,
        //   "errorMessage" : "Entry Created.",
        //   "rowCount" : "30",
        //   "data": {
        //     "token" : "abcd"
        //   }
        // };
        // return Observable.create(observer => {setTimeout(() => {observer.next(fakeResponse_2)}, 2000)});
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': token }) };
        return this._http.post("api/setregister", formData, httpOptions);
    };
    BackendService.prototype.getRegister = function (formData) {
        //   let fakeResponse_1 = {
        //     "errorCode" : 0,
        //     "errorMessage" : "No Data found",
        //     "rowCount" : 0,
        //     "data": {
        //       noVal : ""
        //     }
        //   };
        //   let fakeResponse_3 = {
        //     "errorCode" : 1,
        //     "errorMessage" : "",
        //     "rowCount" : 30,
        //     "data": [{
        //       "_id": 1,
        //       "hostId" : "1",
        //       "hostName": "Amit",
        //       "guestId": "3",
        //       "guestName": "Mike",
        //       "checkInDTTM": "Data Time",
        //       "purpose": "visit is personal"
        //     },
        //     {
        //       "_id": "2",
        //       "hostId" : "1",
        //       "hostName": "Amit",
        //       "guestId": "3",
        //       "guestName": "Mike",
        //       "checkInDTTM": "Data Time",
        //       "purpose": "visit is personal"
        //     },
        //     {
        //       "_id": "3",
        //       "hostId" : "1",
        //       "hostName": "Amit",
        //       "guestId": "3",
        //       "guestName": "Mike",
        //       "checkInDTTM": "Data Time",
        //       "purpose": "visit is personal"
        //     }]
        //   };
        //  return of(fakeResponse_3);
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': token }) };
        return this._http.post("api/getregister", formData, httpOptions);
    };
    BackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BackendService);
    return BackendService;
}());



/***/ }),

/***/ "./src/app/shared/aboutus.component.css":
/*!**********************************************!*\
  !*** ./src/app/shared/aboutus.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hYm91dHVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/aboutus.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/aboutus.component.ts ***!
  \*********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! raw-loader!./aboutus.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/shared/aboutus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/shared/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/shared/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/shared/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/shared/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/login.component.css":
/*!********************************************!*\
  !*** ./src/app/shared/login.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/login.component.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/login.component.ts ***!
  \*******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_backendService, _route) {
        this._backendService = _backendService;
        this._route = _route;
        this.error = false;
        this.errorMessage = 'Something went wrong with App';
        this.dataLoading = false;
        this.savedChanges = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (window.localStorage.getItem('token')) {
            this.savedChanges = true;
        }
    };
    LoginComponent.prototype.login = function (formData) {
        var _this = this;
        this.dataLoading = true;
        this.querySubscription = this._backendService.login(formData).subscribe(function (res) {
            if (res["errorCode"] > 0) {
                _this.error = false;
                _this.errorMessage = "";
                _this.dataLoading = false;
                window.localStorage.setItem('token', res["data"].token);
                _this.savedChanges = true;
                // this._route.navigate(['/aboutus']);
            }
            else {
                _this.error = true;
                _this.errorMessage = res["errorMessage"];
                _this.dataLoading = false;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    LoginComponent.prototype.logout = function () {
        window.localStorage.removeItem('token');
        this.savedChanges = false;
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/shared/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/shared/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/shared/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(_backendService, _route) {
        this._backendService = _backendService;
        this._route = _route;
        this.error = false;
        this.errorMessage = "Something went wrong with App";
        this.dataLoading = false;
        this.savedChanges = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.setUser = function (formData) {
        var _this = this;
        this.dataLoading = true;
        //observable metheod has 3 parameters res, error, after success
        this.querySubscription = this._backendService.setUser(formData).subscribe(function (res) {
            if (res["errorCode"] > 0) {
                _this.error = false;
                _this.errorMessage = "";
                _this.dataLoading = false;
                _this.savedChanges = true;
            }
            else {
                _this.error = true;
                _this.errorMessage = res["errorMessage"];
                _this.dataLoading = false;
            }
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
            _this.dataLoading = false;
        }, function () {
            _this.dataLoading = false;
        });
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        //removed observable 
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/shared/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
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

module.exports = __webpack_require__(/*! C:\Suresh_Dir\JS_DIR\Angular_Apps\Apps_2\visitorApp\visitorApp_Angular7\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map