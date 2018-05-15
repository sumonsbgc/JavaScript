<<<<<<< HEAD
var video = document.querySelector("video"),
    play  = document.querySelector(".play"),
    pause = document.querySelector(".pause");
video.removeAttribute("autoplay");
video.autoplay = false;


if (video.paused) {
    video.addEventListener("click", function () {
        video.play();
    });    
} else {
    video.addEventListener("click", function () {
        video.pause();
    });    
}
=======
var video = document.getElementById("vid_player"),
    playPauseButton = document.querySelector(".play_pause");

playPauseButton.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        playPauseButton.innerText = "Pause";
    }else{
        video.pause();
        playPauseButton.innerText = "Play";
    }
});
>>>>>>> 68e9e1eb3e1c0a8d4114708e6cb601aaab44d7c6


// var video = $("#vid_player"),
//     play  = $(".play"),
//     pause = $(".pause");

// play.on("click", function(){
//     video.play();
// });

// pause.on("click", function(){
//     video.pause();
// });