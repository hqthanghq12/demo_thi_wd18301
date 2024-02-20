window.AddPhoneController = function($scope, $http, $location){
    $scope.title = "THÊM DANH SÁCH"
    const apiPhone = "http://localhost:3000/phone";
    // đặt mặc định dữ liệu
    $scope.kiemTraDuLieu ={
        id : false,
        ten : false,
        hang : false,
        gia : false,
        giaLon: false
    }
    $scope.onClose = function(){
        $scope.inputValue = {
            id : "",
            ten : "",
            hang : "",
            gia : ""
        }
    }
    $scope.addData = function(){
        let flag = false;
        if(!$scope.inputValue || !$scope.inputValue.id){
            $scope.kiemTraDuLieu.id = true;
            flag = true;
        }
        if(!$scope.inputValue || !$scope.inputValue.ten){
            $scope.kiemTraDuLieu.ten = true;
            flag = true;
        }
        if(!$scope.inputValue || !$scope.inputValue.hang){
            $scope.kiemTraDuLieu.hang = true;
            flag = true;
        }
        if(!$scope.inputValue || !$scope.inputValue.gia){
            $scope.kiemTraDuLieu.gia = true;
            flag = true;
        } 
        if($scope.inputValue.gia <= 100){
            $scope.kiemTraDuLieu.giaLon = true;
            flag = true;
        }
        if(!flag){
            let idNew = $scope.inputValue.id;
            let newItem = {
                id: $scope.inputValue.id,
                ten: $scope.inputValue.ten,
                hang: $scope.inputValue.hang,
                gia: $scope.inputValue.gia,
            }
            $http.post(
                apiPhone,
                newItem
            ).then(
                function(response){
                    if(response.status == 201){
                        $location.path(`/detail/phone/${idNew}`)
                    }
                }
            )
            $scope.onClose();
        }
        
    }
}