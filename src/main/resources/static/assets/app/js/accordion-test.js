'use strict';

(function() {
   function myAppController($rootScope, $scope) {
      var vm = this;
      vm.testVal = 5;
      vm.oneAtATime = false;
      
      vm.itemsToDisplay = [
         {
            studentName: "Peter Johnson",
            age: 25,
            gender: "M",
            level: "Junior",
            classes: [
               {
                  className: "AP History",
                  grade: "A-"
               },
               {
                  className: "Math III",
                  grade: "B+"
               }
            ],
            visible: true,
            active: true
         },
         {
            studentName: "Caroline Jacobs",
            age: 24,
            gender: "F",
            level: "Sophomore",
            classes: [
               {
                  className: "English Writing",
                  grade: "A"
               },
               {
                  className: "Physics II",
                  grade: "A-"
               }
            ],
            visible: false,
            active: true
         }
      ];
      
      vm.collapseDisplay = function(itmToCollapse) {
         if (itmToCollapse) {
            itmToCollapse.visible = false;
         }
      };
   }
   
   var app = angular.module('MyApp', ['ngRoute', 'ngResource', 'ui.bootstrap' ]);
   app.controller("AppController", ["$rootScope", "$scope", myAppController]);
})();