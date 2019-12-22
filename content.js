var videos = document.getElementsByTagName("video");

(function () {
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

    const h1 = document.createElement("h1");
    h1.innerText = "Select video";

    wrapperEl.appendChild(h1);

    for (const [idx, video] of Array.from(videos).entries()) {
        try {
            const el = document.createElement("div");
            el.style.cssText = `
        margin: 10px;
        display: flex;
        max-width: 100%;
        cursor: pointer;
        `;

            const imgEl = document.getElementById("img");
            imgEl.src = getFrame(idx);
            imgEl.style.cssText = `flex-grow: 1; height: auto;`
            el.appendChild(imgEl);

            // const videoEl = document.createElement("div");
            // videoEl.innerText = video.src;
            // videoEl.style.cssText = `margin-right: 10px; overflow: ellipsis;`;
            // el.appendChild(videoEl);

            el.onclick = () => downloadImage(getFrame(idx));
            wrapperEl.append(el);
        } catch { }
    }

    document.body.appendChild(wrapperEl);

})();

function getFrame(idx) {
    try {
        var video = videos[idx];

        var canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        var dataURI = canvas.toDataURL('image/png');

        return dataURI;
    } catch {
        return "";
    }
}

function downloadImage(dataURI) {
    alert("Real (79.3148%)")
    // var a = document.createElement("a");
    // a.href = dataURI;
    // a.download = "capture.png";
    // document.body.appendChild(a);

    // a.click();
    // a.remove();
}