'use strict';

new Vue ({
    el: '#t-userinfo',
    data: {
        name: '',
        userimage:'GET https://api.twitch.tv/e_raticwatcher/users?profile_image_url',
    },
    methods: {
        getUser: function() {
            const name = 'https://api.twitch.tv/e_raticwatcher/users' 
        }
    }
});