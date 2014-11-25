'use strict';

angular.module('brStatus',[])
    .service('brLoading', function($rootScope){
        this.show = function() {
           $rootScope.$broadcast('loading')
        };

        this.hide = function() {
            $rootScope.$broadcast('loading-done')
        };

        this.error = function() {
            $rootScope.$broadcast('error')
        };
    })
    .directive('brStatusContainer', function(){
        return {
            scope: {
                loading: '@',
                done: '@',
                error: '@'
            },
            template: "<div ng-show='active'>{{message}}</div>",
            link: function(scope, element, attrs){
                scope.active = 0; 

                scope.$on('loading', function(){
                    scope.message = scope.loading;
                    scope.active++;
                });

                scope.$on('loading-done',function(){
                    scope.message = scope.done;
                    scope.active--;
                    if (scope.active == -1) {
                        scope.active = 0
                    }
                });

                scope.$on('error', function(){
                    scope.message = scope.error;
                    scope.active++;
                });

            }
        }
    })