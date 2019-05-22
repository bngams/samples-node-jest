//uppercase.test.js
const uppercase = require('./uppercase.module')

describe('Test callback', () => {
    test(`uppercase 'test' to equal 'TEST'`, (done) => {
        uppercase('test', (str) => {
            expect(str).toBe('TEST')
            done()
        })
    })
})