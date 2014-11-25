'use strict';

angular.module('main',['brStatus'])
  .controller('mainController', ['$scope', '$timeout', 'brLoading', function($scope, $timeout, brLoading){

  	$scope.saveFn = function(){

  		brLoading.show(); 
  		//$timeout(brLoading.hide, 3000);
  		//$timeout(brLoading.error, 6000);
  	}

  }])
