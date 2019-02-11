const splashQuestion = document.querySelector('.splash-question');
const form = document.querySelector('form');
const habitField = document.querySelector('#habit-field')

document.addEventListener('DOMContentLoaded', function() {
   splashQuestion.classList.add("no-task-entered")
}, false);



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
