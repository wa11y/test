'use strict';

angular.module('main',['br.notification'])
  .controller('mainController', ['$scope', 'Notification', function($scope, Notification){

        $scope.message = "hiya";
        Notification.show();

}]);