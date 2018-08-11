// var video = document.querySelector("video"),
//     play  = document.querySelector(".play"),
//     pause = document.querySelector(".pause");
// video.removeAttribute("autoplay");
// video.autoplay = false;


// if (video.paused) {
//     video.addEventListener("click", function () {
//         video.play();
//     });    
// } else {
//     video.addEventListener("click", function () {
//         video.pause();
//     });    
// }
// var video = document.getElementById("vid_player"),
//     playPauseButton = document.querySelector(".play_pause");
    
// playPauseButton.addEventListener("click", function () {
//     if (video.paused) {
//         video.play();
//         playPauseButton.innerText = "Pause";
//     }else{
//         video.pause();
//         playPauseButton.innerText = "Play";
//     }
// });

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('players', {
        height: '390',
        width: '100%',
        videoId: ['NM29vkqCDvs'],
        events: {
            'onReady': onPlayerReady,
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

var pause = document.querySelector(".play_pause");
pause.addEventListener("click", function (e) {
    e.stopPropagation();
    player.stopVideo();
});




// var video = $("#vid_player"),
//     play  = $(".play"),
//     pause = $(".pause");

// play.on("click", function(){
//     video.play();
// });

// pause.on("click", function(){
//     video.pause();
// });