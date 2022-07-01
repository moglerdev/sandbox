const utils = require('../utils');

describe("Testing Utils JavaScript File", () => {
    it("should add 1 + 1 and return 2", () => {
        expect(utils.add(1, 1)).toBe(2);
    })
})
