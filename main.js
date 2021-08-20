const img = new Image();
img.src = 'https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png';

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

const backgroundImage = {
  img: img,
  y: 0,
  speed: -1,

  move: function() {
    this.y += this.speed;
    this.y %= canvas.height;
  },

  draw: function() {
    ctx.drawImage(this.img, 0, this.y);
    if (this.speed < 0) {
      ctx.drawImage(this.img, 0, this.y + canvas.height, );
    } else {
      ctx.drawImage(this.img, 0, this.y - this.img.height);
    }
  },
};

function updateCanvas()  {
  backgroundImage.move();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();
  requestAnimationFrame(updateCanvas);
}

img.onload = updateCanvas;