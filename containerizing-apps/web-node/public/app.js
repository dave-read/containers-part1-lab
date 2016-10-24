var app = angular.module('myApp', ['ngRoute'],function($locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});
    app.controller('MainController', function($scope, $http, $location) {

    $scope.messages = [];
    $scope.sayHelloToServer = function() {
        var path = $location.path().toLowerCase();
        var requestPath = "/api";
        // check of there's a context path
        if (path !== "/" && path !== "/index.html") {
          requestPath = "/"+path.split("/")[1] + requestPath
        }
        $http.get(requestPath).then(function(response) {
            $scope.messages.push(response.data);
        });
    };
    
    $scope.sayHelloToServer();
    
    var styles = [];
    var colors = ["black", "green", "red", "blue", "orange", "purple", "gray"];
    var colorIndex = 0;
    
    $scope.getStyle = function(message) {
        if (!styles[message]) {
            styles[message] = {'color': colors[colorIndex]};
            colorIndex = colorIndex < colors.length - 1 ? colorIndex + 1 : 0;
        }
        return styles[message];
    }
});
