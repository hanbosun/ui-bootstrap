'use strict';

(function() {
   function myAppController($rootScope, $scope) {
      var vm = this;
	   vm.testVal = 5;
      vm.oneAtATime = true;
      vm.status = {
         isFirstOpen: false,
         isFirstDisabled: false
      };
      vm.status2 = {
         isFirstOpen: true,
         isFirstDisabled: false
      };
   }
   
   var app = angular.module('MyApp', ['ngRoute', 'ngResource', 'ui.bootstrap' ]);
   app.controller("AppController", ["$rootScope", "$scope", myAppController]);
})();