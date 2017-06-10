import angular from 'angular';
import '../styles.scss';
import '../directives/todo.js';

angular.module('app', ['todo'])
  .controller('updateData', ['$scope', ($scope) => {
    $scope.$on('update', (event, data) => {
      $scope.todoTwo = data.title;
    })
  }])




