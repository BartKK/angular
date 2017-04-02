// Looping with ngRepeat
var myApp = angular.module('myApp', []);


myApp.controller('myAppController', ['$scope', function myAppController($scope){
$scope.countries = [
    {name: 'China', population: 13000000},
    {name: 'India', population: 198234672},
    {name: 'United States', population: 248091893},



]
}]);
