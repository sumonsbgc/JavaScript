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


// var video = $("#vid_player"),
//     play  = $(".play"),
//     pause = $(".pause");

// play.on("click", function(){
//     video.play();
// });

// pause.on("click", function(){
//     video.pause();
// });