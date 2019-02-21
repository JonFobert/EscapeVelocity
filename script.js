//x 913 to 940   y 492 to 84

const canvas = document.querySelector('.animation');
const context = canvas.getContext('2d');

const splashQuestion = document.querySelector('.splash-question');
const form = document.querySelector('form');
const habitField = document.querySelector('#habit-field')
const completedButton = document.querySelector('.completed-button');

document.addEventListener('DOMContentLoaded', function() {
   splashQuestion.classList.add("no-task-entered")
}, false);

//Handling input and displaying the input at the bottom of the screen

let userHabit = ''

document.querySelector('.first-card').addEventListener('click', e => {
	document.querySelector('.first-card').classList.add('hidden')
	document.querySelector('.second-card').classList.remove('hidden')
});

document.querySelector('.second-card').addEventListener('click', e => {
	document.querySelector('.second-card').classList.add('hidden')
	document.querySelector('.third-card').classList.remove('hidden')
});

document.querySelector('.third-card').addEventListener('click', e => {
	document.querySelector('.third-card').classList.add('hidden')
	document.querySelector('.fourth-card').classList.remove('hidden')
});

document.querySelector('.fourth-card').addEventListener('click', e => {
	document.querySelector('.fourth-card').classList.add('hidden')
	document.querySelector('.fifth-card').classList.remove('hidden')
});


form.addEventListener("submit", e => {
	e.preventDefault();
	userHabit = habitField.value;
	splashQuestion.style.display = "none";
	createHabitEl();
	document.querySelector('.page-heading').classList.remove('heading-not-shown')
	document.querySelector('.page-heading').classList.add('heading-shown')
	document.querySelector('.completed-button').classList.add('button-shown')
	document.querySelector('.habit-heading').classList.add('habit-heading-shown')

})

function dayUpdate() {
	document.querySelector('.test').firstChild.nodeValue = `Day ${DayCounter}`
}

function createHabitEl() {
	let headingNode = document.querySelector('.habit-heading');
	let headingTextNode = document.createTextNode(`Did you ${userHabit} today?`)
	headingNode.appendChild(headingTextNode);
	//let valueNode = document.querySelector('.new-habit-value');
	//let valueTextNode = document.createTextNode(`${userHabit}`)
	//valueNode.appendChild(valueTextNode);
}

//create background image elements

let backgroundImg = document.createElement("img");
backgroundImg.src = "otherImages/backgroundNew.png";

let fenceImg = document.createElement("img");
fenceImg.src = "otherImages/fence.png";

let fuelEFImg = document.createElement("img");
fuelEFImg.src = "otherImages/EF.png"

//create rocket image elements

let nozzleImg = document.createElement("img");
nozzleImg.src = "rocketParts/nozzle.png"

let frameBottomImg = document.createElement("img");
frameBottomImg.src = "rocketParts/frameBottom.png"

let frameMiddleImg = document.createElement("img");
frameMiddleImg.src = "rocketParts/frameMiddle.png"

let frameTopImg = document.createElement("img");
frameTopImg.src = "rocketParts/frameTop.png"

let rocketWindowImg = document.createElement("img");
rocketWindowImg.src = "rocketParts/window.png"

let noseConeImg = document.createElement("img");
noseConeImg.src = "rocketParts/noseCone.png"

let sideBoosterImg = document.createElement("img");
sideBoosterImg.src = "rocketParts/sideBooster.png"



