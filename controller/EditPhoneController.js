window.EditPhoneController = function($scope,$routeParams, $http, $location){
    $scope.title = "SỬA DIỆN THOẠI";
    const apiPhone = "http://localhost:3000/phone";
     
    if($routeParams.id){
        let idDetail = $routeParams.id;
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
        $scope.editID = $routeParams.id;
    }
    $scope.onClose = function(){
        $scope.inputValue = {
            id : "",
            ten : "",
            hang : "",
            gia : ""
        }
    }
    $scope.editData = function(){
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
            
            let editItem = {
                id: $scope.inputValue.id,
                ten: $scope.inputValue.ten,
                hang: $scope.inputValue.hang,
                gia: $scope.inputValue.gia,
            }
            $http.put(
                `${apiPhone}/${$scope.editID}`,
                editItem
            ).then(
                function(response){
                    if(response.status == 200){
                        $location.path(`/list-phone`)
                    }
                }
            )
            $scope.onClose();
        }
        
    }
}