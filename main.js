function preload() {

}

function setup() {
    canvas = createCanvas(800, 600);
    canvas.center();
    canvas.position(283, 220)
    video = createCapture(VIDEO);
    // video.position(383, 260);
    video.position(383, 260);
    video.hide();
}

function draw() {
    image(video, 0, 0, 800, 600);
}

function take_and_download_snapshot() {
    save("Filtered_Image.png")
}