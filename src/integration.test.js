import { storeFactory} from './test/testUtils';
import { guessWord } from './actions';

describe("guessWord action dispatcher",()=>{
    const secretWord = "party";
    const unsuccesfulGuess = "train";

    
    describe('no guessed words',()=>{
        let store;
        const initialState = { secretWord };
        beforeEach(()=>{
            store = storeFactory(initialState); 
        })
        
        test('updates state correctly for unsuccesful guess',()=>{
             store.dispatch(guessWord(unsuccesfulGuess));   
             const expectedState = {
                 secretWord,
                 success:false,
                 guessedWords: [{
                     guessedWord: unsuccesfulGuess,
                     letterMatchCount: 3
                 }]
             }
             const newState = store.getState();
             expect(newState).toEqual(expectedState);
        });

        test('updates state correctly for succesful guess',()=>{
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success:true,
                guessedWords:[{
                    guessedWord: secretWord,
                    letterMatchCount: 5,
                }]
            }
            expect(newState).toEqual(expectedState);
        });
    })
    describe('some guessed words',()=>{
        let guessedWords = [{guessedWord: "agile",letterMatchCount:1 }];
        const initialState = {secretWord, guessedWords};
        let store;
        beforeEach(()=>{
            store = storeFactory(initialState);
        })
        test('updates state correctly for unsuccesful guess',()=>{
            store.dispatch(guessWord(unsuccesfulGuess));
            guessedWords.push({guessedWord:unsuccesfulGuess,letterMatchCount : 3});
            const expected_state = {secretWord,success:false, guessedWords};
            const actual_state = store.getState();
            expect(actual_state).toEqual(expected_state);
        });




























        test('updates state correctly for succesful guess',()=>{
            store.dispatch(guessWord(secretWord));
            let actual_state = store.getState();
            let expected_state = {secretWord, success:true, guessedWords:[...guessedWords, {guessedWord: secretWord,letterMatchCount: 5 }]};
            expect(actual_state).toEqual(expected_state);
        });
    })
})