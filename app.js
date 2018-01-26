"use strict";

const app = angular.module("mushroom", ["ngRoute"])
    app.config($routeProvider =>{
        $routeProvider
        .when("/", {
            templateUrl: "partials/mushroom.html",
            controller: "mushroomCtrl"
        })
        
    })
    