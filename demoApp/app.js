var app = angular.module('myApp', ['ngEocities', 'firebase']);

app.config(function(counterProvider) {
  counterProvider.setFirebaseURL('https://ng-eocities.firebaseio.com/');
});

app.controller('myController', function($scope, $timeout){
  // $scope.active = true;
  // console.log('inside mycontroller');
  // (function activate(){
  //   $timeout(function(){
  //     $scope.active = !$scope.active;
  //     console.log('scope.active set to: ', $scope.active);
  //     activate();
  //   }, 2500);
  // })();
});