'use strict';
(function() {
  var techconsApp = window.angular.module('techconsApp', ['ngAnimate']);
  techconsApp.controller('mainCtrl', [ '$scope', function($scope){
    $scope.icons = window.icons;
    $scope.search = '';
  }]);
})();
