var countryControllers = angular.module('countryControllers', []);




countryApp.controller('CountryListCtrl', ['$scope', '$http', 'countries',
    function($scope, countries) {
        countries.list(function (countries) {
            $scope.countries = countries;
        })
    }
]);

countryApp.controller('CountryListCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('countries.json').success(function (data) {
        $scope.countries = data;

    });

}]);


countryApp.controller('CountryDetailCtrl', ['$scope', '$routeParams', 'countries',
    function ($scope, $routeParams, countries) {
        countries.find($routeParams.countryId, function(country) {
            $scope.country = country;
        });

        $scope.goBack = function () {
            window.history.back();
        }
    }]);
