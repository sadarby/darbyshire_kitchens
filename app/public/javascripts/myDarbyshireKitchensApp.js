/**
  * AngularJS main application definition.
  *
  * Auther: Seth Darbyshire
  */

console.log("Loading myDarbyshireKitchensApp app"); // Logging

var app = angular.module("myDarbyshireKitchensApp", []);

app.config(['$compileProvider', function ($compileProvider) {
  // Used in production to improve performance by disabling dynamic addition/removal 
  // of ng-bind directives to HTML elements
  $compileProvider.debugInfoEnabled(false);
}]);

console.log("Loaded myDarbyshireKitchensApp app"); // Logging
