import React, { Component, useState } from 'react';
import { WheelCanvas } from './Components/WheelCanvas/WheelCanvas';
import { BirthdayMessage } from './Components/BirthdayMessage/BirthdayMessage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Quiz } from './Components/Quiz';
import styles from './app.module.css';
import type { prizeItem } from './Components/WheelCanvas/WheelCanvas';
import Confetti from 'react-confetti';
import { LogIn } from './Components/LogIn/LogIn';
import { SendGift } from './Components/SendGift/SendGift';

function App() {
  const segments: prizeItem[] = [
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
  const [showWheel, setShowWheel] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [wheelSpinned, setWheelSpinned] = useState(false);
  const [name, setName] = useState("");
  const [confirmGift, setConfirmGift] = useState(false);
  const continueShowChoices = () => {
    setShowChoices(true);
    console.log("show choices")
  }
  const onFinished = (winner: string, index: number) => {
    removePrize(index);
    setWheelSpinned(true);
    console.log(winner)
  }
  
  const removePrize = (index: number) => {
    segments[index].picked = true;
  }
  
  const continueShowWheel = () => {
    setShowWheel(true);
  }

  const continueConfirmGift = () => {
    // put into gsheet
    setConfirmGift(true)
  }
  return (
// okta sign in https://canva.okta.com/signin/verify/okta/password
    <div className={styles.app}>
      <LogIn setName={setName}/>
      {/* <Switch>
      <Route path="/history" component={History} />
      </Switch> */}
      {name !== "" && !showChoices && <BirthdayMessage name={name} continueShowChoices={continueShowChoices}/>}
      {showChoices && !showWheel && <Quiz continueShowMessage={continueShowWheel}/>}
      {showWheel && <WheelCanvas
        segments={segments}
        segColors={segColors}
        winningSegment='won 10'
        onFinished={(winner: string, index: number) => onFinished(winner, index)}
        onConfirmed={continueConfirmGift}
        primaryColor='black'
        contrastColor='white'
        buttonText='Spin'
        isOnlyOnce={false}
        size={290}
        upDuration={100}
        downDuration={1000}
        fontFamily='Gatwick Bold'
        />}
        <Confetti
          run={wheelSpinned}
          tweenDuration={100}
          onConfettiComplete={() => {
            setWheelSpinned(false);
          }}
        />
        {confirmGift && <SendGift/>}
    </div>
  )
}

export default App;
