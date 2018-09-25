'use strict';
angular.module('todoApp')
    .controller('todoListCtrl', ['$scope', '$location', 'todoListSvc', 'adalAuthenticationService', function ($scope, $location, todoListSvc, adalService) {
        $scope.error = "";
        $scope.loadingMessage = "";
        $scope.todoList = null;
        $scope.editingInProgress = false;
        $scope.newTodoCaption = "";


        $scope.editInProgressTodo = {
            description: "",
            id: 0
        };


        $scope.editSwitch = function (todo) {
            todo.edit = !todo.edit;
            if (todo.edit) {
                $scope.editInProgressTodo.description = todo.description;
                $scope.editInProgressTodo.id = todo.id;
                $scope.editingInProgress = true;
            } else {
                $scope.editingInProgress = false;
            }
        };

        $scope.populate = function () {
            todoListSvc.getItems().success(function (results) {
                $scope.todoList = results;
            }).error(function (err) {
                $scope.error = err;
                $scope.loadingMessage = "";
            })
        };
        $scope.delete = function (id) {
            todoListSvc.deleteItem(id).success(function (results) {
                $scope.populate();
                $scope.loadingMessage = "deleteItem: " + results;
            }).error(function (err) {
                $scope.error = err;
                $scope.loadingMessage = "";
            })
        };
        $scope.update = function (todo) {
            todoListSvc.putItem($scope.editInProgressTodo).success(function (results) {
                $scope.populate();
                $scope.editSwitch(todo);
                $scope.loadingMessage = "putItem: " + results;
            }).error(function (err) {
                $scope.error = err;
                $scope.loadingMessage = "";
            })
        };
        $scope.add = function () {

            todoListSvc.postItem({
                'description': $scope.newTodoCaption,
                'owner': adalService.userInfo.userName
            }).success(function (results) {
                $scope.newTodoCaption = "";
                $scope.populate();
                $scope.loadingMessage = "postItem: " + results;
            }).error(function (err) {
                $scope.error = err;
                $scope.loadingMsg = "";
            })
        };
    }]);