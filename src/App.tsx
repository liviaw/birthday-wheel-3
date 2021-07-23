import React, { Component, useState }  from 'react';
import { Wheel } from './Components/Wheel/Wheel';
import { BirthdayWheel } from './Components/BirthdayWheel/BirthdayWheel';
import { WheelCanvas } from './Components/WheelCanvas/WheelCanvas';
import { BirthdayMessage } from './Components/BirthdayMessage/BirthdayMessage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Quiz } from './components/quiz';
import styles from './app.module.css';
// import WheelComponent from 'react-wheel-of-prizes';
import type { prizeItem } from './Components/WheelCanvas/WheelCanvas';
import useWindowSize from 'react-use-window-size';
import Confetti from 'react-confetti';
import 'react-wheel-of-prizes/dist/index.css';

function App() {
  const segments : prizeItem[] = [
    {
      value: 'oh ouh nothing',
      picked: false
    },
    {
      value: 'Car',
      picked: false
    },
    {
      value: 'water bottle',
      picked: false
    },
    {
      value: 'Nutella Jar',
      picked: false
    },
    {
      value: 'Trip to Barcelona',
      picked: false
    },
    {
      value: 'plant of your choice',
      picked: false
    },
  ]
  const segColors = [
    '#BE8FFA',
    '#E2CFFA',
    '#4F445D'
  ]
  const [showWheel, setShowWheel] = useState(true);
  const onFinished = (winner: string, index: number) => {
    removePrize(index);
    console.log(winner)
  }

  const removePrize = (index: number) => {
    segments[index].picked = true;
  }
  const wheelSpinned = false;
  return (

  <div className={styles.app}>
    <Quiz />
      <BirthdayMessage name={"Jess"}/>
      <Confetti
        run={wheelSpinned}
      />
      <WheelCanvas
      segments={segments}
      segColors={segColors}
      winningSegment='won 10'
      onFinished={(winner: string, index: number) => onFinished(winner, index)}
      primaryColor='black'
      contrastColor='white'
      buttonText='Spin'
      isOnlyOnce={false}
      size={290}
      upDuration={100}
      downDuration={1000}
      fontFamily='Gatwick Bold'
    /> 
    </div>
  )
  // return (
  //   <div className={styles.app}>
  //     <BirthdayWheel/>
  //   </div>
  // );
}

export default App;
