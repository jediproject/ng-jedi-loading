﻿"use strict";

define(['angular'], function (app) {
    angular.module("ciandt.components.loading.directives", []).directive("appLoading", [function () {
        return {
            restrict: 'E',
            templateUrl: function (elem, attrs) {
                if (attrs.templateUrl) {
                    return attrs.templateUrl;
                } else {
                    return "assets/libs/ciandt-components-loading/loading.html";
                }
            }
        };
    }]);
});