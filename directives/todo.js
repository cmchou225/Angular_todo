const controller = require('../controllers/todoController');
const template = require('./todo.html'); 

angular.module('todo', [])
  .directive('todo', function(){
    return {
      scope: {},
      restrict: 'E',
      controller,
      template
    }
  })