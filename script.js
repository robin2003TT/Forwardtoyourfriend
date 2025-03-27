document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("rickroll-video");
    let audio = new Audio("rik.mp3");

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
