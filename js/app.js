'use strict';

/* App Module */

var phonecatApp = angular.module('deployview', [
  'ngRoute'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
