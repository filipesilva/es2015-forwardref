import {Component, forwardRef, Inject} from '@angular/core';
import {ParentComponent} from './parent.component';


@Component({
    selector: 'app-child',
    template: `<p>child...</p>`
})
export class ChildComponent   {
    constructor( @Inject(forwardRef(() => ParentComponent))  private parent:ParentComponent) {}
}


// Webpack bundle output:

// es5

// /*!************************************!*\
//   !*** ./src/app/child.component.ts ***!
//   \************************************/
// /*! exports provided: ChildComponent */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// __webpack_require__.r(__webpack_exports__);
// /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
// /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// /* harmony import */ var _parent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parent.component */ "./src/app/parent.component.ts");



// var ChildComponent = /** @class */ (function () {
//     function ChildComponent(parent) {
//         this.parent = parent;
//     }
//     ChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
//         Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
//             selector: 'app-child',
//             template: "<p>child...</p>"
//         }),
//         tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return _parent_component__WEBPACK_IMPORTED_MODULE_2__["ParentComponent"]; }))),
//         tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_parent_component__WEBPACK_IMPORTED_MODULE_2__["ParentComponent"]])
//     ], ChildComponent);
//     return ChildComponent;
// }());


// es2015

// /*!************************************!*\
//   !*** ./src/app/child.component.ts ***!
//   \************************************/
// /*! exports provided: ChildComponent */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// __webpack_require__.r(__webpack_exports__);
// /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
// /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
// /* harmony import */ var _parent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parent.component */ "./src/app/parent.component.ts");



// let ChildComponent = class ChildComponent {
//     constructor(parent) {
//         this.parent = parent;
//     }
// };
// ChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
//     Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
//         selector: 'app-child',
//         template: `<p>child...</p>`
//     }),
//     tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _parent_component__WEBPACK_IMPORTED_MODULE_2__["ParentComponent"]))),
//     tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_parent_component__WEBPACK_IMPORTED_MODULE_2__["ParentComponent"]])
// ], ChildComponent);