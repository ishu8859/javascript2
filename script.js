// Program 1: Toggle Visibility
function toggleVisibility() {
  var box = document.getElementById("box");
  box.style.display = (box.style.display === "none") ? "block" : "none";
}

// Program 2: Simple Calculator
function calculate() {
  var calculatorInput = document.getElementById("calculatorInput").value;
  var result = eval(calculatorInput);
  document.getElementById("calculatorInput").value = result;
}

// Program 3: Random Number Generator
function generateRandom() {
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById("randomNumber").innerHTML = "Random Number: " + randomNumber;
}

// Program 4: Text Length Counter
function countCharacters() {
  var textInput = document.getElementById("textInput").value;
  document.getElementById("charCount").innerHTML = "Characters: " + textInput.length;
}

// Program 5: Color Changer
function changeColor() {
  var coloredBox = document.getElementById("coloredBox");
  var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  coloredBox.style.backgroundColor = randomColor;
}

// ... Previous JavaScript code ...

// Program 6: Image Slider
var currentSlide = 1;
var totalSlides = 3; // Assuming there are 3 images in the slider

function nextSlide() {
  if (currentSlide < totalSlides) {
    currentSlide++;
  } else {
    currentSlide = 1;
  }
  document.getElementById("sliderImage").src = "image" + currentSlide + ".jpg";
}

function previousSlide() {
  if (currentSlide > 1) {
    currentSlide--;
  } else {
    currentSlide = totalSlides;
  }
  document.getElementById("sliderImage").src = "image" + currentSlide + ".jpg";
}

// Program 7: Date and Time
function displayDateTime() {
  var currentDateTime = new Date();
  document.getElementById("dateTime").innerHTML = "Current Date and Time: " + currentDateTime;
}
setInterval(displayDateTime, 1000); // Update every second

// Program 8: Click Counter
var clickCount = 0;

function countClicks() {
  clickCount++;
  document.getElementById("clickCount").innerHTML = "Click Count: " + clickCount;
}

// ... Additional Programs ...
