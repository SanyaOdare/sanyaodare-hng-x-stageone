const userName = document.querySelector("#username");
userName.dataset.testid = "SanyaOdare";

// Indicate the current day of the week
const currentDayOfTheWeek = document.querySelector("#day-of-the-week");
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]
function displayToday() {  
  const newDay = new Date();
  const dayOfTheWeek = weekday[newDay.getDay()];
  // const dayOfTheWeek = today.toDateString();
  currentDayOfTheWeek.dataset.testid = dayOfTheWeek;
}

displayToday();

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