
require('../controllers/todoController');
const template = require('./todo.html'); 

angular.module('todo', ['todoController'])
  .directive('todo', function(){
    return {
      scope: {},
      restrict: 'E',
      template
    }
  })