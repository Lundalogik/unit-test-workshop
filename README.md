# TDD Mastery with GitHub Copilot: Code Dojo Session

## About This Dojo:
Welcome to our Code Dojo, where we'll sharpen our skills in Test-Driven Development (TDD) and explore the capabilities of GitHub Copilot. As part of our Engineering Conference Day, this session is designed to provide hands-on experience with TDD principles, using Conway's Game of Life as our coding kata.

### Embracing TDD:
"TDD as if you really meant it" is our mantra for today. This approach requires you to write a test before any new piece of code. Watch it fail, then write just enough code to pass the test. It's a disciplined way to ensure your code does exactly what it's supposed to do, no more, no less.

### GitHub Copilot - Your AI Pair Programmer:
Having been introduced to GitHub Copilot, this workshop serves as your playground to see how AI can boost your coding efficiency. Make sure you've got the VSCode extension installed, and let's see how Copilot fares in the TDD arena!

### Conway's Game of Life:
Our coding challenge is Conway's Game of Life, a cellular automaton that simulates life cycles within a grid. It's a classic example that lends itself well to TDD, with clear rules and outcomes.

#### The Rules:
- A live cell with fewer than two live neighbours dies (underpopulation).
- A live cell with two or three live neighbours survives (stasis).
- A live cell with more than three live neighbours dies (overpopulation).
- A dead cell with exactly three live neighbours becomes alive (reproduction).

## Setup:
- **Node.js**: Ensure you have Node v16+ installed. Run `npm install` to set up your environment.
- **Docker**: If you prefer Docker, run `docker compose run --rm npm install` to get started.

## Running Tests:
- Run `npm run test:watch` to initiate the test watcher.
- If you prefer Docker, run `docker compose run --rm npm run test:watch`.

The script will re-run tests after each save. For new files, restart the watcher to detect them.

## Need Help?
If you encounter any setup issues or have questions, reach out to Adrian Schmidt or Piotr Adamczyk on Slack. We're here to assist!

## Ready, Set, Code!
Prepare for an engaging session of coding, learning, and collaboration. Let's dive into the world of TDD with GitHub Copilot as our guide.

## Useful Links:
- Dive deeper into Conway's Game of Life: [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
- Try an online implementation: [Game of Life](https://playgameoflife.com/)
