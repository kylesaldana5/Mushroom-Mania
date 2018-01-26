app.controller("mushroomCtrl", function ($scope, mushroomFactory) {

    mushroomFactory.getMush()
    .then(mushData =>{
        
        let mushDataData = mushData['mushrooms']
        $scope.mushArry = [];
        for(let mushrooms in mushDataData){
            $scope.mushArry.push(mushDataData[mushrooms])
        }
        
        console.log($scope.mushArry );
    })
})