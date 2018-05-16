var video = document.querySelector("video"),
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





// var video = $("#vid_player"),
//     play  = $(".play"),
//     pause = $(".pause");

// play.on("click", function(){
//     video.play();
// });

// pause.on("click", function(){
//     video.pause();
// });