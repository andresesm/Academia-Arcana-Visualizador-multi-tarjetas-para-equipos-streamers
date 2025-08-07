  // Contador de casas
  const houses = ['gry', 'sly', 'huf', 'rav', 'hog'];

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
const DISTANCE_BETWEEN_STEPS = 50 // in px
const TIME_BEFORE_REMOVE_STEP = 700 // in milliseconds
const MINIMUM_TIME_BETWEEN_STEPS = 30 // in milliseconds

let x
let y
let stepSide
let wait = false

onmousemove = (event) => {
    if (wait) return

    if (x === undefined && y === undefined) {
        x = event.x
        y = event.y
    }

    const distance = calculateDistance(x, y, event.x, event.y)

    if (distance < DISTANCE_BETWEEN_STEPS) return

    putStep(x, y, event.x, event.y)

    x = event.x
    y = event.y

    waitBetweenSteps()
}

function calculateDistance(xA, yA, xB, yB) {
    return Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2))
}

function putStep(xA, yA, xB, yB) {
    const angle = calculateAngle(xA, yA, xB, yB)
    const step = createStepOnDOM()

    removeStepAfterTimer(step)

    step.classList.add('present')
    step.classList.add('steps')

    step.style.left = `${xA}px`
    step.style.top = `${yA}px`
    step.style.transform = `rotate(${angle}deg)`
}

function calculateAngle(xA, yA, xB, yB) {
    return Math.atan2(yB - yA, xB - xA) * 180 / Math.PI + 90;
}

function createStepOnDOM() {
    const step = document.createElement('img')

    step.src = (stepSide === 'left') ? './assets/effects/wleft.png' : './assets/effects/wright.png'
    stepSide = (stepSide === 'left') ? 'right' : 'left'

    document.body.append(step)

    return step
}

function removeStepAfterTimer(step) {
    setTimeout(() => {
        step.classList.remove('present')
        step.addEventListener("transitionend", () => {
            step.remove();
        })
    }, TIME_BEFORE_REMOVE_STEP)
}

function waitBetweenSteps() {
    wait = true

    setTimeout(() => {
        wait = false
    }, MINIMUM_TIME_BETWEEN_STEPS);
}