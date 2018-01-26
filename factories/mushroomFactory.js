"use strict";

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