let img;

function setup() {
  createCanvas(windowWidth,windowHeight);
  pixelDensity(1);
}

function draw() {
  background('#fae');

  if (img) {
    img.resize(300,300);
    console.log('imgload');
    // get pixel array and call sort pixel function
    img.loadPixels();
    for (let i = 0; i < 5000; i++) {
      movePixels();
    }
    img.updatePixels(); 
    image(img, 0, 0,width, height);
  }
}

function movePixels() {
  // Get a pixel.
  const x = random(img.width);
  const y = random(img.height - 1);

  // get RGB of pixel and pixel with randomly assigned relavance
  const c1 = img.get(x, y);
  const c2 = img.get(x + random(2), y + random(2));

  // Get the sum of RGB of both colors.
  const t1 = red(c1) + green(c1) + blue(c1);
  const t2 = red(c2) + green(c2) + blue(c2);

  // If the first total is less than the second total, move it to a random location
  if (t1 < t2) {
    img.set(x, y, c2);
    img.set(x + random(2), y + random(2), c1);
  }
}

function handleFile() {
  const userUpload = document.getElementById('imageUpload');
  const uploadMenu = document.getElementById("uploadMenu");
  uploadMenu.style.display = "none";
  const imgFile = userUpload.files[0];
  let imgFileUrl = URL.createObjectURL(imgFile);
  img = loadImage(imgFileUrl);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

