const userName = document.querySelector("#username");
const currentDayOfTheWeek = document.querySelector("#day-of-the-week");
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
const currentUTCTime = document.querySelector("#current-utc-time"); 
const track = document.querySelector("#track");
const githubURL = document.querySelector("#github-url");

function displayProfileInfo() {
  userName.dataset.testid = "SanyaOdare";

  // current day of the week
  const newDay = new Date();
  const dayOfTheWeek = weekdays[newDay.getDay()];
  currentDayOfTheWeek.dataset.testid = dayOfTheWeek;
  
  // current UTC Time
  const hours = newDay.getUTCHours();
  const minutes = newDay.getUTCMinutes();
  const seconds = newDay.getUTCSeconds();
  const milliseconds = newDay.getUTCMilliseconds();

  const utcNow = `${hours}:${minutes}:${seconds}.${milliseconds}`;

  currentUTCTime.dataset.testid = utcNow;

  // setInterval(displayProfileInfo, 1000);
  // ------------------------------------------

  // track
  track.dataset.testid = "Frontend";

  // Github URL
  githubURL.dataset.testid = "My Github Profile"
}

displayProfileInfo();
