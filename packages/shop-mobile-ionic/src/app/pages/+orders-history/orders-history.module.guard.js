"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_service_1 = require("../../services/store.service");
var OrdersHistoryModuleGuard = (function () {
    function OrdersHistoryModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    OrdersHistoryModuleGuard.prototype.canLoad = function (route) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var isLogged;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.store.isLogged()];
                    case 1:
                        isLogged = _a.sent();
                        if (!isLogged) {
                            this.router.navigate(['invite']);
                            return [2, false];
                        }
                        return [2, true];
                }
            });
        });
    };
    OrdersHistoryModuleGuard = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store,
            router_1.Router])
    ], OrdersHistoryModuleGuard);
    return OrdersHistoryModuleGuard;
}());
exports.OrdersHistoryModuleGuard = OrdersHistoryModuleGuard;
//# sourceMappingURL=orders-history.module.guard.js.map