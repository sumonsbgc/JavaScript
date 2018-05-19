myApp.controller('formCtrl', function($scope){

    $scope.data = [
        {"fname": "sumon", "email": "sumon@gmail.com"}
    ];

    $scope.student = {}; 

    $scope.submitData = function(){
        $scope.data.push($scope.student);
        console.log($scope.data);        
    }


});