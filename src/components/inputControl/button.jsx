import React from 'react';
const Button = (props) => {
    return (
        <div>
            <button
                className={`c-button ${props.secondry ? "c-button--secondry" : ""} 
                 ${props.className ? props.className : ""}`}>
                {props.text}</button>
        </div>
    );
}
export default Button;