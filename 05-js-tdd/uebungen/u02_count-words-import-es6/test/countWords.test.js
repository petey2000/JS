import expect from 'must';
import countWords from '../countWords.js';

describe('countWords', () => {
  it('should return 0 to an empty string', () => {
    expect(countWords('')).to.be.equal(0);
  });
  it('should return 1 if one word as string passed', () => {
    expect(countWords('word')).to.be.equal(1);
  });
  it('should count words in a sentence as string', () => {
    expect(countWords('This is a string')).to.be.equal(4);
  });
});
