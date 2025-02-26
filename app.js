var element = document.querySelector('.inner_thing .page_cont .u');
const pageContImg = document.querySelector('.page_cont #iji');

const images = [
    "/images/basketball-147794_1280.png",
    "/images/Badminton-Shuttlecock-Download-Transparent-PNG-Image.png",
    "/images/cricket-ball-png-28881.png",
    "/images/football-png-24994.png",
    "/images/tennis-ball-307846_1280.png",
    "/images/vecteezy_ai-generated-volleyball-ball-isolated-on-transparent-background_35320507.png",
    "/images/Badminton-Shuttlecock-Download-Transparent-PNG-Image.png",
];

let index = 0;

setInterval(function() {
  element.id = 'new-id';
  pageContImg.src = images[index];
  index = (index + 1) % images.length;
  setTimeout(function() {
    element.removeAttribute('id');
  }, 3000);
}, 6000);  
