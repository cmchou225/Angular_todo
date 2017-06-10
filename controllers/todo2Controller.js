import angular from 'angular';

angular.module('todoTwoController',[])
  .controller('todoTwoController', ['$scope', ($scope) =>{
    $scope.update = function(){
      if($scope.todoTwo){
        $scope.$emit('update', {
          title: $scope.todoTwo,
          done: false 
        });
        $scope.todoTwo = '';
      }
    }
  }])