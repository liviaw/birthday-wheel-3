import React, { useEffect, useState } from "react";
import styles from "./birthdayMessage.module.css";
import birthdayCake from '../../Images/birthdayCake.gif';
import birthdayBalloon from '../../Images/birthdayBalloon.gif';
import TextTransition, { presets } from "react-text-transition";
import { Button } from 'react-bootstrap';

type Props = {
    name: string;
    continueShowWheel: () => void;
}

// const name="Name";
export const BirthdayMessage: React.FC<Props> = ({name, continueShowWheel}) => {
    const [index, setIndex] = React.useState(0);
    const message = "Happy birthday Name!";
    const [showButton, setShowButton] = useState(false); 
    const texts = [
        `Happy birthday ${name}!`,
        "are you ready to spin the birthday wheel?"
    ]
    useEffect(() => {
        const intervalId = setTimeout(() =>{
            setIndex(index => index + 1)
            setShowButton(true);
        },
          1500 // after 1.5 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);
    return(
        <div className={styles.root}>

        <div className={styles.rootFlex}>
            <img src={birthdayCake} className={styles.gifContainter} alt="birthday cake..." />
            <h1 className={styles.birthdayMessage}>
            <TextTransition
                text={ texts[index % texts.length] }
                springConfig={ presets.gentle }
                />
            </h1>
            {/* <h1 className={styles.birthdayMessage}>Happy birthday {name} !</h1> */}
            <img src={birthdayBalloon} className={styles.gifContainter} alt="birthday balloon" />
        </div>
            {showButton &&
                <div>
                    <Button onClick={continueShowWheel}>
                    yes
                </Button>
                <Button>
                    no
                </Button>
                </div>
            }
            </div>
    )
}