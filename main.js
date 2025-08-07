  // Contador de casas
  const houses = ['gry', 'sly', 'huf', 'rav', 'hog', 'sor', 'dmv'];

  houses.forEach(house => {
    // Cuenta cuántas social-box hay con esa clase
    const count = document.querySelectorAll(`.social-box.${house}`).length;

    // Busca el span dentro del contador correspondiente y coloca el número
    const counter = document.querySelector(`.house-counter.${house} .count`);
    if (counter) {
      counter.textContent = count;
    }
  });

// Pasos - Script //
const DISTANCE_BETWEEN_STEPS = 50; // in px
const TIME_BEFORE_REMOVE_STEP = 700; // in milliseconds
const MINIMUM_TIME_BEWEEN_STEPS = 30; // in milliseconds

let lastX, lastY;
let stepSide = 'left';
let waiting = false;

onmousemove = (event) => {
  if (waiting) return;

  const currentX = event.pageX;
  const currentY = event.pageY;

  if (lastX === undefined || lastY === undefined) {
    lastX = currentX;
    lastY = currentY;
    return;
  }

  const distance = calculateDistance(lastX, lastY, currentX, currentY);
  if (distance < DISTANCE_BETWEEN_STEPS) return;

  putStep(lastX, lastY, currentX, currentY);

  lastX = currentX;
  lastY = currentY;

  delayStepCreation();
};

function calculateDistance(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

function putStep(x1, y1, x2, y2) {
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI) + 90;
  const step = createStepElement();

  step.style.left = `${x1}px`;
  step.style.top = `${y1}px`;
  step.style.transform = `rotate(${angle}deg)`;

  step.classList.add('present', 'steps');

  removeStepAfter(step);
}

function createStepElement() {
  const step = document.createElement('img');
  step.src = (stepSide === 'left') 
    ? './assets/effects/wleft.png' 
    : './assets/effects/wright.png';

  stepSide = (stepSide === 'left') ? 'right' : 'left';
  document.body.appendChild(step);
  return step;
}

function removeStepAfter(step) {
  setTimeout(() => {
    step.classList.remove('present');
    step.addEventListener('transitionend', () => step.remove());
  }, TIME_BEFORE_REMOVE_STEP);
}

function delayStepCreation() {
  waiting = true;
  setTimeout(() => {
    waiting = false;
  }, MINIMUM_TIME_BEWEEN_STEPS);
}