angular.module('todo', [])
  .directive('todo', function(){
    return {
      scope: {},
      restrict: 'E',
      controller: require('../controllers/todoController'),
      template: require('./todo.html')
    }
  })