'use strict';

(function() {
   function myAppController($rootScope, $scope) {
      var vm = this;
      vm.testVal = 5;
      vm.oneAtATime = false;
      vm.alerts = [];
      
      vm.warningMessage = "This is a test message. Good luck";
      vm.alertStyle = "info";
      
      vm.closeAlert = function(idx) {
         if (vm.alerts && vm.alerts.length > 0) {
            vm.alerts.splice(idx, 1);
         }
      };
      
      vm.addAlert = function () {
         vm.closeAlert();
         let newAlert = {
            alertStyle: vm.alertStyle,
            statusMessage: vm.warningMessage
         };
         vm.alerts.push(newAlert);
      };
      
      vm.removeAlert = function() {
         vm.alertStyle = "info";
         vm.warningMessage = "";
         vm.closeAlert();
      };
   }
   
   var app = angular.module('MyApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);
   app.controller("AppController", ["$rootScope", "$scope", myAppController]);
})();