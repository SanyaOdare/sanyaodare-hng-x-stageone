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

  // current utc time
  const utcTime = new Date(Date.UTC(0, 0, 0, 0, 0, 0));
  const newUTCTime =  utcTime.toUTCString();
  currentUTCTime.dataset.testid = newUTCTime;

  // track
  track.dataset.testid = "Frontend";

  // Github URL
  // githubURL.dataset.testid = "<a href="https://github.com/SanyaOdare" />"
}

displayProfileInfo();

/*
Requirements:

Slack Name:
Display your Slack name prominently.
Attribute: data-testid="slackUserName"
Slack Display Picture:
Showcase your Slack profile picture.
The image's alt attribute should be your Slack username.
Attribute: data-testid="slackDisplayImage"
Current Day of the Week:
Indicate the current day of the week (e.g., Monday, Tuesday).
Attribute: data-testid="currentDayOfTheWeek"
Current UTC Time:
Display the current UTC time in milliseconds.
Attribute: data-testid="currentUTCTime"
Track:
Mention your track (e.g Frontend).
Attribute: data-testid="myTrack"
GitHub URL:
Provide a clickable link to your GitHub repository where the source code for this task resides.
Attribute: data-testid=“githubURL”

*/