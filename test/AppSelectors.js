import add2 from 'AppSelectors';
import { expect } from 'chai';

describe('add2', () => {
  it('should add 2 to a number', () => {
    expect(add2(5)).to.be.equal(7);
  });
});
