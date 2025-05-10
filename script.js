
// === Turntable Hover Glow ===
const decks = document.querySelectorAll('.deck');
decks.forEach(deck => {
  deck.addEventListener('mouseenter', () => {
    deck.style.boxShadow = '0 0 20px #ff00ff';
  });
  deck.addEventListener('mouseleave', () => {
    deck.style.boxShadow = '0 0 10px #ff00ff';
  });
});

// === Beat Pad Animation ===
const beatPad = document.querySelector('.beat-pad');
let colors = ['#ff00aa', '#00ffaa', '#ffaa00', '#00aaff', '#aa00ff'];

setInterval(() => {
  beatPad.style.background = `repeating-linear-gradient(
    45deg,
    ${colors[Math.floor(Math.random() * colors.length)]},
    #111 10px,
    ${colors[Math.floor(Math.random() * colors.length)]} 10px,
    #222 20px
  )`;
}, 400);

// === Smoke Animation ===
const smoke = document.querySelector('.smoke-overlay');
let smokeOpacity = 0.15;
let rising = true;

setInterval(() => {
  if (rising) {
    smokeOpacity += 0.01;
    if (smokeOpacity >= 0.3) rising = false;
  } else {
    smokeOpacity -= 0.01;
    if (smokeOpacity <= 0.1) rising = true;
  }
  smoke.style.opacity = smokeOpacity.toFixed(2);
}, 100);

// === Mix Pad Animation ===
const pads = document.querySelectorAll('.pad-square');
setInterval(() => {
  pads.forEach(pad => {
    pad.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    pad.style.boxShadow = `0 0 20px ${pad.style.backgroundColor}`;
  });
}, 1000);

// === Vape Smoke Beat Sync ===
const vape = document.querySelector('.vape-smoke');
setInterval(() => {
  vape.style.animation = 'none';
  void vape.offsetWidth; // trigger reflow
  vape.style.animation = 'puff 2s infinite ease-in-out';
}, 2000); // beat pulse time
