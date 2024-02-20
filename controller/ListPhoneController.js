window.ListPhoneController = function($scope, $http){
    $scope.title = "DANH SÁCH ĐIỆN THOẠI";
    const apiPhone = "http://localhost:3000/phone";
    function getData(){
        $http.get(apiPhone).then(function (response){
            console.log(response);
            if(response.status == 200){
                $scope.listPhone = response.data;
            }
        })
    }
    getData();
}