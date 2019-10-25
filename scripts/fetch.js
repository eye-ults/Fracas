"use strict";

fetch("data/profile.json")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
    });



