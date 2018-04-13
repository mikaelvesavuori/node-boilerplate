it('adds 1 + 2 to equal 3 in JavaScript', () => {
	const sum = require('../dist/sum.js');
	expect(sum(1, 2)).toBe(3);
});
