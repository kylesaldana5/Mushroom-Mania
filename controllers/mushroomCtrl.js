// controller connected to mushroom.html partial 

app.controller("mushroomCtrl", function ($scope, mushroomFactory) {

    // getting data from mushroom factory
    mushroomFactory.getMush()
    .then(mushData =>{
        
        // pushing mushroom data into a new arry
        let mushDataData = mushData['mushrooms']
        $scope.mushArry = [];
        for(let mushrooms in mushDataData){
            $scope.mushArry.push(mushDataData[mushrooms])
        }
        
        console.log($scope.mushArry );
    })
})