//Define the location of the images for drawing.

	let nozzle = {
		image: nozzleImg,
		width: 68,
		height: 40,
		currentXPos: 100,
		currentYPos: -200,
		firstFinalXPos: 100,
		firstFinalYPos: 450,
		secondFinalXPos: 450,
		secondFinalYPos: 450
	};

	let frameBottom = {
		image: frameBottomImg,
		width: 68,
		height: 64,
		currentXPos: 125,
		currentYPos: -200,
		firstFinalXPos: 125,
		firstFinalYPos: 450,
		secondFinalXPos: 450,
		secondFinalYPos: 386
	};

	 let frameMiddleLower = {
	 	image: frameMiddleImg,
		width: 68,
		height: 64,
		currentXPos: 150,
		currentYPos: -200,
		firstFinalXPos: 150,
		firstFinalYPos: 450,
		secondFinalXPos: 450,
		secondFinalYPos: 322
	};

	let frameMiddleUpper = {
		image: frameMiddleImg,
		width: 68,
		height: 64,
		currentXPos: 175,
		currentYPos: -200,
		firstFinalXPos: 175,
		firstFinalYPos: 450,
		secondFinalXPos: 450,
		secondFinalYPos: 258
	};

	let frameTop = {
		image: frameTopImg,
		width: 68,
		height: 64,
		currentXPos: 200,
		currentYPos: -200,
		firstFinalXPos: 200,
		firstFinalYPos: 450,
		secondFinalXPos: 450,
		secondFinalYPos: 194
	};

	let rocketWindow = {
		image: rocketWindowImg,
		width: 28,
		height: 28,
		currentXPos: 225,
		currentYPos: -200,
		firstFinalXPos: 225,
		firstFinalYPos: 450,
		secondFinalXPos: 470,
		secondFinalYPos: 210
	};

	let noseCone = {
		image: noseConeImg,
		width: 68,
		height: 78,
		currentXPos: 250,
		currentYPos: -200,
		firstFinalXPos: 250,
		firstFinalYPos: 450,
		secondFinalXPos: 450,
		secondFinalYPos: 116
	};

	let leftSideBooster = {
		image: sideBoosterImg,
		width: 29,
		height: 170,
		currentXPos: 275,
		currentYPos: -200,
		firstFinalXPos: 275,
		firstFinalYPos: 450,
		secondFinalXPos: 422,
		secondFinalYPos: 315
	};

	let middleSideBooster = {
		image: sideBoosterImg,
		width: 29,
		height: 170,
		currentXPos: 300,
		currentYPos: -200,
		firstFinalXPos: 300,
		firstFinalYPos: 450,
		secondFinalXPos: 468,
		secondFinalYPos: 296
	}

	let rightSideBooster = {
		image: sideBoosterImg,
		width: 29,
		height: 170,
		currentXPos: 325,
		currentYPos: -200,
		firstFinalXPos: 325,
		firstFinalYPos: 450,
		secondFinalXPos: 516,
		secondFinalYPos: 315	
	}

let imagesDimAndPos = [nozzle, frameBottom, frameMiddleLower, frameMiddleUpper, 
					   frameTop, rocketWindow, noseCone, leftSideBooster,
					   middleSideBooster, rightSideBooster];

let currentPartIndex = 0;
let DayCounter = 1;
let fuelLevel = 0
let daysFuelAdded = 0
let runAnimation = true;
let alreadyAnimatedImages = [];
let startingYPos = -150;
let secondStartingYPos = 450;
let partFirstDroppedDown = false;
let partRaisedUp = false;



//Draw the next frame. To do this you first need to draw the previously drawn parts in their final positions.
//Then, if the current part has reached it's final position draw it at it's final position and add it to the previously
//drawn images. Finally, set the variables up for the next image.
function drawImageDropFrame() {
	if (currentPartIndex < imagesDimAndPos.length && partFirstDroppedDown == false) {
		if (imagesDimAndPos[currentPartIndex].currentYPos >= imagesDimAndPos[currentPartIndex].firstFinalYPos) {
			firstDrawPartAtEndPosition()
		} else {
		firstDrawPartGoingDown();
		}
	} else {
		if (imagesDimAndPos[currentPartIndex].currentYPos >= imagesDimAndPos[currentPartIndex].secondFinalYPos && partRaisedUp == true) {
			drawPartAtEndPosition();
		} else {
			if (imagesDimAndPos[currentPartIndex].currentYPos > -150 && partRaisedUp == false) {
				drawPartGoingUp();
			} else {
				partRaisedUp = true
				drawPartGoingDown();
			}
		}
	}
}




function drawParts() {
	imagesDimAndPos.forEach(imageObject => {
		context.drawImage(imageObject.image, 
						  0, 0, imageObject.width, imageObject.height,
						  imageObject.currentXPos, imageObject.currentYPos, 
						  imageObject.width, imageObject.height);
	})
}


