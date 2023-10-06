import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';
import spoon from "../../assets/spoon.svg"

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button className="app__backToTop" style={{display: isVisible ? 'block':'none'}} onClick={goTop}>
            <img src={spoon} alt="spoon top button" className='app__backToTop-img' />
            <p>Top</p>
        </button>
    );
}

export default ScrollToTop;