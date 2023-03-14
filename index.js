const year = new Date().getFullYear();
let copyright = document.querySelector('p.copyright');

copyright.innerHTML = `Copyright &#169; ${year} All Rights Reserved`;

// Play Audio
function play() {
  let audio = document.getElementById('audio');
  let gramophone = document.getElementById('gramophone');

  if (gramophone.className === 'active') {
    audio.pause();
    gramophone.style.backgroundColor = '#ad7623';
  } else {
    audio.play();
    gramophone.style.backgroundColor = '#db962f';
  }

  gramophone.classList.toggle('active');
}

//window.onload(play());//

// Countdown

// Set Countdown Date
let countdown = setInterval(function () {
  // Set Countdown Date
  let countDownDate = new Date('Oct 24, 2023 07:00').getTime();

  // Get today's date and time
  let now = new Date().getTime();

  // Find distance between now and countdown date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Set time to html
  document.querySelector('.days').innerHTML = days;
  document.querySelector('.hours').innerHTML = hours;
  document.querySelector('.minutes').innerHTML = minutes;
  document.querySelector('.seconds').innerHTML = seconds;

  // Clear interval where distance is over
  if (distance < 0) {
    clearInterval(countdown);
  }
}, 1000);
