import React, { useState } from 'react';
import './carousel.scss';
import ImgComp from './imgComp';
import i1 from '../../../images/1.jpg';
import i2 from '../../../images/2.jpg';
import i3 from '../../../images/3.jpg';
import i4 from '../../../images/4.jpeg';
import i5 from '../../../images/5.jpg';



function Slider() {
    let sliderArr = [
        <ImgComp src={i1} />, 
        <ImgComp src={i2} />, 
        <ImgComp src={i3} />, 
        <ImgComp src={i4} />, 
        <ImgComp src={i5} />
    ];
    const [x, setX] = useState(0);
    const goLeft = () => {
        //setX(x + 100);
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    };

    return (
        <div className="slider">
            {
                sliderArr.map((item, index) => {
                    return (
                        <div key={index} className = "slide" style = {{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    );
                })}
            <button id = "goLeft" onClick = {goLeft}>
            <i class="fas fa-arrow-left"></i>
            </button>
            <button id = "goRight" onClick = {goRight}>
            <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    );
}

export default Slider;