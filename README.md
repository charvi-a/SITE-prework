# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Charvi Attri**

Time spent: **4** hours spent in total

Link to project: https://glitch.com/edit/#!/adjoining-boundless-son

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/fUJdjbC.gif)
![](https://i.imgur.com/zabrMje.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

   I used w3 schools and the Mozilla Javascript documentation.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

   The challenge I encountered while working on this submission was to add the ticking clock feature. While working on setting up a timer, I had completed the task of displaying the remaining time left to the user using the startTimer() function. However, when I played the game for the first time to test the timer, I realized that once the time was up and I tried to play the game again, the timer started from 0 minutes and 0 seconds and it displayed negative values for the time left since my code was subtracting the seconds from 0.

   I overcame this problem by looking at my code closely and making the necessary changes in the script.js file. I reset the timer so that it would start with the initial time again each time the game is stopped and started. To do this, I made a resetTimer() function which reset the timer whenever the game is stopped.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

   The questions I have about web development are:

   • What makes a good website? What are some important tips to remember while developing a web application?

   • What are things to avoid in a web application?

   • How can I make the web application easier and enjoyable for the user?

   • What are the ways in which I can keep the user engaged?

   • How can we reduce the use of global variables in the code while developing a web application?

   • How to create a web application which is simple and easy to navigate, is clutter free and have visual appeal?

   • How can we better test our web application other than just using the application ourselves to test so that we do not miss different scenarios?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

   I would have added the following features to make the application more interesting and engaging:

  - I could make a tracker to show how much the user progresses each day. I will also add different levels for the user and award points based on level of achievement. Levels are based on response speed of the user and complexity involved.

  - I could also provide insights into what the current progress tells about the user. Comparison with similar users can be used as a benchmark and motivator for the user.

  - Users can have option to play different audios while playing the game depending on their preference. For example, there could be an option for playing calming audio, instrumental music etc. This feature would make the user want to play more if they like to listen to the audio.

  - Reminder to play at scheduled time selected by the user.

  - I will also research and add suggestions for users to improve memory including exercise, diet and lifestyle.




## License

    Copyright Charvi Attri

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.