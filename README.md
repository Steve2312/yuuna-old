<h1>Working on a version 2</h1>
<h2>Won't be updating this repository anymore!</h2>
<h2>Download version 1.1.2</h2>
https://drive.google.com/file/d/1cB2I0BDH0alhvNpKIZ6GubFntNrOdgGM/view?usp=sharing


<h1>Yuuna</h1>
A simple osu! music player using BeatConnect DB.

<h5>Screenshots:</h5>

![ ](https://kuina-natsukawa.s-ul.eu/PAtw0XK0)
![ ](https://kuina-natsukawa.s-ul.eu/nE4pXjVS)


<h5>FIXES:</h5>
<h6>IMPORTANT:</h6>

- [x] USE INDEX FOR FINDING OUT WHAT THE NEXT SONG IS... PLAYLIST CANT PLAY DUPPED SONGS (**PLAYER, PARSE_JSON**)
- [x] ADD TO SPECIFIC PLAYLIST, RN CAN ONLY ADD TO 1 PLAYLIST (**PLAYLIST, TOOLBOX**)
- [x] EDIT PLAYLIST IMAGE, NAME, DESCRIPTION (**PLAYLIST**)
- [x] IF SONG IS DELETED, REMOVE FROM ALL PLAYLISTS (**PLAYLIST**)
- [x] UPDATE SONGS COUNT AFTER EXPORTING SONG OR ADDING/REMOVING SONG FROM PLAYLIST (**PLAYLIST**)

- [x] Abort the current request if a new search request is initialized (**SEARCH**)
- [x] Choice to search on: Beatmap Name, Beatmap ID, MapsetID, Creator ID (**SEARCH**)
- [x] Load more results if on end (**SEARCH**)
- [x] Fix stop the download button on the searching page (**SEARCH**)
- [x] Remove files from the temp folder after importing a map/song.  (**CORE**)
- [x] Create a nagivation bar on the left panel  (**CORE**)
- [x] Beatmaps with more than 1 audio inside them behave weirdly (**PLAYLIST**)
- [ ] ~~Sort songs by: alphabet, added date, etc. (**PLAYLIST**)~~
- [ ] ~~Continue playing the song after previewing a song from the search page (**PLAYER**)~~
- [ ] Fix playlist after noticing a folder change/delete beatmap (**PLAYER**)
- [x] Stabalize the play_preview function (**PLAYER**)
- [ ] Replace all .innerHTML to DOM Objects .textContent/.append (**XSS**)
- [ ] Replace all JQuery code with Javascript code if i encounter any.
- [x] Change temp, songs data to write to appdata.
- [x] First song cover image is black after importing a song (**PLAYLIST**) *This doesnt occur anymore but ill keep notice when it happens*
- [x] Cancel download button is not pressable due to it being updated per 500ms (**DOWNLOADPAGE**)
- [x] Show the cover image from local file instead of requesting from osu link. (**PLAYLIST**)
- [x] Change play/pause icon when paused from Windows MediaSession (**PLAYER**)
- [x] Add the downloaded song in the playlist of the player (**PLAYER**)
- [x] Show medatdata on the Windows MediaSession (**PLAYER**)
- [x] Implement the back- and forward button (**PLAYER**)
- [ ] Maybe when exporting the map include added date, so this improves the performace by not having to init fs module (**PLAYLIST**)

<h5>UPCOMING ("Not Started"):</h5>

- [ ] Create an home page
- [ ] Create an info page
- [ ] Create a settings page
- [ ] ~~Option to set to download from Bloodcat Servers or CDN Bloodcat servers~~
- [ ] Create library page where you can see all your playlists
- [x] Option to create playlist
- [x] Option to delete curtain songs
- [ ] Option to add song to curtain playlist*
- [ ] Volume fading on play or pause
- [ ] Move the song position in the playlist with dragging, except on library
- [x] Shuffle song option
- [x] Playlist on repeat option
- [x] If the songs has been downloaded before, dont show download icon on the search page

<h5>REWRITING ALL SCRIPTS:</h5>
Planning to rewrite all script using classes.

- [x] beatmap_dl.js
- [ ] download_page.js
- [ ] extract_download.js
- [ ] modules.js
- [ ] page_switcher.js
- [x] parse_json.js
- [x] player.js
- [x] playlist_page.js
- [x] search_page.js
- [x] toolbox.js

<h5>REWRITING CSS NAMES:</h5>

- [x] player.css
- [ ] card.css
- [ ] app.css
- [ ] download_card.css
- [ ] download_page.css
- [ ] playlist_card.css
- [ ] playlist_page.css
- [ ] search_page.css

<h5>Changelog:</h5>
<h6>18-12-2020:</h6>

    - Rewrote player.js to classes style
    - Rewrote beatmap_dl.js to classes style
    - Fixed cancel download button
    - Retrieve Appdata path
    - Download temp in appdata now
<h6>16-12-2020:</h6>

    - Changed weird class names and id names from player.js and player.css
    - Added icon change on preview
    - Added an image if there was no thumbnail cover available
    - Adjusted the width when icon switches from download to cancel

<h6>12-12-2020:</h6>

    - Requested API access to BeatConnect
    - Working working on fixes on search_page.js

<h6>6-12-2020:</h6>

    - Imported new Library HOWLER.JSO
    - Rewrote player.js script 
    - FIXED:
        PLAYER - PLAY/PAUSE ICONS DONT CHANGE IF PAUSED FROM WINDOWS
        PLAYER - FIX PLAYER AFTER DOWNLOADING A SONG
        PLAYER - SHOW SONG COVER + TITLE ON THE WINDOWS MEDIA VOLUME
        PLAYER - BACK AND FORWARD BUTTON.

<h6>27-11-2020:</h6>

    - FIXED:
        DOWNLOADPAGE - DIFFERENT APPROACH ON THE PAGE... THE CANCEL BUTTON IS HARDLY PRESSABLE.
        PLAYLIST - SHOW COVER.PNG INSTEAD OF WEBIMAGE FROM OSU.
        CSS SEARCH LIST WRAPPER HEIGHT FIX
        SEARCH LIST LOADING BAR ANIMATION SMOOTHER
        REMOVED LAZY LOADER JQUERY... DECREASES THE PERFORMANCE OF WINDOW RESIZE

<h6>25-11-2020:</h6>

    - Added lazy loader for search page

<h6>21-11-2020:</h6> 

    - Download from CDN to improve download speed

<h6>20-11-2020:</h6> 

    - Added created download_beatmap.js [Download beatmaps from bloodcat]
    - Added created extract_download.js [Extracts downloaded beatmaps and imports them to songs]

<h6>19-11-2020:</h6> 

    - I forgot what i did. Perhaps created [page_switcher.js, parse_json.js, modules.js, player.js, playlist.js, search_page.js, download_page.js. etc.]

<h6>15-11-2020:</h6>

    - START PROJECT
    - Experimenting with ElectronJS and created the first html file.
