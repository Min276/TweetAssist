  var userName;
    var input = document.getElementById('username');

    function store() {
        localStorage.setItem('storedUserName', userName);
     
    }
   // function get(){
   //  var storedValue  = localStorage.getItem('storedUserName');
   // }

    document.getElementById('username').innerHTML = "Unknown User";

    input.addEventListener('click', function(){
	  userName = prompt("What's your first name?");
     
	  if (userName != null && userName.length != 0) {
     var firstOne = userName.slice(0,1);
     firstOne = firstOne.toUpperCase();
     var lastOne = userName.slice(1,userName.length);
     lastOne = lastOne.toLowerCase();
     var result = firstOne + lastOne;
     userName = result;
     store();
     // console.log("Username: " + userName);
     // document.getElementById('username').innerHTML = userName;
     var storedValue  = localStorage.getItem('storedUserName');
     userName = storedValue;
     document.getElementById('username').innerHTML = userName;
  }
	else {
		// document.getElementById('username').innerHTML = "Unknown User";
		userName = "Unknown User";
    document.getElementById('username').innerHTML = userName;
	}

});


	// if (userName == null || userName.length == 0) {
	// 	document.getElementById('username').innerHTML = "Unknown User";
	// 	userName = "Unknown User";
	// }else
	//     document.getElementById('username').innerHTML = userName;
// 	function popUpBox(){
// var tweet = prompt("What's news, " + userName + "?" + " Share your thoughts here!");
// var tweetCount = tweet.length;
// if (tweetCount > 180) {
//   	 alert("You have entered " + tweetCount +" characters. You have written (" + (180 - tweetCount) + ") characters.");
//   	 alert("So, the phrase we allow you is: " + tweet.slice(0,180))

//   }else{
// alert("You have entered " + tweetCount +" characters. You have " + (180 - tweetCount) + " characters remaining.");}
var tweet = document.getElementById("textmessage").value;

var tweetCount = tweet.length;
var textCount = document.getElementById("statusCount");
var textReCount = document.getElementById("remainCount");
textCount.innerHTML = tweetCount + " characters entered | ";
textReCount.innerHTML = (280 - tweetCount) + " characters remaining";

document.getElementById("textmessage").oninput = () => {
var tweet = document.getElementById("textmessage").value;

var tweetCount = tweet.length;
var textCount = document.getElementById("statusCount");
var textReCount = document.getElementById("remainCount");
textCount.innerHTML = tweetCount + " characters entered | ";
textReCount.innerHTML = (280 - tweetCount) + " characters remaining";
$('.highlighter').show();
 if (tweetCount >= 280) {
    textReCount.style.color = "red";
    document.getElementById("short").style.display = "unset";

 }else if (tweetCount >= 260) {
    textReCount.style.color = "orange";
    document.getElementById("short").style.display = "none";

 }else{
    textReCount.style.color = "#2196f3";
    document.getElementById("short").style.display = "none";

 }


// }
}

 
// tweet = tweetCount.slice(0,280);
//     function doCheck(){
//     	// var tweet = prompt("What's news, " + userName + "?" + " Share your thoughts here!");
//     	var tweet = document.getElementById("textmessage").value;
// var tweetCount = tweet.length;
// textCount.innerHTML = tweetCount + " characters entered | ";
// textReCount.innerHTML = (280 - tweetCount) + " characters remaining";
// tweetCount.slice(0,280);
// if (tweetCount > 280) {
//   	 alert("You have entered " + tweetCount +" characters. You have written (" + (280 - tweetCount) + ") characters.");
//   	 alert("So, the phrase we allow you is: " + tweet.slice(0,280))

//   }else{
// alert("You have entered " + tweetCount +" characters. You have " + (280 - tweetCount) + " characters remaining.");}
//     }


