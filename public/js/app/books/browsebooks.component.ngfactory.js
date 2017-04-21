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
import * as import3 from './browsebooks.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './book.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/common/src/directives/ng_for';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from './singletrade.component';
import * as import15 from './singletrade.component.ngfactory';
import * as import16 from '../trades/trade.service';
var renderType_BrowseBooksComponent_Host = null;
var _View_BrowseBooksComponent_Host0 = (function (_super) {
    __extends(_View_BrowseBooksComponent_Host0, _super);
    function _View_BrowseBooksComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BrowseBooksComponent_Host0, renderType_BrowseBooksComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_BrowseBooksComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-browsebooks', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_BrowseBooksComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._BrowseBooksComponent_0_4 = new import3.BrowseBooksComponent(this.parentInjector.get(import8.BookService));
        this._appEl_0.initComponent(this._BrowseBooksComponent_0_4, [], compView_0);
        compView_0.create(this._BrowseBooksComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_BrowseBooksComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.BrowseBooksComponent) && (0 === requestNodeIndex))) {
            return this._BrowseBooksComponent_0_4;
        }
        return notFoundResult;
    };
    _View_BrowseBooksComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._BrowseBooksComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_BrowseBooksComponent_Host0;
}(import1.AppView));
function viewFactory_BrowseBooksComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_BrowseBooksComponent_Host === null)) {
        (renderType_BrowseBooksComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_BrowseBooksComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var BrowseBooksComponentNgFactory = new import10.ComponentFactory('app-browsebooks', viewFactory_BrowseBooksComponent_Host0, import3.BrowseBooksComponent);
var styles_BrowseBooksComponent = ['.title[_ngcontent-%COMP%] {\n      font-size: 1.7em;\n      margin-bottom: 15px;\n    }\n    #one[_ngcontent-%COMP%] {\n      margin: 0px 54px 0px 54px;\n    }'];
var renderType_BrowseBooksComponent = null;
var _View_BrowseBooksComponent0 = (function (_super) {
    __extends(_View_BrowseBooksComponent0, _super);
    function _View_BrowseBooksComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BrowseBooksComponent0, renderType_BrowseBooksComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_BrowseBooksComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n\n  ', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_1, 'class', 'container');
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'div', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'row');
        this._text_4 = this.renderer.createText(this._el_3, '\n      ', null);
        this._el_5 = this.renderer.createElement(this._el_3, 'div', null);
        this.renderer.setElementAttribute(this._el_5, 'class', 'title well col-md-offset-2 col-md-8 col-md-offset-2');
        this._text_6 = this.renderer.createText(this._el_5, '\n      ', null);
        this._el_7 = this.renderer.createElement(this._el_5, 'div', null);
        this.renderer.setElementAttribute(this._el_7, 'id', 'one');
        this._text_8 = this.renderer.createText(this._el_7, ' Browse and hit Request Book to send the owner a request ', null);
        this._text_9 = this.renderer.createText(this._el_5, '\n      ', null);
        this._text_10 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_11 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_12 = this.renderer.createElement(this._el_1, 'div', null);
        this.renderer.setElementAttribute(this._el_12, 'class', 'row');
        this._text_13 = this.renderer.createText(this._el_12, '\n      ', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(this._el_12, null);
        this._appEl_14 = new import2.AppElement(14, 12, this, this._anchor_14);
        this._TemplateRef_14_5 = new import12.TemplateRef_(this._appEl_14, viewFactory_BrowseBooksComponent1);
        this._NgFor_14_6 = new import11.NgFor(this._appEl_14.vcRef, this._TemplateRef_14_5, this.parentInjector.get(import13.IterableDiffers), this.ref);
        this._text_15 = this.renderer.createText(this._el_12, '\n      ', null);
        this._text_16 = this.renderer.createText(this._el_1, '\n  ', null);
        this._text_17 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._anchor_14,
            this._text_15,
            this._text_16,
            this._text_17
        ], [], []);
        return null;
    };
    _View_BrowseBooksComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.TemplateRef) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === import11.NgFor) && (14 === requestNodeIndex))) {
            return this._NgFor_14_6;
        }
        return notFoundResult;
    };
    _View_BrowseBooksComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_0 = this.context.books;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgFor_14_6.ngForOf = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._NgFor_14_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_14_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_BrowseBooksComponent0;
}(import1.AppView));
export function viewFactory_BrowseBooksComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_BrowseBooksComponent === null)) {
        (renderType_BrowseBooksComponent = viewUtils.createRenderComponentType('C:/Users/Nathan/Documents/JavaScript/BookTrader/assets/app/books/browsebooks.component.ts class BrowseBooksComponent - inline template', 0, import9.ViewEncapsulation.Emulated, styles_BrowseBooksComponent, {}));
    }
    return new _View_BrowseBooksComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_BrowseBooksComponent1 = (function (_super) {
    __extends(_View_BrowseBooksComponent1, _super);
    function _View_BrowseBooksComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BrowseBooksComponent1, renderType_BrowseBooksComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_BrowseBooksComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'app-singletrade', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'book-results');
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import15.viewFactory_SingleTrade0(this.viewUtils, this.injector(0), this._appEl_0);
        this._SingleTrade_0_4 = new import14.SingleTrade(this.parent.parentInjector.get(import8.BookService), this.parent.parentInjector.get(import16.TradeService));
        this._appEl_0.initComponent(this._SingleTrade_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n      ', null);
        compView_0.create(this._SingleTrade_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_BrowseBooksComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.SingleTrade) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._SingleTrade_0_4;
        }
        return notFoundResult;
    };
    _View_BrowseBooksComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.$implicit;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._SingleTrade_0_4.book = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_BrowseBooksComponent1;
}(import1.AppView));
function viewFactory_BrowseBooksComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_BrowseBooksComponent1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=browsebooks.component.ngfactory.js.map