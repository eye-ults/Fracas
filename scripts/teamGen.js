"use strict";

const colors = ["Azule","Roja","Emerald","Violaceous","Shady","Pearl","Golden","Obsidian","Fire",
                "Amaranth","Sarcoline","Poppy","Smaragdine","Mikado","Glaucous","Wenge","Fulvous",
                "Xanadu","Falu","Eburnean"];

const animals = [
                "Foxes","Dogs","Hounds","Eagles","Hawks","Falcons",
                "Pigeons","Orcas","Sharks","Piranhas","Whales",
                "Mammoths","Elephants","Pigs","Hippos","Zebras","Deer",
                "Cats","Pandas","Sloths","Capibaras","Koalas","Ostriches",
                "Rabbits","Mice","Chickens","Jaguars","Panthers","Lepards",
                "Pumas","Crocodiles","Alligators","Iguanas","Dragons","Devils",
                "Jackels","Hyenas","Mongoose","Scorpions","Centipedes","Tarantulas",
                "Spiders","Owls","Dragonflys","Bats","Squirrels"
                ];

const teamName = document.getElementById("teamName");

let randomColor = colors[Math.floor(Math.random()*colors.length)];
let randomAnimal = animals[Math.floor(Math.random()*animals.length)];

teamName.innerHTML = randomColor + " " + randomAnimal

