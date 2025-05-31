'use strict';

(function() {
   function myAppController($rootScope, $scope) {
      var vm = this;
      vm.checkModel = {
         left: false,
         middle: true,
         right: false
      };
      
      vm.optValSelected = "";
   } 
   var app = angular.module('MyApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);
   app.controller("AppController", ["$rootScope", "$scope", myAppController]);
})();