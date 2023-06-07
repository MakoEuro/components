import React from 'react';
import Button from "./Button";

function Banner(props) {
    return (
        <form className="webBanner">
            <h1 className="bannerTitle">{props.bannerTitle}</h1>
            <p className="text">{props.text}</p>
                <Button 
                styleType='button-primary'
                name='Find the code'
                />
                <Button
                styleType='button-secondary'
                name='Forget it'
                />
        </form>
    );
}

export default Banner;