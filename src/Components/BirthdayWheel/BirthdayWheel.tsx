import React, { useState } from "react";
import styles from "./BirthdayWheel.module.css";
import { Form, FormGroup, Button, Alert } from 'react-bootstrap';

const COMPLETE_ANGLE = 360;
const STRAIGT_ANGLE = 180;

export const BirthdayWheel: React.FC = () => {
    const prizes: string[] = ["car", "ubereats", "tech", "drinks"];
    const [prizeState, setPrizeState] = useState(prizes[0]);
    const colors = ["red", "yellow"];
    const [degree, setDegree] = useState(COMPLETE_ANGLE / prizes.length);
    //  React.TouchEvent<HTMLDivElement> | 
    const spinWheel = (e: React.MouseEvent<HTMLDivElement>) => {
        setDegree(Math.floor(5000 + Math.random() * 5000));
    }
    return(
        <div
            className={styles.piechart}
            style={{
                backgroundImage: `conic-gradient($() 70deg, lightblue 0 180deg,orange 0 199deg, green 0)`,
            }}
        >
            
        </div>
    );
}