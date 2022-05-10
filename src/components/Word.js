import React from 'react';

function Word(props) {
    return (
        <div className="word">
            {props.selectedWord.split('').map((letter, index) => {
                return (
                    <span className="letter" key={index}>
                        {props.correctLetters.includes(letter) ? letter : ''}
                    </span>
                )
            })}
        </div>
    )
}

export default Word
