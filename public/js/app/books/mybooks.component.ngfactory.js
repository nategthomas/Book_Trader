/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './mybooks.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './book.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from './singlebook.component.css.shim';
import * as import12 from '@angular/common/src/directives/ng_for';
import * as import13 from '@angular/common/src/directives/ng_style';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/core/src/security';
import * as import19 from './singlebook.component';
import * as import20 from './singlebook.component.ngfactory';
var renderType_MyBooksComponent_Host = null;
var _View_MyBooksComponent_Host0 = (function (_super) {
    __extends(_View_MyBooksComponent_Host0, _super);
    function _View_MyBooksComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyBooksComponent_Host0, renderType_MyBooksComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MyBooksComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-mybooks', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_MyBooksComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._MyBooksComponent_0_4 = new import3.MyBooksComponent(this.parentInjector.get(import8.BookService));
        this._appEl_0.initComponent(this._MyBooksComponent_0_4, [], compView_0);
        compView_0.create(this._MyBooksComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_MyBooksComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.MyBooksComponent) && (0 === requestNodeIndex))) {
            return this._MyBooksComponent_0_4;
        }
        return notFoundResult;
    };
    _View_MyBooksComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._MyBooksComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_MyBooksComponent_Host0;
}(import1.AppView));
function viewFactory_MyBooksComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MyBooksComponent_Host === null)) {
        (renderType_MyBooksComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_MyBooksComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var MyBooksComponentNgFactory = new import10.ComponentFactory('app-mybooks', viewFactory_MyBooksComponent_Host0, import3.MyBooksComponent);
var styles_MyBooksComponent = [import11.styles];
var renderType_MyBooksComponent = null;
var _View_MyBooksComponent0 = (function (_super) {
    __extends(_View_MyBooksComponent0, _super);
    function _View_MyBooksComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyBooksComponent0, renderType_MyBooksComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MyBooksComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'container');
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import2.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import14.TemplateRef_(this._appEl_2, viewFactory_MyBooksComponent1);
        this._NgFor_2_6 = new import12.NgFor(this._appEl_2.vcRef, this._TemplateRef_2_5, this.parentInjector.get(import15.IterableDiffers), this.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_5 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_5, 'class', 'backdrop');
        this._NgStyle_5_3 = new import13.NgStyle(this.parentInjector.get(import16.KeyValueDiffers), new import17.ElementRef(this._el_5), this.renderer);
        this._text_6 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_7 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_7, 'class', 'modal');
        this.renderer.setElementAttribute(this._el_7, 'role', 'dialog');
        this.renderer.setElementAttribute(this._el_7, 'tabindex', '-1');
        this._NgStyle_7_3 = new import13.NgStyle(this.parentInjector.get(import16.KeyValueDiffers), new import17.ElementRef(this._el_7), this.renderer);
        this._text_8 = this.renderer.createText(this._el_7, '\n  ', null);
        this._el_9 = this.renderer.createElement(this._el_7, 'div', null);
        this.renderer.setElementAttribute(this._el_9, 'class', 'modal-dialog');
        this.renderer.setElementAttribute(this._el_9, 'role', 'document');
        this._text_10 = this.renderer.createText(this._el_9, '\n    ', null);
        this._el_11 = this.renderer.createElement(this._el_9, 'div', null);
        this.renderer.setElementAttribute(this._el_11, 'class', 'modal-content');
        this._text_12 = this.renderer.createText(this._el_11, '\n      ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'div', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'modal-header');
        this._text_14 = this.renderer.createText(this._el_13, '\n        ', null);
        this._el_15 = this.renderer.createElement(this._el_13, 'button', null);
        this.renderer.setElementAttribute(this._el_15, 'aria-label', 'Close');
        this.renderer.setElementAttribute(this._el_15, 'class', 'close');
        this.renderer.setElementAttribute(this._el_15, 'type', 'button');
        this._el_16 = this.renderer.createElement(this._el_15, 'span', null);
        this.renderer.setElementAttribute(this._el_16, 'aria-hidden', 'true');
        this._text_17 = this.renderer.createText(this._el_16, '×', null);
        this._text_18 = this.renderer.createText(this._el_13, '\n        ', null);
        this._el_19 = this.renderer.createElement(this._el_13, 'h4', null);
        this.renderer.setElementAttribute(this._el_19, 'class', 'modal-title');
        this._text_20 = this.renderer.createText(this._el_19, '', null);
        this._text_21 = this.renderer.createText(this._el_13, '\n      ', null);
        this._text_22 = this.renderer.createText(this._el_11, '\n      ', null);
        this._el_23 = this.renderer.createElement(this._el_11, 'div', null);
        this.renderer.setElementAttribute(this._el_23, 'class', 'modal-body');
        this._text_24 = this.renderer.createText(this._el_23, '\n        ', null);
        this._el_25 = this.renderer.createElement(this._el_23, 'p', null);
        this._text_26 = this.renderer.createText(this._el_25, '', null);
        this._text_27 = this.renderer.createText(this._el_23, '\n        ', null);
        this._el_28 = this.renderer.createElement(this._el_23, 'img', null);
        this.renderer.setElementAttribute(this._el_28, 'class', 'book-img');
        this._text_29 = this.renderer.createText(this._el_23, '\n      ', null);
        this._text_30 = this.renderer.createText(this._el_11, '\n      ', null);
        this._el_31 = this.renderer.createElement(this._el_11, 'div', null);
        this.renderer.setElementAttribute(this._el_31, 'class', 'modal-footer');
        this._text_32 = this.renderer.createText(this._el_31, '\n        ', null);
        this._el_33 = this.renderer.createElement(this._el_31, 'button', null);
        this.renderer.setElementAttribute(this._el_33, 'class', 'btn btn-danger');
        this.renderer.setElementAttribute(this._el_33, 'type', 'button');
        this._text_34 = this.renderer.createText(this._el_33, 'Remove Book', null);
        this._text_35 = this.renderer.createText(this._el_31, '\n        ', null);
        this._el_36 = this.renderer.createElement(this._el_31, 'button', null);
        this.renderer.setElementAttribute(this._el_36, 'class', 'btn btn-default');
        this.renderer.setElementAttribute(this._el_36, 'type', 'button');
        this._text_37 = this.renderer.createText(this._el_36, 'Close', null);
        this._text_38 = this.renderer.createText(this._el_31, '\n      ', null);
        this._text_39 = this.renderer.createText(this._el_11, '\n    ', null);
        this._text_40 = this.renderer.createText(this._el_9, '\n  ', null);
        this._text_41 = this.renderer.createText(this._el_7, '\n', null);
        this._text_42 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._map_0 = import4.pureProxy1(function (p0) {
            return { display: p0 };
        });
        this._expr_1 = import7.UNINITIALIZED;
        this._map_1 = import4.pureProxy1(function (p0) {
            return { display: p0 };
        });
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_15, 'click', this.eventHandler(this._handle_click_15_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_33, 'click', this.eventHandler(this._handle_click_33_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_36, 'click', this.eventHandler(this._handle_click_36_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._text_38,
            this._text_39,
            this._text_40,
            this._text_41,
            this._text_42
        ], [
            disposable_0,
            disposable_1,
            disposable_2
        ], []);
        return null;
    };
    _View_MyBooksComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import12.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6;
        }
        if (((token === import13.NgStyle) && (5 === requestNodeIndex))) {
            return this._NgStyle_5_3;
        }
        if (((token === import13.NgStyle) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 41)))) {
            return this._NgStyle_7_3;
        }
        return notFoundResult;
    };
    _View_MyBooksComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_0 = this.context.books;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgFor_2_6.ngForOf = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._NgFor_2_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_2_6.ngDoCheck();
        }
        var currVal_1 = this._map_0(this.context.display);
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgStyle_5_3.ngStyle = currVal_1;
            this._expr_1 = currVal_1;
        }
        if (!throwOnChange) {
            this._NgStyle_5_3.ngDoCheck();
        }
        var currVal_2 = this._map_1(this.context.display);
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._NgStyle_7_3.ngStyle = currVal_2;
            this._expr_2 = currVal_2;
        }
        if (!throwOnChange) {
            this._NgStyle_7_3.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_4 = import4.interpolate(1, '', ((this.context.book == null) ? null : this.context.book.author), '');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_20, currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = import4.interpolate(1, '', ((this.context.book == null) ? null : this.context.book.title), '');
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_26, currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = import4.interpolate(1, '', ((this.context.book == null) ? null : this.context.book.image), '');
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementProperty(this._el_28, 'src', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_6));
            this._expr_6 = currVal_6;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_MyBooksComponent0.prototype._handle_click_15_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.closeWindow() !== false);
        return (true && pd_0);
    };
    _View_MyBooksComponent0.prototype._handle_click_33_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.onRemove() !== false);
        var pd_1 = (this.context.closeWindow() !== false);
        return ((true && pd_0) && pd_1);
    };
    _View_MyBooksComponent0.prototype._handle_click_36_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.closeWindow() !== false);
        return (true && pd_0);
    };
    return _View_MyBooksComponent0;
}(import1.AppView));
export function viewFactory_MyBooksComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MyBooksComponent === null)) {
        (renderType_MyBooksComponent = viewUtils.createRenderComponentType('C:/Users/Nathan/Documents/JavaScript/BookTrader/assets/app/books/mybooks.component.html', 0, import9.ViewEncapsulation.Emulated, styles_MyBooksComponent, {}));
    }
    return new _View_MyBooksComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_MyBooksComponent1 = (function (_super) {
    __extends(_View_MyBooksComponent1, _super);
    function _View_MyBooksComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyBooksComponent1, renderType_MyBooksComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MyBooksComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'app-singlebook', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'book-results');
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import20.viewFactory_SingleBook0(this.viewUtils, this.injector(0), this._appEl_0);
        this._SingleBook_0_4 = new import19.SingleBook(this.parent.parentInjector.get(import8.BookService));
        this._appEl_0.initComponent(this._SingleBook_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n  ', null);
        compView_0.create(this._SingleBook_0_4, [], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [disposable_0], []);
        return null;
    };
    _View_MyBooksComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import19.SingleBook) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._SingleBook_0_4;
        }
        return notFoundResult;
    };
    _View_MyBooksComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.context.$implicit;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._SingleBook_0_4.book = currVal_1;
            this._expr_1 = currVal_1;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_MyBooksComponent1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.onClick() !== false);
        return (true && pd_0);
    };
    return _View_MyBooksComponent1;
}(import1.AppView));
function viewFactory_MyBooksComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_MyBooksComponent1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=mybooks.component.ngfactory.js.map