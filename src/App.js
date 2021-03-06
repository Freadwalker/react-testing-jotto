import './App.css';
import React, { Component } from 'react'

import GuessedWords from './components/guessedWords';
import Congrats from './components/congrats';


export default class App extends Component {
  render() {
    return (
      <div data-test="component-app"   className ="container">
        <h1>Jotto</h1>
        <Congrats success = {true}/>
        <GuessedWords guessedWords= {[
          {guessedWord:'train',letterMatchCount:3}
          ]}/>
      </div>
    )
  }
}
