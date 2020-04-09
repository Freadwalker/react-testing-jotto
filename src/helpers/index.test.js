import {getLetterMatchCount} from './index.js';

describe('getLetterMatchCount',()=>{
    const secretWord = "party";

    test('returns correct count when there are no matching letters',()=>{
        const letterMatchCount = getLetterMatchCount('bones',secretWord);
        expect(letterMatchCount).toBe(0);
    });
    test('returns correct count when there are duplicate matching letters',()=>{
        const letterMatchCount = getLetterMatchCount('parka',secretWord);
        expect(letterMatchCount).toBe(3);
    });
    test('returns correct count when there are 3 matching letters',()=>{
        const letterMatchCount = getLetterMatchCount('parlo',secretWord);
        expect(letterMatchCount).toBe(3);
    })
})