
import '../controllers/todoController';
import './test.js';
const template = require('./views/todo.html');

angular.module('todo', ['todoController', 'test'])
  .directive('todo', function(){
    return {
      scope: true,
      restrict: 'E',
      template
    }
  })