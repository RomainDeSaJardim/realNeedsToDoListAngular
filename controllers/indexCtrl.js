app.controller('indexCtrl', ['$scope', function($scope){

  $scope.initialTask = {
    name : "",
    showButtons : false,
    focus : false
  };

  $scope.tasks = [];

  $scope.init = function(){
    $scope.tasks.push(angular.copy($scope.initialTask));
    $scope.tasks[0].focus = true;
  }

  $scope.init();

  $scope.addNewLine = function(newName, originalName){
    if(originalName === ""){
      $scope.tasks.push(angular.copy($scope.initialTask));
    }
    else if(newName === ""){
      $scope.tasks.splice($scope.tasks.length - 1, 1);
    }
  }

  $scope.deleteTask = function(index){
    $scope.tasks.splice(index, 1);
    $scope.tasks[index].focus = true;
  }

}]);
