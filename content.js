(function() {
    var videos = document.getElementsByTagName("video");

    const wrapperEl = document.createElement("div");

    wrapperEl.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    width: 300px;
    height: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    font-size: 14px;
    `;

    for (const [idx, video] of Array.from(videos).entries()) {
        const videoEl = document.createElement("div");
        videoEl.innerText = video.src;
        videoEl.style.cssText = `margin: 10px;`;
        videoEl.onclick = () => downloadVideo(idx);
        wrapperEl.appendChild(videoEl);
    }

    document.body.appendChild(wrapperEl);

    function downloadVideo(idx) {
        var video = videos[idx];

        var canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        var dataURI = canvas.toDataURL('image/png');

        var a = document.createElement("a");
        a.href = dataURI;
        a.download = "capture.png";
        document.body.appendChild(a);

        a.click();
        a.remove();
    }
})();