app.directive("ngSetFocus", ['$timeout', function($timeout){
  var checkDirectivePrerequisites = function (attrs) {
    if (!attrs.ngSetFocus && attrs.ngSetFocus != "") {
        throw "FocusOnCondition missing attribute to evaluate";
    }
  }

  return {
    restrict: "A",
    link: function (scope, element, attrs, ctrls) {
      checkDirectivePrerequisites(attrs);
      scope.$watch(attrs.ngSetFocus, function (currentValue, lastValue) {
        if(currentValue == true) {
          $timeout(function () {
            element[0].focus();
          });
        }
      });
    }
  };
}]);
