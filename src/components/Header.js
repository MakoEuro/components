import { Component } from "react";

class Header extends Component {
    render() {
        const { title } = this.props;

        return (
            <header className="flexbox">
                <div className="container flexbox">
                    <h1 className="title">{title}</h1>
                </div>
         </header>
        );
    }
}

export default Header;