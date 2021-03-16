mainApp.controller('EmployeeController',['$scope','$http', function($scope,$http) {

    $scope.EmpData = [];
    $scope.loadEmployee=function(){
        var form={'from':$scope.Fromdate,'To':$scope.Todate}

        $http.post('api/admin/LoadEmployee',form).success(function (response) {

            $scope.EmpDatas=response;
        })
    };



    $scope.addEmployee = function () {

        var currdate=new Date();
        $scope.date=(currdate.getDate()+"/"+(currdate.getMonth()+1)+"/"+currdate.getFullYear())

        $scope.EmpData.push(
            {
                'first':$scope.firstaddMe,
                'last':$scope.lastaddMe,
                'date':$scope.date
            }
        );

        var formData={
            'first':$scope.firstaddMe,
            'last':$scope.lastaddMe,
            'date':$scope.date
        };

        $http.post('api/admin/addEmployee',formData)
            .success(function (response) {
                alert("Success");
                console.log("Success");
            }).error(function(){
                console.log("Error not save");
            });

    }



}]);

