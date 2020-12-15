# Game Project: Soothing Tic Tac Toe

This application allows the user to unwind by playing a game of tic tac toe where they always win, because they're always playing themselves. It enables the user to create an account, sign in, start a new game, play the game and know which player won (or if a tie), see how many times they've unwound with the app, change their password, and sign out.

## Important Links

[Requirements](https://git.generalassemb.ly/ga-wdi-boston/game-project/blob/master/requirements.md)
[API Documentation Auth Requests](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/user.md)
[API Documentation Game Requests](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md)

## Planning Story

The planning for this application began with closely reading over all the provided project materials provided by General Assembly - everything from the list of required features to API documentation. Then I created a list of user stories and a couple wireframes to set the foundation for what the application would do and how it would look. Once comfortable with this foundation, I wrote pseudo code for each feature to form a general understanding of how they might need to interact with each other and where they each might need to live within the repository. With a good foundation of pseudo code in place, I began to translate that pseudo code to actual code starting with minimal HTML/CSS to get a basic gameboard in place, then working feature by feature adding jQuery, Javascript, and more HTML/CSS as needed. Once the application had all the basic functionality that was required, I went back to adjust the HTML/CSS to make it look and feel more like I was hoping when originally drawing my wireframes.

As I worked through each feature, some came to me very easily, but some proved to be pretty challenging. When I got to a point where what I was writing was not giving me the output I wanted, I would start by using `console.log()` or commenting out some code to see if I can get a deeper understanding of what is happening and why I'm not getting the output I want. If not able to narrow it down with those tactics, I would Google the problem or error message I was receiving and would frequently find myself on StackOverflow, MDN, or w3. These sites were very helpful, but didn't always do the trick. So if I was still stumped, I would next take a step away from the computer to give my mind a break and approach the problem with a fresh perspective a few minutes later. If still not able to come up with a solution, I would submit a ticket to our team of instructors outlining the problem I was trying to solve, relavant code, error messages (if applicable), my best guess at the source of the problem, and what troubleshooting I had already attempted. After submitting I'd also reach out to classmates to get their take on the situation as well. There were no problems that were not effectively solved with this strategy, and I intend to use something similar as I continue to grow as a software engineer.

### User Stories

- As a user, I want to be able to create an account to store my games
- As a user, I want to be able to sign into my account to access my games and create new ones
- As a user, I want to be able to change my password
- As a user, I want to be able to sign out of my account so someone else can sign in
- As a user, I want to be able to create a new game so I can play it
- As a user, I want to be able to click a spot on the gameboard to place an 'X', then be able to place an 'O' so I can play the game with someone sitting next to me
- As a user, I want to only be able to select empty spots on the gameboard so no one can cheat
- As a user, I want to know when the game is over and who won the game so I can brag
- As a user, once the game is over I don't want to be able to place any new markers so I have to start a new game
- As a user, I want to be able to reset the gameboard to start a fresh game
- As a user, I want to be able to see the number of games I've played so I can keep track
- As a user, I want to be able to search for a particular game so I can review it
- As a user, I want to be able to searh for and update a particular game so I can finish playing it
- As a user, I want to be able to play this game on both my laptop and mobile device so I can play anywhere

### Technologies Used

Javascript
HTML/CSS/SCSS
Bootstrap
jQuery
AJAX
JSON
Git/GitHub
Atom Code Editor

### Unsolved Problems

- I'd like to eventually freshen up the UI to make for a cleaner experience that is more on-brand with the login page.
- I'd like to eventually make the app more mobile friendly
- I'd like to eventually add a feature that enables the user to continue playing unfinished games.

## Images

![Tic Tac Toe Screenshot (login)](https://i.imgur.com/YDxVz5c.png "Tic Tac Toe Screenshot (login)")

![Tic Tac Toe Screenshot (gameboard)](https://i.imgur.com/mav77rY.png "Tic Tac Toe Screenshot (gameboard)")


#### Wireframes:
![Tic Tac Toe Wireframe (mobile)](https://i.imgur.com/Mp3g2U0.jpg "Tic Tac Toe Wireframe (mobile)")

![Tic Tac Toe Wireframe (laptop)](https://i.imgur.com/Qf6ipVy.jpg "Tic Tac Toe Wireframe (laptop)")
