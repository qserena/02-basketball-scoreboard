let homeScoreDigit = document.getElementById("home-score-digit");
let guestScoreDigit = document.getElementById("guest-score-digit");

let homeScore = 0;
let guestScore = 0;
homeScoreDigit.textContent = homeScore;
guestScoreDigit.textContent = guestScore;

function incrementHome(value) {
  homeScore += value;
  homeScoreDigit.textContent = homeScore;
}

function incrementGuest(value) {
  guestScore += value;
  guestScoreDigit.textContent = guestScore;
}
