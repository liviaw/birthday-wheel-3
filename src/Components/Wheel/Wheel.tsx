import React, { useState } from "react";
import styles from "./wheel.module.css";
import { Form, FormGroup, Button, Alert } from 'react-bootstrap';

const COMPLETE_ANGLE = 360;
const STRAIGT_ANGLE = 180;

export const Wheel: React.FC = () => {
    const prizes: string[] = ["car", "ubereats", "tech", "drinks"];
    const [prizeState, setPrizeState] = useState(prizes[0]);
    const colors = ["red", "yellow"];
    const [degree, setDegree] = useState(0);
    //  React.TouchEvent<HTMLDivElement> | 
    const spinWheel = (e: React.MouseEvent<HTMLDivElement>) => {
        setDegree(Math.floor(5000 + Math.random() * 5000));
    }
    return(
        <div className={styles.wheelContainer}>
            <div className={styles.wheelCircle}>
                {
                    prizes.map((prize: string, index) => {
                        return(
                            <div
                                style={{
                                    backgroundColor: colors[index % 2],
                                    borderRadius: "50%",
                                    //  skewY(${-120}deg)
                                    transform: `rotate(${(index) * COMPLETE_ANGLE / prizes.length}deg) skewY(${-STRAIGT_ANGLE / prizes.length }deg)`,
                                    
                                }}
                                className={styles.prizeElement}
                            >
                                <p className={styles.prizeName}>
                                {prize}
                                </p>
                            </div>
                        )
                    })
                }
                                <div className={styles.pivot}>
                    
                                </div>
            </div>
            <Button onClick={spinWheel}>

            wheel
            </Button>
        </div>
    );
}