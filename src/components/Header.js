import React from "react";

function Header(props) {
    return (
        <header className="flexbox">
            <div className="container flexbox">
                <h1 className="title">{props.title}</h1>
                <nav className="header-nav">
                    <ul>
                        {props.navigation.map(navBtn => {
                            return <li className="header-li">{navBtn}</li>
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;