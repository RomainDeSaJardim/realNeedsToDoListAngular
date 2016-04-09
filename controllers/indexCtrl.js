app.controller('indexCtrl', ['$scope', function($scope){

  $scope.initialTask = {
    name : ""
  };

  $scope.tasks = [];

  $scope.init = function(){
    $scope.tasks.push(angular.copy($scope.initialTask));
  }

  $scope.init();

  $scope.addNewLine = function(newName, originalName){
    if(originalName === ""){
      $scope.tasks.push(angular.copy($scope.initialTask));
      console.log($scope.tasks);
    }
    else if(newName === ""){
      $scope.tasks.splice($scope.tasks.length - 1, 1);
    }
  }

  $scope.deleteTask = function(index){
    $scope.tasks.splice(index, 1);
  }

}]);
