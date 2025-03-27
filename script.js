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

    document.body.appendChild(video);

    // Function to play media
    function playMedia() {
        video.muted = false;
        video.play().catch(error => console.error("Video autoplay blocked:", error));
        audio.play().catch(error => console.error("Audio autoplay blocked:", error));
        document.removeEventListener("click", playMedia);
    }

    // Try autoplay, allow click if blocked
    playMedia();
    document.addEventListener("click", playMedia);
});
