// display current day of the week

// function showMyDetails(testid) {
//   let info = testid.getAttribute("data-testid")
//   document.querySelectorAll("li").innerHTML = info;
// }

// showMyDetails(info);

// Indicate the current day of the week
function displayToday() {
  const today = new Date();
  const dayOfTheWeek = today.toDateString();
  document.getElementById("today").innerHTML = dayOfTheWeek;
}

displayToday();

// Display the current UTC time in milliseconds.
// function displayTime() {
//   const time = new Date();
//   const dayOfTheWeek = today.toDateString();
//   document.getElementById("today").innerHTML = dayOfTheWeek;
// }

// displayTime();

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