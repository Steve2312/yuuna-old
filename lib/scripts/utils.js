const Utils = function() {
    // converts seconds to HH:MM:SS
    Utils.prototype.format_seconds = function(totalSeconds) {
        var hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = Math.floor(totalSeconds % 60);

        if (hours < 10) { hours = "0" + hours }
        if (minutes < 10) { minutes = "0" + minutes }
        if (seconds < 10) { seconds = "0" + seconds }

        if (isNaN(hours)) { hours = "00" }
        if (isNaN(minutes)) { minutes = "00" }
        if (isNaN(seconds)) { seconds = "00" }

        if (hours == '00'){
            return (`${minutes}:${seconds}`)
        } else {
            return (`${hours}:${minutes}:${seconds}`)
        }
    }
    
    // Generates random uuid v4, used for identifying playlists
    Utils.prototype.uuidv4 = function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

module.exports = new Utils();