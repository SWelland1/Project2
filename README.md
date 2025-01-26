# Higher or Lower?

Higher or Lower is an interactive game which consists of 5 cards. The aim of the game is to guess if the number on the next card will be Higher or Lower than the previous Cards number. If you can guess all 4 Cards successfully you complete the game

The site can be accessed from this [link](https://swelland1.github.io/Project2/)

![Responsive Mock Up](images/Am%20I%20Resposive.png)

## Overview

Higher or Lower consists of 3 sections which link together to control the game;
- **Start-Section**: Contains 2 buttons the first allowing you to play the game and the second with instructuins on how to play the game.
- **Game-Section**: Contains the game, buttons and instructions.
- **Results-Section**: Contains a message to congratulate the user when they complete the game.
- **How-To-Play-Modal**: Window displaying instructions on 'how to play' the game in both the start and game sections.

## Technologies Used

- **JQuery**: Framework that provides convenient tools to handle events and DOM manipulation.
- **CSS**: Layout and Styling to the game.
- **HTML**: Language used to structure and layout game base.
- **JavaScript**: Interactive element prrovided to the game.
- **Balsamiq**: Wireframe creation.
- **Bootstrap**: Pre-designed features for layouts.
- **Google Fonts**: Library of fonts.
- **FontAwesome**: Library of icons.
- **GitHub Pages**: Website Deployment.
- **GitHub**: Platform that hosts the code of the website.
- **GitPod**: Tool enabling code to be written and edited.
- **Google Chrome Developer Tools**: Teating and Troubleshooting.


## User Experience Design

### Strategy

#### User Goals

* A simple game that brings fun ti the User playing.

#### Site Owner Goals

* A game that is simple that any users can enjoy multiple times.

#### User Stories

##### First Time Visitor Goals:

* Navigation is easy and playing the game can be done in under 5 pressed buttons.
* Rules of the game can be found on each page and understood.
* Visual actions for next move in the game.

##### Returning and Frequent Visitor Goals:

* Playing the game for the first time or multiple times should be easy and quick 
* Starting a New game should be straightforward 1 button click

### Scope

#### Existing Features

##### General

* A favicon is displayed helping to find the correct page if multiple tabs are open in the browser.

![Favicon screen shot](images/Favicon.png)

##### Header

![Header desktop screen shot](images/Header.png)

* Header reads 'Higher or Lower?'
* Visable on every page displayed.
* When on a smaller screen it moves to two lines rather than one.

##### Start Section

![Start section desktop screen shot](images/Start%20Page.png)

* Consists of two buttons: 
 - 'Start Game': User to the game section .
 - 'How To Play': Opens window to 'how to play'.
* Two options are available: Jump straight into playing the game or read the instructions before starting.
* Responsive with all screen sizes, buttons fit inside the width of mobile devices.

![Start section mobile screen shot](images/Start%20Page%20Mobile.png)

##### Game Section

![Game section desktop screen shot](images/Game%20Page%20New.png)

* Consists of:
 - 'How To Play Button"
 - Text indicating the round the user is currently on. With each successfull guess the round number increases automatically.
 - Text informing the User the range of numbers available.
 - Text helping User move through the game providing instructions and updates of their progress.
 - Five boxes which are the 'cards' used for playing the game. 
 - 2 buttons Higher or Lower allowing Users to submit their guess.
 - Reset button that allows the user to reset the game.

* At the start of the game only the first card has a number shown, the other four cards habe '?' displayed. As Users make a guess the card reveals the number, the car will turn either green or red depending if the guess is correct or not.
* Buttons have a hoover effect allowing User visually to see that the button is active. If the User guess wrong the hoover and button is disabled.

![Game play screen shot](images/Game%20Lost%20(2).png)

 * When on a mobile device the cards move to fit the device.

![Game section mobile screen shot](images/Game%20Page%20Mobile%20New.png)

##### Results Section

![Results section desktop screen shot](images/Results%20Page.png)

* Consists of:
 - Message congratulation user on completing the game.
 - If User wants to play again, by clicking the 'Play Again' button it takes you back to the game section.

* Results section is compatible with all screen sizes,the text and button adjusts to all screen sizes.

##### How To Play Modal

![How to play modal desktop screen shot](images/How%20To%20Play%20Instructions%201.png) [Continued](images/How%20To%20Play%20Instructions%202.png)

* The How To Play' window, allows goal aim and instructions to be seen without leaving the screen currently displayed. 
* The 'How To Play' modal consists of:
 - A modal header containing the modal title 'Higher or Lower ?', the same as displayed on website pages, an 'x' button so the user can close the modal from the top of the modal, rather than scrolling all the way to the bottom.
 - 'Game Aim' outlines the objective of the game.
 - 'Game Layout' outlines the game before play starts.
 - 'How To Play' instructs the player how to make progress through the game.
 - The winning and losing conditions explains to the User what happens if you win or lose.
 - A modal footer containing a 'close' button so the user can exit the modal from the bottom of the modal.

![How to play modal mobile screen shot](images/h2p%20mobile1.png)
![How to play modal mobile screen shot](images/h2p%20mobile%202.png)
![How to play modal mobile screen shot](images/h2p%20mobile%203.png)

##### Reset Game Modal

![Reset game modal desktop screen shot](images/Lost%20Game%20Window.png)

* There is a message that double checks with the User that they are sure they want to restart the game.
* Consists of:
 - Header asking User if they ar esure they want to restart the game, also an 'x' button so the user can exit the modal and return to their game from the top of the modal.
 - Text informing the User if they exit all guesses will be lost.
 - A modal footer with a 'close' button, so the user can close the modal and return to their game from the bottom of the modal, and a 'reset game' button so the user can continue and reset the game if that is what they wish to do.

 
### Structure

### Skeleton

#### Wireframes

##### Desktop

- ![Start Section. Desktop Screen](images/Start%20Page%20WF.png)
- ![How To Play Modal. Desktop Screen](images/H2P%20WF.png)
- ![Game Section. Desktop Screen](images/Game%20Page%20WF.png)
- ![Reset Section. Desktop Screen](images/Lost%20Game%20WF.png)
- ![Results Section](images/Results%20Page%20WF.png)

#### Colours

![Color pallet](images/Coolars%20Pallete.png)

- The main theme colours were Black (#000) and Carrot Orange (#F39237) creating an inviting environment to play the game.
- Dark Blue (#1F01B9) was then used as border for each card to clearly define each card.
- Sky Blue (#87CEEB) was used initally as the background for each card as a constrast to the Black backgorund, making it easily readable. The cards then turn Green or Red so the user can quickly and easily tell if they were right or wrong as green is correct and red with incorrect.

#### Typography

![New Amsterdam Font](images/New%20Amsterdam%20Font.png)

- Google font's 'New Amsterdam'.

![Nunito Font](images/Nunito%20Font.png)

## Testing

### Validation

* [HTML Validator](https://validator.w3.org/) was run the page to determine any HTML errors.

![html validation](images/W3C%20vaildator.png)

* [CSS Validator](https://validator.w3.org/) was run on the style sheet and there were no errors found.

![css validation](images/css%20style%20validator.png)

* Lighthouse in Chrome Developer Tools was used for performance.

![lighthouse report](images/Start%20Page%20Lighthouse%20tresting.png)

* [JSHint](https://jshint.com/) for Javascript errors were found but didnt seem to impace the running of the code.

![JSHint validation](images/JS%20Validator.png)

### Compatibility and Responsiveness

The website was tested on Chrome, Edge and Safari browsers with no problems found.

All size devices were testing to check responsiveness.

![Start section responsive](/images/I%20Phone%2012%20Pro%20Size.png) 
![Ipad Mini](images/IPad%20Mini%20Size.png)
![Game section responsive](images/Screenshot%202025-01-26%20015338.png)
![Pixel](images/Pixel%207%20Size.png)
![How to play modal responsive](images/IPad%20Air%20Size.png)
![Airmax](images/Promax%2014%20H2P.png)
![Reset game modal responsive](images/results%20i%20pad%20mini.png)
![Reset Game Mobile](images/Reset%20Page%20Mobile%20Size.png)

Chrome developer tools was used whist design was implemented adjustments were made as errors were found.

### Manual Testing

| Feature | Action | Expected Result | Tested | Passed | Comments |
| --- | --- | --- | --- | --- | --- |
| 
| Start Section | | | | | |
| "Start Game" button | Click on the "Start Game" button | User redirected to the Game section | Yes | Yes | - |
| "How To Play" button | Click on the "How To Play" button | The "How To Play" modal appears | Yes | Yes | - |
| Hover effect | Hover over buttons | The icon changes colour | Yes | Yes | - |
| Game Section | | | | | |
| "How To Play" button | Click on the "How To Play" button | The "How To Play" modal appears | Yes | Yes | - |
| "Reset Game" button | Click on the "Reset Game" button | The "Reset Game" modal appears | Yes | Yes | - |
| "Higher" button | Click on the "Higher" button | User guess as "higher" | Yes | Yes | - |
| "Lower" button | Click on the "Lower" button | User guess as "lower" | Yes | Yes | - |
| Round number | User guesses correctly | The round number increases by 1 | Yes | Yes | - |
| Number is revealed | Click "Higher" or "Lower" buttons | Card content changes from '?' to a value | Yes | Yes | - |
| Card changes colour | Click "Higher" or "Lower" buttons | Card background changes green or red depedning if users is correct or incorrect | Yes | Yes | - |
| Instruction Box | Click "Higher" or "Lower" buttons | Text changes directing user to their next action | Yes | Yes | - |
| Results Section | Win all the rounds | User is redirected to results section | Yes | Yes | - |
| Results Section | | | | | |
| "Play Again" button | Click on the "Play Again" button | User is redirected to the game section | Yes | Yes | - |
| How To Play Modal | | | | | |
| "X" button | Click on the "X" button | The modal is closed | Yes | Yes | - |
| "Close" button | Click on the "Close" button | The modal is closed | Yes | Yes | - |
| Reset Game Modal | | | | | |
| "X" button | Click on the "X" button | The modal is closed | Yes | Yes | - |
| "Close" button | Click on the "Close" button | The modal is closed | Yes | Yes | - |
| "Reset Game" button | Click on the "Reset Game" button | The modal closes and the game is reset | Yes | Yes | - |

### Bugs

#### Solved Bugs

Bug 1:
Instruction text not appearing on Game Page, User wouldnt know how to play the game without clicking on the 'How To Play' button. 

Solution:

Manual testing and Validation from W3C showed that 'str

Bug 2:
Heading in 'How to Play' was not in bold making it difficult to read and distinguish from other text instructions.

Solution:
Manual testing and Validation from W3C showed that 'strong' was spelt incorrectly. This was changed in Index.html, the Header is now in Bold making it easier to read for the User.

#### Known Issues

None

## Deployment

### GitHub Pages

Github Pages was used to deploy the live website. The instructions to achieve this are below:

Log in (or sign up) to Github.
Find the repository for this project, Project2.
Click on the Settings link.
Click on the Pages link in the left hand side navigation bar.
In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
Click Save. Your live Github Pages site is now deployed at the URL shown.

## Local Development
# How to Fork
To fork the Silver Camper repository:

Log in (or sign up) to Github.
Go to the repository for this project, kera-cudmore/Bully-Book-Club.
Click the Fork button in the top right corner.

# How to Clone
To clone Project2 repository: https://github.com/SWelland1/Project2.git

Log in (or sign up) to GitHub.
Go to the repository for this project, sarah-welland/Silver-Camper.
Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Credits

- [Bootstrap](https://getbootstrap.com/) was used for content structure, navigation elements, buttons and forms.
- [Font Awesome](https://fontawesome.com/) was used for all icons.
- [Favicon](https://favicon.io/) was used for creating and implementing the custom favicon.
- [Miro](https://miro.com/) was used to create the flow chart.
- [JQuery](https://jquery.com/) was used to handle DOM manipulation and event handling.
- [Balsamiq](https://balsamiq.com/) was used to create the wireframes.
- [GitHub](https://github.com/) was used to store the repository.
- [Am I Responsive](https://ui.dev/amiresponsive) was used to create the mock up images.
- [Coolers](https://coolors.co/) was used to create the colour palette.
- [Google Fonts](https://fonts.google.com/) was used for all fonts.
- [Code Institute](https://codeinstitute.net/) for the knowledge to complete a project like this and to the tutors and slack community for their support and help.
- [Kiera Cudmore](https://github.com/kera-cudmore/readme-examples) READ.ME Examples
- [W3 Schools](https://www.w3schools.com/) for help with Code issues.
- [Google Developer Tools](https://developer.chrome.com/docs/devtools) for styling and responsiveness.
- [Over Stack](https://stackoverflow.com/) for help with Git navigation.


---