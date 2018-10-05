const {hasValidConcept} = require('../../src/lib/hasValidConcept');
const validConcepts = require('../fixtures/conceptFixture');
const invalidConceptObject = require('../fixtures/invalidConcepts');
describe('hasValidConcept()', () => {

	test('given a concept object with valid concept values returns true', () => {
		expect(hasValidConcept(validConcepts)).toBe(true);
	});

	test('given a concept object with invalid concept values returns false', () => {
		expect(hasValidConcept(invalidConceptObject)).toBe(false);
	});

	test('given a concept object with invalid concept values returns false', () => {
		const emptyConceptObject = {};
		expect(hasValidConcept(emptyConceptObject)).toBe(false);
	});

});
