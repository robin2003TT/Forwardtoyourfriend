document.addEventListener("DOMContentLoaded", function () {
    let video = document.createElement("video");
    video.src = "vid.mp4";
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";

    document.body.appendChild(video);

    // Force play if autoplay is blocked
    video.play().catch(error => {
        console.error("Autoplay blocked:", error);
    });
});
