var video = document.getElementById("vid_player"),
    play  = document.querySelector(".play"),
    pause = document.querySelector(".pause");

play.addEventListener("click", function(){
    video.play();
});

pause.addEventListener("click", function(){
    video.pause();
});


var video = $("#vid_player"),
    play  = $(".play"),
    pause = $(".pause");

play.on("click", function(){
    video.play();
});

pause.on("click", function(){
    video.pause();
});