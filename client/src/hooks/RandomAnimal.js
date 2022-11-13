import React, { useState, useEffect } from 'react';
import BearImg from '../images/animals/bear.png';
import CatImg from '../images/animals/cat.png';
import FoxImg from '../images/animals/fox.png';
import HedgehogImg from '../images/animals/hedgehog.png';
import MooseImg from '../images/animals/moose.png';
import OwlImg from '../images/animals/owl.png';
import OwlsImg from '../images/animals/owls.png';
import RabbitImg from '../images/animals/rabbit.png';
import RaccoonImg from '../images/animals/raccoon.png';
import WolfImg from '../images/animals/wolf.png';

const images = [
    BearImg,
    CatImg,
    FoxImg,
    HedgehogImg,
    MooseImg,
    OwlImg,
    OwlsImg,
    RabbitImg,
    RaccoonImg,
    WolfImg
];

export default function RandomAnimal () {
    const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(Math.random() * images.length));
    const changeImage = () => {
        let randomNumber = Math.floor(Math.random() * images.length);
        setCurrentImageIndex(randomNumber)
    };

    useEffect(() => changeImage(), []);

    return (
        <img
            src={images[currentImageIndex]}
            alt="Travel to the stars, read!"
            height={275}
            className="h-[275px] z-10"
        />
    );
};