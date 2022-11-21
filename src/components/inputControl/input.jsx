import React from 'react';

const Input = (props) => {
    const { type, value, onChange, className,placeholder } = props
    return (
            <input
              {...props}
                type={type}
                value={value}
                className={` c-input ${className ? className : ""}`}
                onChange={onChange}
                placeholder={placeholder}
                
            />
    );
}

export default Input;