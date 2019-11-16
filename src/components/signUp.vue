
<template>
    <div id='register'>
        <h2>SIGN-UP</h2>
        <input v-model="text" placeholder="Name Here" v-model.trim="newPlayer" v-on:keyup.enter="addPlayer">
        <button v-on:click="addPlayer" v-bind:disabled="newPlayer.length < 5">ADD+</button>
        <div id='players'>
            <ul>
                <li v-for="player in currentPlayers">
                    <h2>{{ player.username }}</h2>
                    <button v-on:click="removePlayer">Remove Player</button>
                </li>
            </ul>
            
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            newPlayer: '',
            currentPlayers: [ 
                {
                    id: 1,
                    show: false,
                    first_name: "Spencer",
                    last_name: "Ailts",
                    email: "rstrattan0@marriott.com",
                    gender: "Male",
                    username: "Babbygirl",
                    user_lvl: 6,
                    games_played: 420,
                    games: 
                        [ 
                            { gamename: "Smash Bros 4", game_lvl: 5 }
                        ]
                },
                {
                    id: 2,
                    show: false,
                    first_name: "Zeny",
                    last_name: "Cat",
                    email: "zenycat0@marriott.com",
                    gender: "female",
                    username: "E-ratic",
                    user_lvl: 47,
                    games_played: 1337,
                    games:
                        [
                            { gamename: "Tower Fall", game_lvl: 3}
                        ]
                },
                {
                    id: 3,
                    show: false,
                    first_name: "Aubrey",
                    last_name: "Noble",
                    email: "Boogs0@marriott.com",
                    gender: "Female",
                    username: "Boogs",
                    user_lvl: 23,
                    games_played: 101,
                    games:
                        [
                            { gamename: "Street Fighter V", game_lvl: 2},
                        ]
                }
            ] 
        }
    },
    methods: {
        addPlayer() {
            if (this.newPlayer.length < 5) {
                this.newPlayer = "TOO SHORT!"
            } else if (this.newPlayer === "TOO SHORT!"){
                this.newPlayer = ''
            } else {
                this.currentPlayers.push({username: this.newPlayer})
                this.newPlayer = ''
            }
        },
        removePlayer(){
            this.currentPlayers.pop()
        }
    },
    // // life cycle hooks
    // beforeCreate() {
    //     alert('beforeCreate');
    // },
    // created() {
    //     // Good for fetching data
    //     alert('created');
    // },
    // beforeMount() {
    //     alert('beforeMount');
    // },
    // mounted() {
    //     // Good for DOM manipulation 
    //     alert('mounted');
    // },
    // beforeUpdate() {
    //     alert('beforeUpdate');
    // },
    // updated() {
    //     // Good for DOM manipulation 
    //     alert('updated');
    // }


}
</script>


<style scoped>

    #players {
        width: 100%;
        max-width: 1200px;
        margin: 40px auto 0;
        padding: 0 20px;
        box-sizing: border-box;
    }
    #register {
        background: #34495D;
        padding: 0 20px;
        box-sizing: border-box;
        text-align: center;
    }
    #textinput {
        padding: 0 20px;
        box-sizing: border-box;
        text-align: center;
        
    }
    h1 {
        padding: .25em 0;
    }
    button{
        height: 2em;
        width: 6em;
    }
    input {
        font-size:2em;
        text-align: center;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }
    li {
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 15px;
        border: solid 1px #0BFDE6;
        margin: 10px;
    }
</style>