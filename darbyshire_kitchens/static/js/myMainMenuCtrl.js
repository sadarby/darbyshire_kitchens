
console.log("Loading myMainMenuCtrl controller"); // Logging

// AngularJS controller for main menu with dropdowns
app.controller("myMainMenuCtrl", function($scope, $timeout) {

  // Menu button and dropdown HTML IDs
  $scope.menuButtonHtmlIds = ["menu-button-0", "menu-button-1", "menu-button-2"];
  $scope.dropdownHtmlIds = ["menu-dropdown-0", "menu-dropdown-1", "menu-dropdown-2"];

  // Show/hide statuses for the menu dropdowns, e.g. show = true, hide = false
  $scope.dropdownStatuses = [false, false, false];

  // Get the status of the dropdown at the given index
  $scope.getDropdownStatus = function(index) {
    return $scope.dropdownStatuses[index];
  }

  // Show the dropdown at the given index and hide the rest
  $scope.showDropdown = function(index) {
    for (var i = 0; i < $scope.dropdownStatuses.length; i++) {
      $scope.dropdownStatuses[i] = (i == index ? true : false);
    }
  }

  // Hide the dropdown at the given index after half of a second delay
  $scope.hideDropdown = function(index) {
    $timeout(function() {
      if (! ($('#' + $scope.dropdownHtmlIds[index]).is(":hover") 
        || $('#' + $scope.menuButtonHtmlIds[index]).is(":hover"))) {
        $scope.dropdownStatuses[index] = false;
      }
    }, 500);
  }

  // On click, show/hide the dropdown at the given index
  $scope.toggleDropdown = function(index) {
    $scope.dropdownStatuses[index] = (! $scope.dropdownStatuses[index]);
  }
});

console.log("Loaded myMainMenuCtrl controller"); // Logging
