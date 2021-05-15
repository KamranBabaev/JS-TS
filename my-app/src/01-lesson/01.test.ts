import {splitIntoWords, sum} from "./01";

let a: number
let b: number
let c: number

beforeEach( () => {
    a = 1
    b = 2
    c = 3
})

test('sum should be correct', () => {
    let result1 = sum(a, b)
    let result2 = sum(b, c)

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

const sent1 = 'Hello my friend!'
const sent2 = 'JS - the best programming language.'

const result1 = splitIntoWords(sent1)
const result2 = splitIntoWords(sent2)

test('splitting into words should be correct', () => {
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('Hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend!')

    expect(result2.length).toBe(6)
    expect(result2[0]).toBe('JS')
    expect(result2[1]).toBe('-')
    expect(result2[2]).toBe('the')
    expect(result2[3]).toBe('best')
    expect(result2[4]).toBe('programming')
    expect(result2[5]).toBe('language.')
})