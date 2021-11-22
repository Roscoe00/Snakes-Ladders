Snakes and ladders with javascript

Design - 
The game was designed for mobile and scaled up for desktop use.

Elements -
The game consists of two main elements, the game board and the roll die button:
The game board displays the players current position
The roll die button displays a die result and then moves the player counter accordingly

The Code -
I generated the game board by creating 100 divs to provide the area the player will be moving through. 
When the roll button is pressed, the result is stored in a string called totalRoll. The result of the roll is also shown by inserting an image of a die displaying the appropriate number.

i) Player movement -
The player is displayed on the game board by giving an id to a div which has its own styling. To move the player the id is removed from the current player location and added
to the new location given from totalRoll. A for loop allows for the individual steps between previousTotalRoll and totalRoll to be made to make player movement easier to follow

ii) Snakes and ladders - 
Once the player has reaced the totalRoll number, a series of if statements are done to check the current player position and move them if they have landed on a snake or ladder tile.
If they have then their totalRoll and position is changed accordingly.

iii) End of game - 
When the player reaches the final div, a victory message is displayed and the player can't move any further due to an if statement that fixes the totalRoll value to a maximum of 99.
