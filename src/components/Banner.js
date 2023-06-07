import { Component } from "react";
import Button from "./Button";

class Banner extends Component {
    render() {

        const { bannerTitle, text, styleType } = this.props;

        return (
            <form>
                <h1 className="bannerTitle">{bannerTitle}</h1>
                <p className="text">{text}</p>
                <Button 
                styleType={styleType}
                className='button-primary'
                />
                <Button
                styleType={styleType}
                className='button-secondary'
                />
            </form>
        );
    }
}

export default Banner;