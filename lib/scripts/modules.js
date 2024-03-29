const fs = require('fs');
const path = require("path");
const { shell } = require('electron');
const request = require('request');
const progress = require('request-progress');
const { exec } = require('child_process');
const extract = require('extract-zip');
var { Howl } = require('howler');
const { ipcRenderer } = require('electron');
const remote = require('electron').remote;

const appData = remote.app.getPath('userData');
const appDataTemp = path.join(appData, 'temp');
const appDataSongs = path.join(appData, 'songs');
const appDataPlaylists = path.join(appData, 'playlists');

// My classes

const utils = require('./scripts/utils.js');
const parse_json = require('./scripts/parse_json.js');
const player = require('./scripts/player.js');
const beatmap_dl = require('./scripts/beatmap_dl.js');
const playlist_page = require('./scripts/playlist_page.js');
const toolbox = require('./scripts/toolbox.js');
const search_page = require('./scripts/search_page.js');
const playlist = require('./scripts/playlist.js');
const import_file = require('./scripts/import_file.js');

console.log("Songpath: " + appDataSongs)

window.onload = function() {
    player.build();
    playlist.build();
}