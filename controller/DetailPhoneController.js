window.DetailPhoneController = function($scope,$routeParams, $http){
    $scope.title = "CHI TIẾT DIỆN THOẠI";
    const apiPhone = "http://localhost:3000/phone";
    // console.log($routeParams);
    $scope.editID = 0;
    if($routeParams.id){
        let idDetail = $routeParams.id;
        $scope.editID = idDetail;
        $http.get(`${apiPhone}/${idDetail}`).then(function(response){
            if(response.status == 200){
                $scope.inputValue = {
                    id: response.data.id,
                    ten: response.data.ten,
                    hang: response.data.hang,
                    gia: response.data.gia,
                }
            }
        })
    }
}