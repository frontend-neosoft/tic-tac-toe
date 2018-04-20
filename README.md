# tic-tac-toe
Design a Tic-Tac-Toe game on an NxN grid for P players. The game can be played by two or more players, and the grid size N > 1 can be set freely. The software architect is expecting to get a function move(x, y, player) → result, where x is the column and y is the row. The player parameter can be any representation of the player making the move, and the result represents one of the three cases: nobody won yet, the player that just made the move has won or the game has no more valid moves (the grid is complete). Case the player is willing to make an invalid move (over an already occupied position), the function raises an exception. This game is intended to run on very low-end devices, so design a reasonably eficient solution!

Solution:

This example uses a single array to check the possibilities of winner on click of each block
The game supports 2+n number of players in a grid of 3+n
The game is optimized by using conditions that won't check for a complete probability if it encounters a gap
