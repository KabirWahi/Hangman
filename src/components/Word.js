import React from 'react';

function Word(props) {
    return (
        <div className="word">
            {props.selectedWord.split('').map((letter, index) => {
                if (letter !== ' ') {
                    return (
                        <span className="letter" key={index}>
                            {props.correctLetters.includes(letter) ? letter : ''}
                        </span>
                    )
                } else {
                    return (<label>&nbsp;&nbsp;<span></span></label>)
                }
            })}
        </div>
    )
}

export default Word