function drawFrame() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawBackground();
	if (currentPartIndex < imagesDimAndPos.length && partFirstDroppedDown == false) {
		//if the parts is going down for the first time and it's current y position is 
		//greater than or equal to it's prescribed final position draw the part at the end position
		if (imagesDimAndPos[currentPartIndex].currentYPos  >= imagesDimAndPos[currentPartIndex].firstFinalYPos) {
			console.log(1)
			imagesDimAndPos[currentPartIndex].currentYPos = imagesDimAndPos[currentPartIndex].firstFinalYPos;
			drawParts();
			drawNonBackgroundImages();
			runAnimation = false;
			currentPartIndex++;
			DayCounter++;
			dayUpdate();
			if (currentPartIndex == (imagesDimAndPos.length)) {
				console.log(2)
				currentPartIndex = 0;
				partFirstDroppedDown = true;
			}
			else {

			}

		} else {
		console.log(3)
		//otherwise advance the part down and draw
		imagesDimAndPos[currentPartIndex].currentYPos += 6;
		drawParts();
		drawNonBackgroundImages();
		}
	} else if (currentPartIndex < imagesDimAndPos.length) {
		//if the parts is going down for the second time and it's current y position is 
		//greater than or equal to it's prescribed final position draw the part at the end position
		if (imagesDimAndPos[currentPartIndex].currentYPos >= imagesDimAndPos[currentPartIndex].secondFinalYPos && partRaisedUp == true) {
			console.log(4)
			imagesDimAndPos[currentPartIndex].currentYPos = imagesDimAndPos[currentPartIndex].firstFinalYPos;
			drawParts();
			drawNonBackgroundImages();
			runAnimation = false;
			currentPartIndex++;
			DayCounter++;
			dayUpdate();
			partRaisedUp = false;
		} else {
			//if the part is going up and hasn't reached the top
			if (imagesDimAndPos[currentPartIndex].currentYPos > -200 && partRaisedUp == false) {
				console.log(5)
				imagesDimAndPos[currentPartIndex].currentYPos -= 6;
				drawParts();
				drawNonBackgroundImages();
			} else {
			//if it has reached the top
				console.log(6)
				partRaisedUp = true;
				imagesDimAndPos[currentPartIndex].currentYPos += 6;
				imagesDimAndPos[currentPartIndex].currentXPos = imagesDimAndPos[currentPartIndex].secondFinalXPos
				drawParts();
				drawNonBackgroundImages();
			}
		}
	} else {
	  	drawAddFuel();
	  	drawParts();
		drawNonBackgroundImages()
		DayCounter++;
		dayUpdate()
		daysFuelAdded++;
		runAnimation = false;
	}
}


function drawNonBackgroundImages() {
	context.drawImage(fenceImg,
  				  0, 0, 446, 113,
  				  259, 423, 446, 113)
	context.drawImage(fuelEFImg, 
				  0, 0, 960, 540,
				  0, 0, 960, 540)
}




function firstDrawPartGoingDown() {
	drawFirstPreviouslyDroppedImages();
	//draw the currrent part in it's next position
	context.drawImage(imagesDimAndPos[currentPartIndex].image,
				  //source rectangle
				  0, 0, imagesDimAndPos[currentPartIndex].width, imagesDimAndPos[currentPartIndex].height,
				  //destination rectange
				  imagesDimAndPos[currentPartIndex].firstFinalXPos, imagesDimAndPos[currentPartIndex].currentYPos, 
				  imagesDimAndPos[currentPartIndex].width, imagesDimAndPos[currentPartIndex].height);
	imagesDimAndPos[currentPartIndex].currentYPos+= 6
	//draw the fence
	context.drawImage(fenceImg,
  				  0, 0, 446, 113,
  				  259, 423, 446, 113)
	context.drawImage(fuelEFImg, 
				  0, 0, 960, 540,
				  0, 0, 960, 540)
}

