import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { ShowNotification as show } from './helpers/helpers';
import wordlist from './assets/wordlist.json';


const words = ['balls', 'the balls'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
if (selectedWord.includes(' ')) {
  let hasSpace = 1;
}


let playable = true;
let difficulty = 0;


const correctLetters = [];
const wrongLetters = [];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([' ']);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [ShowNotification, setShowNotification] = useState(false);

  function Press(letter) {
      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          setCorrectLetters(currentLetters => [...currentLetters, letter]);
        } else {
          show(setShowNotification);
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          setWrongLetters(currentLetters => [...currentLetters, letter]);
        } else {
          show(setShowNotification);
        }
      }
  }

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        Press(letter);
      }
    }
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    }
  }, [playable, correctLetters, wrongLetters, selectedWord]);

  function playAgain() {
    setPlayable(true);

    setCorrectLetters([' ']);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure WrongLetters={wrongLetters} />
        <WrongLetters WrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <br></br>
      <div className="keyboard">
        <button onClick={() => {return Press('a')}} id="A" className="letters">A</button>
        <button onClick={() => {return Press('b')}} id="B" className="letters">B</button>
        <button onClick={() => {return Press('c')}} id="C" className="letters">C</button>
        <button onClick={() => {return Press('d')}} id="D" className="letters">D</button>
        <button onClick={() => {return Press('e')}} id="E" className="letters">E</button>
        <button onClick={() => {return Press('f')}} id="F" className="letters">F</button>
        <button onClick={() => {return Press('g')}} id="G" className="letters">G</button>
        <button onClick={() => {return Press('h')}} id="H" className="letters">H</button>
      </div>
      <div className="keyboard">
        <button onClick={() => {return Press('i')}} id="I" className="letters">I</button>
        <button onClick={() => {return Press('j')}} id="J" className="letters">J</button>
        <button onClick={() => {return Press('k')}} id="K" className="letters">K</button>
        <button onClick={() => {return Press('l')}} id="L" className="letters">L</button>
        <button onClick={() => {return Press('m')}} id="M" className="letters">M</button>
        <button onClick={() => {return Press('n')}} id="N" className="letters">N</button>
        <button onClick={() => {return Press('o')}} id="O" className="letters">O</button>
        <button onClick={() => {return Press('p')}} id="P" className="letters">P</button>
        <button onClick={() => {return Press('q')}} id="Q" className="letters">Q</button>
        <button onClick={() => {return Press('r')}} id="R" className="letters">R</button>
      </div>
      <div className="keyboard">
        <button onClick={() => {return Press('s')}} id="S" className="letters">S</button>
        <button onClick={() => {return Press('t')}} id="T" className="letters">T</button>
        <button onClick={() => {return Press('u')}} id="U" className="letters">U</button>
        <button onClick={() => {return Press('v')}} id="V" className="letters">V</button>
        <button onClick={() => {return Press('w')}} id="W" className="letters">W</button>
        <button onClick={() => {return Press('x')}} id="X" className="letters">X</button>
        <button onClick={() => {return Press('y')}} id="Y" className="letters">Y</button>
        <button onClick={() => {return Press('z')}} id="Z" className="letters">Z</button>
      </div>

      <Popup playAgain={playAgain} correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} />
      <Notification ShowNotification={ShowNotification} />
    </>
  );
}

export default App;
