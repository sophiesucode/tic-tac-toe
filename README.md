#Project Plan – # tic-tac-too
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
#Purpose:
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
This is a simple online game of tic-tac-toe that allows two players to play the game using the same computer. The game switches turn between X and O, and allows
each user to select an empty space with their letter. The game displays a message showing which side won after a player gets three spaces in row , then a "game over" message
on the board. If neither player gets three spaces, the game ends in a draw, which is displayed in a message. The players are able to reset the game with the "refresh" button,
in order to play again.

#Technologies used:
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
-I used wireframes.cc to create a wire frame of how I wanted the structure of the grid to look. I was going for a 3d boxish look.
wireframe:
<img src="./images/wireframe for project.png">
- javascript for the functionality of the game and DOM manipulation.
-CSS for the styling , and 
-HTML for the structure of the game.

#User Stories
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
-As a user, I should be able to start a new tic tac toe game
As a user, I should be able to click on a square to add X first and then O, and so on
As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
As a user, I should not be able to click the same square twice
As a user, I should be shown a message when I win, lose or tie
As a user, I should not be able to continue playing once I win, lose, or tie
As a user, I should be able to play the game again without refreshing the page

#My planning/development process and problem-solving strategy.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
-I began with hand-writing notes about each step of how I'd like the game to be played and how I want the game to look.
-After writing notes, I wrote psuedocode to help organize by steps and figure out how to code the game.
<img src="images\pseudocode.JPG">

-If I ran into a problem. I used console.log to test different aspects of my code. I also used to console to see what the problem was.
-If I got stuck for too long, I created an issue ticket for assistance.

#List unsolved problems which would be fixed in future iterations.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
I would like to get the "game over" message to not appear so fast and to be centered in the board in bigger red letters.
If not with the game over, then I'd like to disable the board instead.

#Describe how you solved for the winner
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
I solved for a winner by using multiple if- else statements for each winning combination on the empty board. If the player ===x or player===o then either an xWon function or oWon function is run based on who won.

#Describe how some of your favorite functions work
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
My favorite function was the one I used to check for a draw. I initially was going to make an if- statement for each space which would have been time-consuming, but I was
able to achieve the goal with a simple "every" method on the board. The function checks every "space" in the array to see if it has an empty string. If all spaces are filled
and there is no winner, a draw function is run.

```
else if(board.every(brd=>brd !=="")){
      draw();
    }
return false
```