function firstDrawPartAtEndPosition() {
	drawFirstPreviouslyDroppedImages();
	context.drawImage(imagesDimAndPos[currentPartIndex].image,
			  //source rectangle
			  0, 0, imagesDimAndPos[currentPartIndex].width, imagesDimAndPos[currentPartIndex].height,
			  //destination rectange
			  imagesDimAndPos[currentPartIndex].firstFinalXPos, imagesDimAndPos[currentPartIndex].firstFinalYPos, 
			  imagesDimAndPos[currentPartIndex].width, imagesDimAndPos[currentPartIndex].height);
	context.drawImage(fenceImg,
			  0, 0, 446, 113,
			  259, 423, 446, 113)
	context.drawImage(fuelEFImg, 
				  0, 0, 960, 540,
				  0, 0, 960, 540)
	runAnimation = false;
	alreadyAnimatedImages.push(imagesDimAndPos[currentPartIndex]);
	currentPartIndex++
	DayCounter++
	dayUpdate()
	if (DayCounter == 11) {
		currentPartIndex = 0;
		partFirstDroppedDown = true;
	}
}

//You need a spection previously dropped images. This will draw the part in it's last know location

	//First lift the first part up from it's position. Then drop it down at it's new postion.
function drawPartGoingUp() {
	drawPreviouslyDroppedImages()
	context.drawImage(imagesDimAndPos[currentPartIndex].image,
					  //source rectangle
					  0, 0, imagesDimAndPos[currentPartIndex].width, imagesDimAndPos[currentPartIndex].height,
					  //destination rectange
					  imagesDimAndPos[currentPartIndex].firstFinalXPos, imagesDimAndPos[currentPartIndex].currentYPos, 
					  imagesDimAndPos[currentPartIndex].width, imagesDimAndPos[currentPartIndex].height);
	context.drawImage(imagesDimAndPos[currentPartIndex].image,
						  //source rectangle
						  0, 0, imagesDimAndPos[currentPartIndex].width, imagesDimAndPos[currentPartIndex].height,
						  //destination rectange
						  imagesDimAndPos[currentPartIndex].secondFinalXPos, imagesDimAndPos[currentPartIndex].currentYPos, 
						  imagesDimAndPos[currentPartIndex].width, imagesDimAndPos[currentPartIndex].height);
			imagesDimAndPos[currentPartIndex].currentYPos-= 6
			//draw the fence
			context.drawImage(fenceImg,
		  				  0, 0, 446, 113,
		  				  259, 423, 446, 113)
			context.drawImage(fuelEFImg, 
						  0, 0, 960, 540,
						  0, 0, 960, 540)
};

function drawPartGoingDown() {
	context.clearRect(0, 0, canvas.width, canvas.height)
	drawBackground();
	//Move the current part then draw all parts


	if (currentPartIndex < (2 * imagesDimAndPos.length)) {
		drawImageDropFrame();
	} else {
		drawAddFuel()
	}
	//draw the already existing parts in their final positions
		drawPreviouslyDroppedImages();
		//draw the currrent part in it's next position
		context.drawImage(imagesDimAndPos[currentPartIndex].image,
					  //source rectangle
					  0, 0, imagesDimAndPos[currentPartIndex].width, imagesDimAndPos[currentPartIndex].height,
					  //destination rectange
					  imagesDimAndPos[currentPartIndex].secondFinalXPos, imagesDimAndPos[currentPartIndex].currentYPos, 
					  imagesDimAndPos[currentPartIndex].width, imagesDimAndPos[currentPartIndex].height);
		imagesDimAndPos[currentPartIndex].currentYPos+= 6
		//draw the fence
		context.drawImage(fenceImg,
	  				  0, 0, 446, 113,
	  				  259, 423, 446, 113)
		context.drawImage(fuelEFImg, 
					  0, 0, 960, 540,
					  0, 0, 960, 540)
}

function drawPartAtEndPosition() {
	drawPreviouslyDroppedImages();
		context.drawImage(imagesDimAndPos[currentPartIndex].image,
				  //source rectangle
				  0, 0, imagesDimAndPos[currentPartIndex].width, imagesDimAndPos[currentPartIndex].height,
				  //destination rectange
				  imagesDimAndPos[currentPartIndex].secondFinalXPos, imagesDimAndPos[currentPartIndex].secondFinalYPos, 
				  imagesDimAndPos[currentPartIndex].width, imagesDimAndPos[currentPartIndex].height);
		context.drawImage(fenceImg,
				  0, 0, 446, 113,
				  259, 423, 446, 113)
		context.drawImage(fuelEFImg, 
					  0, 0, 960, 540,
					  0, 0, 960, 540)
		runAnimation = false;
		alreadyAnimatedImages.push(imagesDimAndPos[currentPartIndex]);
		currentPartIndex++
		DayCounter++
		dayUpdate() 
}

