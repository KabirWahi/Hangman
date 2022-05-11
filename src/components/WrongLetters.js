import React from 'react';

const WrongLetters = (props) => {
    return (
        <div className="wrong-letters-container">
            <div>
                {props.WrongLetters.length > 0 && <p>Wrong:<br></br><br></br></p>}
                {props.WrongLetters.map((letter, index) => {
                    return (
                        <label>&nbsp;<span key={index}>{letter}<br></br><br></br></span></label>
                    )
                }
                ).reduce((prev, curr) => prev === null ? [curr] : [prev, '', curr], null)}
            </div>
        </div>
    )
}


export default WrongLetters;