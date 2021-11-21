import React, {useState, useEffect} from "react";
import {Container, Image} from "react-bootstrap";

function ImageSlider({slides}) {

    const [current, setCurrent] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrent(c => c === (slides.length - 1) ? 0 : c + 1);
        }, 4000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);


    return (
        <Container className="slider-container">
            <Image className="slide" src={slides[current].image} fluid/>
        </Container>
    );
}

export default ImageSlider;
