"use strict";

// mushroom factory calling the data from mushroom json file
app.factory("mushroomFactory", function($q, $http) {
    let getMush = () => {
        return $q((resolve, reject) =>{
            $http
            .get("../mushrooms.json")
            .then((shrooms) =>{
                resolve(shrooms.data);
            })
            .catch((error) =>{
                reject(error)
            })
        })
    }
    return { getMush }
})