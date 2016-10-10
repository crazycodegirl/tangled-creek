// global variables

var noon = 12;
var evening = 18; // 6PM

var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var updateClock = function()
{
  var time = new Date().getHours();

  var lolcat = document.getElementById('lolcat');
  var message = document.getElementById('timeEvent');

  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

if (time == partyTime)
{
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
}
else if (time == napTime)
{
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME...";
}
else if (time == lunchTime)
{
     image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
     messageText = "IZ NOM NOM NOM TIME!!";
}
else if (time == wakeUpTime)
{
     image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
     messageText = "IZ TIME TO GETTUP.";
}
else if (time < noon)
{
     messageText = "Good morning!";
}
else if (time >= evening)
{
     messageText = "Good Evening!";
}
else
{
     messageText = "Good afternoon!";
}

lolcat.src = image;
message.innerText = messageText;

showCurrentTime();
}

var showCurrentTime = function()
{
// display the string on the webpage
     var clock = document.getElementById('clock');
     var currentTime = new Date();
     var hours = currentTime.getHours();
     var minutes = currentTime.getMinutes();
     var seconds = currentTime.getSeconds();
     var meridian = "AM";

     // Set Hours
     if (hours >= noon)
     {
          meridian = "PM";
     }
     if (hours > noon)
     {
          hours = hours - 12;
     }

     // Set Minutes
     if (minutes < 10)
     {
          minutes = "0" + minutes;
     }

     // Set Seconds
     if (seconds < 10)
     {
          seconds = "0" + seconds;
     }

     // put together the string that displays the time
     var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

     clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);

var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var partyEvent = function()
{
    if (partyTime < 0)
    {
        partyTime = new Date().getHours();
        partyTimeButton.innerText = "Party Over";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partyTime = -1;
        partyTimeButton.innerText = "PARTY TIME!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

var wakeUpEvent = function()
{
  wakeUpTime = wakeUpTimeSelector.value;
}

var lunchTimeEvent = function()
{
  lunchTime = lunchTimeSelector.value;
}

var napTimeEvent = function()
{
  napTime = napTimeSelector.value;
}

partyTimeButton.addEventListener('click', partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchTimeEvent);
napTimeSelector.addEventListener('change', napTimeEvent);

partyEvent();
