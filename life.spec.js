const { assert, expect } = require('chai');
const { Life } = require('./life');

// Docs for Mocha: https://mochajs.org/
// Mocha provides `describe`, `it`, `beforeEach`, `afterEach`, etc.

// Docs for Chai: https://www.chaijs.com/
// Chai provides `assert`, `expect`, etc.

describe('life', () => {
    let life;

    beforeEach(() => {
        life = new Life();
    });

    it('has a function `smoke`', () => {
        expect(life.smoke).to.be.a('function');

        // Alternative way to write the same assertion:
        // assert.equal(typeof life.smoke, 'function');
    });
});
