// test group
describe('first set', () => {
    let count = 0;

    // before each (test())
    beforeEach(() => {
        //do something
        count = 0;
    })

    // once before we start all test cases
    beforeAll(() => {
        //do something
    })

    afterEach(() => {
        //do something
    })

    afterAll(() => {
        //do something
    })

    // one test case
    test('it should return true when we call /test', () => {
        count += 1;
        // assertions
        expect(true).toBe(true);
    })

    // other test case
    test('another test', () => {
        let v = 'value';
        expect(v).toBe('value');
    })
})

describe('second set', () => {
    /* other tests */
})