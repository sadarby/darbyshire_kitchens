
console.log("Loading myMainMenuCtrl controller"); // Logging

app.controller("myMainMenuCtrl", function($scope, $timeout) {

  $scope.dropdownStatuses = [false, false, false];
  $scope.dropdownHtmlIds = ["menu-dropdown-0", "menu-dropdown-1", "menu-dropdown-2"];

  $scope.getDropdownStatus = function(index) {
    return $scope.dropdownStatuses[index];
  }

  $scope.showDropdown = function(index) {
    for (var i = 0; i < $scope.dropdownStatuses.length; i++) {
      $scope.dropdownStatuses[i] = (i == index ? true : false);
    }
  }

  $scope.hideDropdown = function(index) {
    $timeout(function() {
      if (! $('#' + $scope.dropdownHtmlIds[index]).is(":hover")) {
        $scope.dropdownStatuses[index] = false;
      }
    }, 500);
  }
});

console.log("Loaded myMainMenuCtrl controller"); // Logging
