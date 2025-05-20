'use strict';

(function() {
   function myAppController($rootScope, $scope) {
      var vm = this;
      vm.testVal = 5;
      vm.oneAtATime = false;
      
      vm.warningMessage = "This is a test message. Good luck";
      vm.alertStyle = "warning";
      
      vm.closeAlert = function() {
         vm.warningMessage = "";
         vm.alertStyle = "info";         
      }
   }
   
   var app = angular.module('MyApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);
   app.controller("AppController", ["$rootScope", "$scope", myAppController]);
})();