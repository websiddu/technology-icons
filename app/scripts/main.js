'use strict';
(function() {
  var technologyIconsApp = window.angular.module('technologyIconsApp', ['ngAnimate']);
  technologyIconsApp.controller('mainCtrl', [ '$scope', function($scope){
    $scope.icons = window.icons;
    $scope.search = '';
  }]);
})();
