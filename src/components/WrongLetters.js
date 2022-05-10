import React from 'react';

const WrongLetters = (props) => {
    return (
        <div className="wrong-letters-container">
            <div>
                {props.WrongLetters.length > 0 && <p>Wrong</p>}
                {props.WrongLetters.map((letter, index) => {
                    return <span key={index}>{letter}</span>
                }
                ).reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
            </div>
        </div>
    )
}


export default WrongLetters;