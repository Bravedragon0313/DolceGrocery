"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
Error.stackTraceLimit = Infinity;
require('zone.js/dist/long-stack-trace-zone');
exports.environment = {
    production: false,
    DEFAULT_LATITUDE: 42.6459136,
    DEFAULT_LONGITUDE: 23.3332736,
    DEFAULT_LANGUAGE: 'en-US',
    SERVICES_ENDPOINT: 'http://localhost:5500',
    HTTPS_SERVICES_ENDPOINT: 'https://localhost:5501',
    GQL_ENDPOINT: 'http://localhost:5555/graphql',
    GQL_SUBSCRIPTIONS_ENDPOINT: 'ws://localhost:5050/subscriptions',
    AUTH_LOGO: 'assets/img/logo.png',
    NO_INTERNET_LOGO: 'assets/img/logo.png',
    GOOGLE_MAPS_API_KEY: '',
    DELIVERY_TIME_MIN: 30,
    DELIVERY_TIME_MAX: 60,
    SETTINGS_APP_TYPE: 'shop-web',
    SETTINGS_MAINTENANCE_API_URL: '',
    ENV_PROVIDERS: [],
    decorateModuleRef: function (modRef) {
        var appRef = modRef.injector.get(core_1.ApplicationRef);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        platform_browser_1.enableDebugTools(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    }
};
//# sourceMappingURL=environment.prod.js.map