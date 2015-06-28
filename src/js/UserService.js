var users = angular.module('users');
users.factory('instagram',['$resource', function($resource){
    return {
        fetchPopular: function(callback){
            var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK',{
                client_id: '7075dc4b108e4f3ea23629d3fb9d1bb0'
                //   access_token: '50140d56d30f416aa3f66ab6fc11d109'
            },{
                fetch:{method:'JSONP'}
            });
            api.fetch(function(response){
                callback(response.data);
            });
        }
    }
}]);

users.factory('game', function() {
    var tileNames = ['ace', 'king', 'queen', 'jack', 'ten', 'nine',
        'eight', 'seven','six'];

    return new Game(tileNames);
});

users.factory('audio',['$document',  function($document) {
    var audio = $document[0].createElement('audio');
    return audio;
}]);

users.factory('player', ['audio', '$rootScope', function(audio, $rootScope){
    var player,
        playlist = [],
        paused = false,
        current = {
            album: 0,
            track: 0
        };

    player = {
        playlist: playlist,

        current: current,

        playing: false,

        play: function(track, album) {
            if (!playlist.length) return;

            if (angular.isDefined(track)) current.track = track;
            if (angular.isDefined(album)) current.album = album;

            if (!paused) audio.src = playlist[current.album].tracks[current.track].url;
            audio.play();
            player.playing = true;
            paused = false;
        },

        pause: function() {
            if (player.playing) {
                audio.pause();
                player.playing = false;
                paused = true;
            }
        },

        reset: function() {
            player.pause();
            current.album = 0;
            current.track = 0;
        },

        next: function() {
            if (!playlist.length) return;
            paused = false;
            if (playlist[current.album].tracks.length > (current.track + 1)) {
                current.track++;
            } else {
                current.track = 0;
                current.album = (current.album + 1) % playlist.length;
            }
            if (player.playing) player.play();
        },

        previous: function() {
            if (!playlist.length) return;
            paused = false;
            if (current.track > 0) {
                current.track--;
            } else {
                current.album = (current.album - 1 + playlist.length) % playlist.length;
                current.track = playlist[current.album].tracks.length - 1;
            }
            if (player.playing) player.play();
        }
    };

    playlist.add = function(album) {
        if (playlist.indexOf(album) != -1) return;
        playlist.push(album);
    };

    playlist.remove = function(album) {
        var index = playlist.indexOf(album);
        if (index == current.album) player.reset();
        playlist.splice(index, 1);
    };

    audio.addEventListener('ended', function() {
        $rootScope.$apply(player.next);
    }, false);

    return player;
}]);

















