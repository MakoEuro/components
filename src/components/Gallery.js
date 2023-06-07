import React from 'react';

function Gallery(props) {
    return (
        <div className='grid lg-4 container gallery'>
            {props.images.map(url => {
                return <img src={url} alt='This is a picture'/>
            })}
        </div>
    );
}

export default Gallery;