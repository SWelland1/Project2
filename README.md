# Higher or Lower?

Higher or Lower is an interactive game requiring users to guess whether the next number will be higher or lower than the previous acorss 5 cards.
The purpose is to have fun trying to complete all 4 rounds.

The site can be accessed from this [link](https://swelland1.github.io/Project2/)

![Responsive Mock Up](images/Am%20I%20Resposive.png)

## Overview

The higher or lower game consists of one html page but has three sections that are diplayed at different times as well as a modal to show the game rules:
- **Start-Section**: displays two buttons so the user can either start the game or learn how to play first.
- **Game-Section**: displays the game itself.
- **Results-Section**: section displayed when the user has successfully completed all the rounds.
- **How-To-Play-Modal**: pop up modal explaining how to play the game when the 'how to play' button is pressed in either the start or game section.

## Technologies Used

- **HTML**: Language used to provide structure of the website.
- **CSS**: Language used to provide styling and layout to the website.
- **JavaScript**: Language used to provide interactivity to the website.
- **Markdown**: Language used to write README.md.
- **JQuery**: Framework that provides convenient tools to handle events and DOM manipulation.
- **Bootstrap**: Framework for building responsive pre-desgined layouts and interactive features.
- **Balsamiq**: Tool for creating wireframes.
- **Miro**: Tool for workflow creation.
- **GitPod**: Main tool to write and edit code.
- **Git**: System for version control.
- **GitHub**: Platform that hosts the code of the website.
- **GitHub Pages**: Service used for website deployment.
- **Google Chrome Developer Tools**: Tool used for website troubleshooting and testing.
- **Google Fonts**: Library used for all fonts used.
- **FontAwesome**: Library used for all icons used.

## User Experience Design

### Strategy

#### User Goals

* To have fun playing a easy to understand and simple game.

#### Site Owner Goals

* Provide a game that both they and any visiting users can enjoy.

#### User Stories

##### First Time Visitor Goals:

* To be able to quickly and easily find the instrustions and rules of the game.
* To be able to easily and intuitively navigate and play the game.
* To have prompts throughout the game so I know what to do next.
* To have visual cues so that I know easily where I was right or wrong.

##### Returning and Frequent Visitor Goals:

* To able to start the game quickly and easily.
* To able to play agin quickly and easily when the game has been won or lost.

### Scope

#### Existing Features

##### General

* The website conisits of one html page with different sections visible at different times to keep the website size smaller and increase loading speed.
* The website has it's own custom favicon, making the site look more professional and helping the user to find the correct page if they have several tabs open in their browser.

![Favicon screen shot](images/Favicon.png)

##### Header

![Header desktop screen shot](images/Header.png)

* The header is always visible on the webpage to provide consistnecy throughout the game.
* The header consists of the game title "Higher or Lower ?" 
* The header is responsive. When on a small screen the title extends over two lines instead of one

##### Start Section

![Start section desktop screen shot](images/Start%20Page.png)

* The start section consists of two buttons: 
 - 'Start Game': which takes the user to the game section .
 - 'How To Play': which opens the how to play modal.
* This gives the user two options: to start playing the game straight away, or to learn how to play the game first.
* The start sections is compatible with all screen sizes as the button are positioned one on top of the other. They are not too wide to fit inside the width of a mobile device, and are not to too tall or spaced out so they are both visible in the device viewport together.

![Start section mobile screen shot](images/Start%20Page%20Mobile.png)

##### Game Section

![Game section desktop screen shot](images/Game%20Open1.png)

* The game section consists of:
 - 'How To Play Button"
 - A line of text indicating which round the user is currently on. This is automatically set to one at the start of each game and increases with each successful guess.
 - A line of text inofrming the user the range of numbers that are availble for the cards to hekp them make an informed guess.
 - A line of text that helps guide the user through the game by providing instructions about what they should do next and updates about their progress.
 - Five boxes which are the 'cards' used for playing the game. 
 - A higher and a lower button that allow the user to make their guess.
 - A reset button that allows the user to reset the game at any point during the game

* Initally only the first card has a number shown, the others are all marked with a '?', and the numbers get revealled one by one as the user makes guesses, adn the background turns from blue to either green or red to indicate to the user whether their guess was correct or incorrect.
* All buttons have a hover effect to ensure the user knows that they are interactive and clickable. However, the higher and lower buttons are diabled and the hover effect removed when the user guesses incorrectly, to show that the game is over.

![Game play screen shot](images/Game%20Lost%20(2).png)

 * The game section is responsive as the cards move to form three lines inside of one when on a mobile device.

![Game section mobile screen shot](images/Game%20Page.png)

##### Results Section

![Results section desktop screen shot](images/Results%20Page.png)

* The results section consists of:
 - A line of text congratulating the user on completeing the game.
 - A 'Play Again' button that takes the play back to the game section and restarts the game for them to play again.

* The results section is compatible with all screen sizes as the text and button adjusts to all screen sizes.

##### How To Play Modal

![How to play modal desktop screen shot](images/How%20To%20Play%20Instructions%201.png) [Continued](images/How%20To%20Play%20Instructions%202.png)

* The How To Play' modal provides the rules and objectives of the game without taking the user away from the screen they are currrently on, so they do not have to restart the game if they are in the middle of playing. 
* The 'How To Play' modal consists of:
 - A modal header containing the modal title 'Higher or Lower ?', which is the same as the title of the webpage for continuity, and an 'x' button so the user can exit the modal from the top of the modal.
 - The 'Objective' section that outlines the objective of the game.
 - The 'Game Set Up' section that outlines inital state of the gaem before the user starts playing.
 - The 'How To Play' section which details how the player may progress through the game.
 - The winning and losing conditions of the game which outlines how the user wins and loses the game.
 - A modal footer containing a 'close' button so the user can exit the modal from the bottom of the modal.

![How to play modal mobile screen shot](images/h2p%20mobile1.png)
![How to play modal mobile screen shot](images/h2p%20mobile%202.png)
![How to play modal mobile screen shot](images/h2p%20mobile%203.png)

##### Reset Game Modal

![Reset game modal desktop screen shot](images/Lost%20Game%20Window.png)

* The reset game modal is to double check that the user understands what happens when they reset the game to ensure that they don't lose their progress if that wasn't what they intended to do.
* The 'Reset Game' modal consists of:
 - A modal header asking the user if they are sure about reseting the game, and an 'x' button so the user can exit the modal and return to their game from the top of the modal.
 - A line of text in the modal boday informing the user that all their progress will be lost if they reset the game.
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

- The main theme colours were Argentinian Blue (#35A7FF) and Carrot Orange (#F39237) to create a loud and bright colour scheme to make the game look exciting and engaging to the user.
- Dark Blue (#1F01B9) was then used as border for each card to clearly define each card.
- Sky Blue (#87CEEB) was used initally as the background for each card to make the cards easily readable and as a neutral colour before they were truned Lime Green or Red so the user can quickly and easily tell if they were right or wrong as green is typically associated with correct and red with incorrect.

#### Typography

![New Amsterdam Font](images/New%20Amsterdam%20Font.png)

- Google font's 'New Amsterdam' was used for the headings and buttons as the block capitals look similar to the fonts used in retro games, making the website look instantly like a game so the user may quickly have a sense of the webpage's purpose.

![Nunito Font](images/Nunito%20Font.png)

- Google font's 'Nunito' was used for any instructional text as the spacing and clarity of the letters makes the text easy to read and therefore will help the user understand any information easily.

## Testing

### Validation

* [HTML Validator](https://validator.w3.org/) was run the page to determine any HTML errors.
The only error found was a warning that there wasn't a heading element as the direct child of a section for the start and game sections.
However, there are cases where this is acceptable, paticularly in the case of links or buttons.
More information can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)

![html validation](images/W3C%20vaildator.png)

* [CSS Validator](https://validator.w3.org/) was run on the style sheet and there were no errors found.

![css validation](images/css%20style%20validator.png)

* Lighthouse in Chrome Developer Tools was used to check performance.

![lighthouse report](images/Start%20Page%20Lighthouse%20tresting.png)

* [JSHint](https://jshint.com/) was run on the JavaScript code and there were no errors found.

![JSHint validation](images/JS%20Validator.png)

### Compatibility and Responsiveness

The website was tested on Chrome, Mozilla, Edge and Safari browsers with no problems found.

The website was tested on numerous sized screens including different desktop, tablet and mobile devices and was found to respond as expected to all sizes.

![Start section responsive](/images/I%20Phone%2012%20Pro%20Size.png) 
![Ipad Mini](images/IPad%20Mini%20Size.png)
![Game section responsive](images/Screenshot%202025-01-26%20015338.png)
![Pixel](images/Pixel%207%20Size.png)
![How to play modal responsive](images/IPad%20Air%20Size.png)
![Airmax](images/Promax%2014%20H2P.png)
![Reset game modal responsive](images/results%20i%20pad%20mini.png)
![Reset Game Mobile](images/Reset%20Page%20Mobile%20Size.png)

Chrome developer tools was used throughout the design process to check responsiveness and breakpoints. Adjustments were made accordingly.

### Manual Testing

| Feature | Action | Expected Result | Tested | Passed | Comments |
| --- | --- | --- | --- | --- | --- |
| Footer | | | | | |
| Github icon and username in the footer | Click on the Github icon and username | The user is redirected to my GitHub page | Yes | Yes | - |
| Hover effect | Hover over footer element | The icon changes colour | Yes | Yes | - |
| Start Section | | | | | |
| "Start Game" button | Click on the "Start Game" button | The user is redirected to the Game section | Yes | Yes | - |
| "How To Play" button | Click on the "How To Play" button | The "How To Play" modal appears | Yes | Yes | - |
| Hover effect | Hover over buttons | The icon changes colour | Yes | Yes | - |
| Game Section | | | | | |
| "How To Play" button | Click on the "How To Play" button | The "How To Play" modal appears | Yes | Yes | - |
| "Reset Game" button | Click on the "Reset Game" button | The "Reset Game" modal appears | Yes | Yes | - |
| "Higher" button | Click on the "Higher" button | Registers the user guess as "higher" | Yes | Yes | - |
| "Lower" button | Click on the "Lower" button | Registers the user guess as "lower" | Yes | Yes | - |
| Round number | User guesses correctly | The round number increases by 1 | Yes | Yes | - |
| Number is revealed | Click "Higher" or "Lower" buttons | Card content changes from '?' to it's value | Yes | Yes | - |
| Card changes colour | Click "Higher" or "Lower" buttons | Card background changes green or red depedning if user guessed correctly or incorrectly | Yes | Yes | - |
| Instruction Box | Click "Higher" or "Lower" buttons | The text changes to help direct the user to their next action | Yes | Yes | - |
| Results Section | Win all the rounds | The user is redirected to the results section | Yes | Yes | - |
| Results Section | | | | | |
| "Play Again" button | Click on the "Play Again" button | The user is redirected to the game section | Yes | Yes | - |
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