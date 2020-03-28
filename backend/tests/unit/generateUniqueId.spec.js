const generateUniqueId = require('../../src/utils/gererateUniqueId');

describe('Generate Unique ID', () => {
    it('should gererate an unique ID', () =>{
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    });
});