window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) 
  {
    document.getElementById("portfolio-head").style.textShadow = "0 0 50px rgb(119, 232, 252)";
    document.getElementById("portfolio-head").style.opacity = "1";

    document.getElementById("vl-text-1").style.opacity = "0";
    document.getElementById("vl-text-2").style.opacity = "0";
  }
  else {
    document.getElementById("portfolio-head").style.textShadow = "0 0 0px rgb(119, 232, 252)";
    document.getElementById("portfolio-head").style.opacity = "0.5";

    document.getElementById("vl-text-1").style.opacity = "1";
    document.getElementById("vl-text-2").style.opacity = "1";
  }
}

//To redirect user if on small screen
let device_height = screen.height;
let device_width = screen.width;

function redirect(){
  if(device_height>660 && device_width>250){
    window.location = "www.youtube.com";
  }
}





var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 1100);