function drawFirstPreviouslyDroppedImages() {
	alreadyAnimatedImages.forEach(image => {
		context.drawImage(image.image,
				  //source rectangle
				  0, 0, image.width, image.height,
				  //destination rectange
				  image.firstFinalXPos, image.firstFinalYPos, 
				  image.width, image.height
		)
	});
}

function drawPreviouslyDroppedImages() {
	alreadyAnimatedImages.forEach(image => {
		context.drawImage(image.image,
				  //source rectangle
				  0, 0, image.width, image.height,
				  //destination rectange
				  image.secondFinalXPos, image.secondFinalYPos, 
				  image.width, image.height
		)
	});
}

//x 913 to 940   y 492 to 84. 492 - 84 = 408


function drawAddFuel() {
		drawPreviouslyDroppedImages();
		context.drawImage(fenceImg,
		  				  0, 0, 446, 113,
	  					  259, 423, 446, 113)
	if (fuelLevel < (24 + daysFuelAdded * 24)) {
			context.rect(913, 492, 27, -fuelLevel)
			context.fillStyle = "red";
			context.fill();
			fuelLevel++;
			context.drawImage(fuelEFImg, 
							  0, 0, 960, 540,
							  0, 0, 960, 540)
	} else {
		context.rect(913, 492, 27, -fuelLevel)
		context.fillStyle = "red";
		context.fill();
		context.drawImage(fuelEFImg, 
		  0, 0, 960, 540,
		  0, 0, 960, 540)
		daysFuelAdded++
		runAnimation = false
	}
}

function animateNextFrame() {
	context.clearRect(0, 0, canvas.width, canvas.height)
	drawBackground();
	if (currentPartIndex < (2 * imagesDimAndPos.length)) {
		drawImageDropFrame();
	} else {
		drawAddFuel()
	}
}

function drawBackground() {
	imagesLoaded = true
	context.drawImage(backgroundImg, 
					  0, 0, 960, 540,
					  0, 0, 960, 540)
	context.drawImage(fenceImg,
					  0, 0, 446, 113,
					  259, 423, 446, 113)
	context.drawImage(fuelEFImg, 
			  0, 0, 960, 540,
			  0, 0, 960, 540)
}

//When the completed button is pressed draw the next image.
function drawcurrentPartIndex() {
	//if (currentPartIndex < imagesDimAndPos.length + 10) {
		runAnimation = true;
		requestAnimationFrame(main)
	//}
}

let imagesLoaded = false
//This is dangerous, because if all the images are not yet loaded the button will not do anything.
//Consider a loading screen or a way to disable input.
completedButton.addEventListener('click', e => {
	if (imagesLoaded && DayCounter < 28) {
		drawcurrentPartIndex()

	}
})
//adapted from https://stackoverflow.com/questions/31299509/call-a-function-when-html5-canvas-is-ready
//because the images load asychronously, wait for all the images to load first
//keeping this information up to date in two separate places is bad design.
//See if you can find some other way to do this

function main(time) {
	if(runAnimation) {
		requestAnimationFrame(main);
		//deltaTime = time - lastTime;
		//lastTime = time;
		drawFrame();
	}
}

var images = [
			'otherImages/backgroundNew.png',
			'otherImages/fence.png',
			'otherImages/EF.png',
			'rocketParts/nozzle.png',
			'rocketParts/frameBottom.png',
            'rocketParts/frameMiddle.png',
            'rocketParts/frameTop.png',
            'rocketParts/window.png',
            'rocketParts/noseCone.png',
            'rocketParts/sideBooster.png'
          ];
var imagesLoading = images.length;

// Image loader.
var loadImage = function(i) {
 var img = new Image();
 img.onload = function() {
   images[i] = img;
   --imagesLoading;
   // Call the complete callback when all images loaded.
   if (imagesLoading === 0) {
     drawBackground();
   }
 };
 img.src = images[i];
};

// Start to load all images
var i;
for(i = 0; i < imagesLoading; ++i) {
	loadImage(i);
}