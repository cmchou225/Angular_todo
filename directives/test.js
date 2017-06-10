import '../controllers/todo2Controller';
const template = require('./views/test.html');


angular.module('test',['todoTwoController'])
  .directive('test',function(){
    return{
      scope: true,
      restrict: 'E',
      template
    }
  });