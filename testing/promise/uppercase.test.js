//uppercase.test.js
const uppercase = require('./uppercase.module')

describe('Test on Promise', () => {

    test(`resolve: uppercase 'test' to equal 'TEST'`, () => {
        return uppercase('test').then(str => {
            expect(str).toBe('TEST')
        })
    })

    test(`reject: uppercase '' to return 'Empty string'`, () => {
        return uppercase('').catch(e => {
            expect(e).toMatch('Empty string')
        })
    })
})