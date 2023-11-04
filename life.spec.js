const { assert, expect } = require('chai');
const { Life } = require('./life');

describe('life', () => {
    let life;

    beforeEach(() => {
        life = new Life();
    });

    it('has a function `smoke`', () => {
        // Docs for Chai: https://www.chaijs.com/
        // (expect, assert, etc)
        expect(life.smoke).to.be.a('function');

        // Alternative way to write the same assertion:
        // assert.equal(typeof life.smoke, 'function');
    });
});
