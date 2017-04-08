var countriesDirective = angular.module('countriesDirective', []);

countriesDirective.directive('country', function() {
  return {
    // A - <div moja-dyrektywa></div>
    // E - <moja-dyrektywa></moja-dyrektywa>
    // C - <div class="{ moja-dyrektywa: parametr }"

    restrict: 'A',
    scope: {
      // '='  Two way data binding
      // <    One way data binding
      country: '='
    },
    templateUrl: 'country.html',
    controller: function ($scope, countries) {
countries.find($scope.country.id, function (country) {
  $scope.country.flag = country.flag;
})
    }
  }
});
