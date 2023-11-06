# Code Dojo - TDD as if you really meant it (with GitHub Copilot!)

## About:
The goal of this exercise is to practise the fundamentals of test-driven development (TDD), with a side of learning to use GitHub Copilot, which you hopefully have all been given access to and set up on your computers by now.

The task is to implement Conway's Game of Life, using "TDD as if you really meant it".

So what is "TDD as if you really meant it"? In this exercise, you should hold yourself to not writing _any_ code without _first_ writing a test for it. When you have written the test, the test should fail. Only then should you write the code necessary to make the test pass. Also note that you should only write the minimum amount of code that makes the test pass, without breaking any of the already passing tests.

This means that if you want a function, say `square()`, which squares a number, you have to first write a test that checks that a function called `square`. Run the test to make sure it fails. Then add an empty function called `square`, to make the test pass. Next, you might write a test that calls `square(2)`, and expects the output to be 4. Then, to make that test pass, you add `return 4;` to the function body. Yes, this is "TDD as if you really meant it" after all. Only once you write a test testing a different input argument, should you write any logic to separate the two cases. This may seem silly, but the point here is to force yourself to break down the problem into the tiniest possible steps, and solve each step, one at a time. This helps you avoid thinking too far ahead, and overcomplicating the problem.

However, not thinking ahead can have some rather obvious downsides as well. So how do we deal with them? This is where "red - green - refactor" comes in. We've already seen the "red - green" part. That's where you first write a failing test, then make it pass. It's actually important that you see the test fail before you make it pass, because as your code grows more complex, it's easier than you might think to accidentally be testing something different than what you believe you are testing. By making sure the test fails before you implement the new functionality or bug fix, you ensure that the test is actually testing the right thing. By doing this, we will have a comprehensive suite of tests, covering all functionality of our code. This then lets us refactor the code with confidence.

There's already a prepared test-file, `life.spec.js`, and a file for your game code, `life.js`. If you want to split your tests over multiple files, feel free to do so. As long as the filenames end with `*.spec.js`, the test runner will pick them up.

### Conway's Game of Life:

Conway's Game of Life is a cellular automaton that consists of a grid of cells, each of which can be alive or dead. It evolves over time by following specific rules based on each cell's neighbors. It's not really a game you play but a mathematical simulation that can produce interesting patterns.

### Game rules:
* Any live cell with fewer than two live neighbours dies, as if by underpopulation.
* Any live cell with two or three live neighbours lives on to the next generation.
* Any live cell with more than three live neighbours dies, as if by overpopulation.
* Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

## Installation
If you have Node 16+ installed locally, then just run `npm install`.

If you have an older version of Node or don't have it at all, you can use the provided Docker container by running `docker compose run --rm npm install` instead.

## Running tests
Run `npm run test:watch` or `docker compose run --rm npm run test:watch`. This starts a watcher, which will re-run the tests every time you save any changes. If you add new files, you might have to restart the test for the watcher to pick up the new files.

## Links:
* [Wikipedia - Game of life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
