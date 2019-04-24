import {Component, ViewChild} from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
    selector: 'app-parent',
    template: `<app-child #thisworks></app-child>`
})
export class ParentComponent {
    @ViewChild(ChildComponent) child :ChildComponent = null;
}


// Webpack bundle output:

// es5

// /*!*************************************!*\
//   !*** ./src/app/parent.component.ts ***!
//   \*************************************/
// /*! exports provided: ParentComponent */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// __webpack_require__.r(__webpack_exports__);
// /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
// /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// /* harmony import */ var _child_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./child.component */ "./src/app/child.component.ts");



// var ParentComponent = /** @class */ (function () {
//     function ParentComponent() {
//         this.child = null;
//     }
//     tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
//         Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_child_component__WEBPACK_IMPORTED_MODULE_2__["ChildComponent"]),
//         tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _child_component__WEBPACK_IMPORTED_MODULE_2__["ChildComponent"])
//     ], ParentComponent.prototype, "child", void 0);
//     ParentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
//         Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
//             selector: 'app-parent',
//             template: "<app-child #thisworks></app-child>"
//         })
//     ], ParentComponent);
//     return ParentComponent;
// }());


// es2015

// /*!*************************************!*\
//   !*** ./src/app/parent.component.ts ***!
//   \*************************************/
// /*! exports provided: ParentComponent */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// __webpack_require__.r(__webpack_exports__);
// /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
// /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
// /* harmony import */ var _child_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./child.component */ "./src/app/child.component.ts");



// let ParentComponent = class ParentComponent {
//     constructor() {
//         this.child = null;
//     }
// };
// tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
//     Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_child_component__WEBPACK_IMPORTED_MODULE_2__["ChildComponent"]),
//     tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _child_component__WEBPACK_IMPORTED_MODULE_2__["ChildComponent"])
// ], ParentComponent.prototype, "child", void 0);
// ParentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
//     Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
//         selector: 'app-parent',
//         template: `<app-child #thisworks></app-child>`
//     })
// ], ParentComponent);