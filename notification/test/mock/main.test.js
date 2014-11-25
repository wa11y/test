describe('Unit: mainController', function() {
  // Load the module with mainController
  beforeEach(function(){
  	module('main');
    module('br.notification');
  });

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('mainController', {
      $scope: scope
    });
  }));

  it('test message should be hiya', function(){
  		expect(scope.message).toEqual('hiya');
  });

  // it('should show notification', function(){
  //     Notification.show();
  //     expect($('#notification').css('display')).toBe('block');
  // });
  
})