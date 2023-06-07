import React, { useState } from 'react'; 

const Button = ({ isActive }) => {
    const [ isButtonActive, setButtonActive ] = useState(isActive);

    const handleClick = () => {
        setButtonActive(!isButtonActive);
    }

    return (
        <button onClick={handleClick} className={isButtonActive ? 'button-primary' : 'button-secondary'}>
            {isButtonActive ? 'Primary' : 'Off'}
        </button>
    );
}

export default Button;