import { assert, expect } from 'chai';
import { Life } from './life.mjs';

describe('life', () => {
    let life;

    beforeEach(() => {
        life = new Life();
    });

    it('smokes', () => {
        // Docs for Chai: https://www.chaijs.com/
        // (expect, assert, etc)
        expect(life.smoke()).to.be.true;

        // Alternative way to write the same assertion:
        // assert.equal(life.smoke(), true);
    });
});