function doCut(){
  	var tweet = document.getElementById("textmessage").value;
    var tweetCount = tweet.length;
    if (tweetCount >= 280) {
    	alert("280 Characters Tweet: " + tweet.slice(0,280));
        // tweet = tweet.slice(0,280);
    }
}

function doCopy(){
  document.getElementById("textmessage").select();
  document.execCommand("copy");
}

function doClear(){
    document.getElementById("textmessage").value = "";
    $('.highlighter').hide();
  textCount.innerHTML = tweetCount + " characters entered | ";
textReCount.innerHTML = (280 - tweetCount) + " characters remaining";
textReCount.style.color = "#2196f3";
document.getElementById("short").style.display = "none";
location.reload(true);
}

function changeNight(){

   var back = document.getElementById("backg");
   if (back.style.backgroundColor != "black") {

   back.style.background = "black";
   var textbox = document.getElementById("textmessage");
   textbox.style.background = "black";
   textbox.style.color = "white";
   textbox.style.boxShadow = "none";

   var userBox = document.getElementById("username");
   userBox.style.color = "black";
   userBox.style.background = "#e8ff08";

   var speaker = document.getElementById('change');
   speaker.style.background = "black";

   var button = document.getElementById('submit');
   button.style.borderColor = '#ffeb3b';
   button.style.background = "black";

   var copy = document.getElementById('copy');
   copy.style.borderColor = '#ffeb3b';
   copy.style.background = "black";
   var del = document.getElementById('delete');
   del.style.borderColor = '#ffeb3b';
   del.style.background = "black";

   var date = document.getElementById("showDate");
   date.style.background = "black";
   date.style.color = "white";

   var mode = document.getElementById("nightmode");
   mode.innerHTML = '<i class="fa fa-fw fa-sun" style="font-size:17px;color:white"></i>';
   }else{
   back.style.backgroundColor = "white";
   var textbox = document.getElementById("textmessage");
   textbox.style.background = "white";
   textbox.style.color = "black";
   textbox.style.boxShadow = "0 0.0625rem 0.375rem 0 #908b8b";

   var userBox = document.getElementById("username");
   userBox.style.color = "white";
   userBox.style.background = "#607d8b";

   var speaker = document.getElementById('change');
   speaker.style.background = "#03a9f4";
 
   var button = document.getElementById('submit');
   button.style.borderColor = ' #673ab7';
   button.style.background = "#03a9f4";

   var copy = document.getElementById('copy');
   copy.style.borderColor = ' #673ab7';
   copy.style.background = "#03a9f4";

   var del = document.getElementById('delete');
   del.style.borderColor = ' #673ab7';
   del.style.background = "#03a9f4";

   var date = document.getElementById("showDate");
   date.style.background = "white";
   date.style.color = "black";

   var mode = document.getElementById("nightmode");
   mode.innerHTML = '<i class="fa fa-fw fa-moon-o" style="font-size:17px;color:white"></i>';
   }
  


}

//change twitter url based on screen size
  const screen = window.matchMedia( "(max-width: 767px)");

    if(screen.matches) {
    document.getElementById("goTweet").action = "https://twitter.com/home";
    document.getElementById("textmessage").name = "status" ;
    } else {
    document.getElementById("goTweet").action = "https://twitter.com/intent/tweet";
    document.getElementById("textmessage").name = "text" ;
    }


$(document).ready(function() {
    $("textarea").hashtags();        
});

  document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("short").style.display = "none";
var d = new Date();

var day = d.getDate();

var output = ((''+day).length<2 ? '0' : '') + day;
    var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

d = new Date();
x = d.getMonth();


document.getElementById('showDate').innerHTML = '<i class="fa fa-calendar"></i> '  + output;

var popup = document.getElementById("showDate");
  popup.addEventListener('click', function(){

    if (popup.value != months) {
    popup.innerHTML = months[x];
    }else{
    popup.innerHTML = '<i class="fa fa-calendar"></i> '  + output;
    }

  });


  });
