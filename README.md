# Code Dojo - group & pair programming exercise

## About:
The goal of this exercise is to explore pair/group programming and working on someone else's code. Whole process
is split into 2 parts:

First part consist of pairing up and writing unit tests in file. All scenarios should be covered without writing a single line
of an actual source code. There's already prepared file `life.spec.js` but if you want to split it up to multiple tests,
feel free to do so as long as they end with `*.spec.js`

After half an hour your pair should switch places with another pair. Then you should implement the game logo so all
the test are green! Main source file is `life.mjs`.

### J. Conways' Game of Life:

Conway's Game of Life is a cellular automaton that consists of a grid of cells, each of which can be alive or dead.
It evolves over time by following specific rules based on the cells' neighbors.
It's not really a game you play but a mathematical simulation that can produce interesting patterns.

### Game rules:
* Any live cell with fewer than two live neighbours dies, as if by underpopulation.
* Any live cell with two or three live neighbours lives on to the next generation.
* Any live cell with more than three live neighbours dies, as if by overpopulation.
* Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

## Installation
If you have Node 16+ installed locally, then just type
`npm install`. 

If you have an older version of Node or don't have it at all, you can use it using docker
by typing `docker compose run --rm npm install` instead.

## Running tests
Run `npm run test` or `docker compose run --rm npm run test`

## Links:
* [Wikipedia - Game of life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
