import angular from 'angular';

angular.module('todoController',[])
  .controller('todoController', ['$scope', ($scope) => {
    $scope.todos = [
      {'title': 'Build a todo app', 'done': false}
    ];
    $scope.addTodo = function (){
      console.log($scope.newTodo);
      $scope.todos.push({'title': $scope.newTodo, 'done': false });
      $scope.newTodo = '';
    }
    $scope.clearCompleted = function(){
      $scope.todos = $scope.todos.filter((todo) => {
        return !todo.done;
      })
    }
    $scope.$on('update', (event, data) => {
      console.log(data)
      $scope.todos.push(data);
    })
  }]);