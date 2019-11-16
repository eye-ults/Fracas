<template>
    <div>
        <h1>Fight NOW!</h1>
        <currentmatchup></currentmatchup>
        <ul>
            <li v-for="player in currentPlayers">{{player}}</li>
        </ul>
    </div>
</template>


<script>
export default {
    data() {
        //Get tournament rules from TournamentRules.vue
        const currentTournament = [
            isActive:'false',
            gameName: '',
            numPlayers: '',
            rules: {
                tournamentType: '',
                bestOf: '',
            }
        //Seed Brackets

        //Win Condition Met?
        //Progress Tournament
        ];
        //Get current players that are playing from signup.vue
        //make activePlayers array
        //Randomize players
        //send notifications to players that are up first
        return {
        
        const activePlayers = [];
        
        }
    
    }
}
</script>



<style>

</style>