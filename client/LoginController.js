mainApp.controller('loginController',function($scope,$http,$location){


    $scope.Login=function(){
        var formData={
            'uname':$scope.uname,
            'pwd':$scope.pwd
        };
        $http.post('api/admin/login',formData)
            .success(function (response) {
                $location.path('#/Employee');
                console.log("Success");
            }).error(function(){
                console.log('Invalid');
            });
    }

});