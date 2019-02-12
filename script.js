const splashQuestion = document.querySelector('.splash-question');
const form = document.querySelector('form');
const habitField = document.querySelector('#habit-field')

document.addEventListener('DOMContentLoaded', function() {
   splashQuestion.classList.add("no-task-entered")
}, false);

//Handling input and displaying the input at the bottom of the screen

let userHabit = ''

form.addEventListener("submit", e => {
	e.preventDefault();
	console.log(habitField.value)
	userHabit = habitField.value;
	console.log(userHabit)
	splashQuestion.style.display = "none";
	CreateHabitEl();
})

function CreateHabitEl() {
	console.log(userHabit)
	let node = document.querySelector('.habit-heading');
	let textNode = document.createTextNode(`my new habit will be ${userHabit}`)
	node.appendChild(textNode);
}


//Loading rocket images

let rocketNozzle = document.createElement("img");
rocketNozzle.src = "rocketParts/spaceRocketParts_005.png"
let rocketNozzle = 0

let rocketFrameBottom = document.createElement("img");
rocketFrameBottom.src = "rocketParts/spaceRocketParts_017.png"
let rocketFrameBottom = 0

let rocketFrameTop = document.createElement("img");
rocketFrameTop.src = "rocketParts/spaceRocketParts_009.png"
let rocketFrameTop = 0

let rocketWindow = document.createElement("img");
rocketWindow.src = "rocketParts/spaceRocketParts_015.png"
let rocketWindow = 0

let rocketNoseCone = document.createElement("img");
rocketNoseCone.src = "rocketParts/spaceRocketParts_002.png"
let rocketNoseCone = 0

let rocketSideBooster = document.createElement("img");
rrocketSideBooster.src = "rocketParts/spaceRocketParts_020.png"
let rocketSideBooster = 0