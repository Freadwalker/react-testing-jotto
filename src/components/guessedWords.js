import React from 'react';
import PropTypes from 'prop-types';
import './guessedWords.css';

const GuessedWords = (props) => {
    let contents;
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">
                Try to guess the secret word!
            </span>
        );
    } else {
        const guessedWordsRows = props.guessedWords.map((word, index) => (
            <tr data-test= "guessed-word" key ={index}>
              <td className ="table-guess-column">{word.guessedWord}</td> 
                <td className = "table-match-column">{word.letterMatchCount}</td>
            </tr>
        ))
        contents = (
            <div data-test='guessed-words'>
                <h1>Guessed Words</h1>
                <table className ="table table-sm">
                    <thead className ="thead-light">
                        <tr><th className = "table-guess-column">Guess</th><th className ="table-match-column">Matching Letters</th></tr>
                    </thead>
                    <tbody>
                        {guessedWordsRows}
                    </tbody>
                </table>

            </div>
        )
    }
    return (
        <div data-test='component-guessed-words'>
            {contents}
        </div>
    );
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        }
        )
    ).isRequired
};

export default GuessedWords;