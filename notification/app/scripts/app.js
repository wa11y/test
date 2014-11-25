'use strict';

/**
 * @ngdoc overview
 * @name notificationApp
 * @description
 * # notificationApp
 *
 * Main module of the application.
 */
angular
  .module('notificationApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
