"use strict";
// Sign up
    //-Manual entree of player names 
    //- Add to tournament
    //- Remove names

const app = new Vue({
    
    el: '#signUp',
    data: {
        currentPlayers: [

        ],
        newPlayer: ''
        
    },
    methods: {
        addPlayer: function() {
            if (this.newPlayer.length < 5) {
                this.newPlayer = "TOO SHORT!"
            } else if (this.newPlayer === "TOO SHORT!"){
                this.newPlayer = ''
            } else {
                this.currentPlayers.push({name: this.newPlayer})
                this.newPlayer = ''
            };
        },
        greet: function() {
            return  'Welcome!' + ' ' + this.newPlayer
        }
    }
})