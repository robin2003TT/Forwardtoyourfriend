document.addEventListener("DOMContentLoaded", function () {
    let video = document.createElement("video");
    video.src = "vid.mp4";
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";

    let audio = new Audio("rik.mp3");
    audio.autoplay = true;
    audio.loop = true;

    document.body.appendChild(video);

    // Force play if autoplay is blocked
    video.play().catch(error => {
        console.error("Video autoplay blocked:", error);
    });

    audio.play().catch(error => {
        console.error("Audio autoplay blocked:", error);
    });
});
