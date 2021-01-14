import React, {useEffect, useState} from "react";
import ReactInterval from 'react-interval';
import * as Hangul from 'hangul-js';

const TypingAnimation = ({text, speed = 100, delay = 0}) => {

    const letters = Hangul.disassemble(text);
    const [animatedText, setAnimatedText] = useState("");
    const [isAnimationEnd, setIsAnimationEnd] = useState(true);
    const [animationIndex, setAnimationIndex] = useState(0);

    const handleInterval = () => {
        const tempText = [];
        for(let i=0; i<animationIndex; i++) {
            tempText.push(letters[i]);
        }

        if(animationIndex < letters.length - 1) {
            setAnimatedText(Hangul.assemble(tempText));
            setAnimationIndex(animationIndex + 1);
        } else {
            setIsAnimationEnd(true);
            setAnimatedText(text);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setIsAnimationEnd(false);
        }, delay)
    }, []);

    return (
        <>
            <ReactInterval timeout={speed} enabled={!isAnimationEnd} callback={handleInterval} />
            {animatedText}
        </>
    );
};

export default TypingAnimation;