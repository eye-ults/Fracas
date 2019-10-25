"use strict";

let currentXP = 0;
const maxXP = 1000;
let gainXP = 100;
let lvl = 1;
let gameName = 'Smash Bros Ultimate';
let percentage = (currentXP / maxXP) * 100;
document.getElementById("XP").style.width = percentage + '%';
document.getElementById("lvl").innerHTML="LVL  : " + lvl;
document.getElementById("percent").innerHTML= percentage + '%';
function XPBar() {
    if (currentXP < maxXP) {
        currentXP += gainXP;
        percentage = (currentXP / maxXP) * 100;
        document.getElementById("XP").style.width = percentage + '%';
        document.getElementById("percent").innerHTML= percentage + '%';
    } else {
        currentXP -= maxXP;
        currentXP += gainXP;
        lvl++;
        document.getElementById("lvl").innerHTML="LVL : " + lvl;
        percentage = (currentXP / maxXP) * 100;
        document.getElementById("XP").style.width = percentage + '%';
        document.getElementById("percent").innerHTML= percentage + '%';
    }
    setTimeout(function(){
        XPBar();
    }, 500);
}
XPBar();