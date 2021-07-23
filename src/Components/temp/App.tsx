import React, { Component }  from 'react';
import { Wheel } from './Components/Wheel/Wheel';
import { BirthdayWheel } from './Components/BirthdayWheel/BirthdayWheel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './app.module.css';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use-window-size';
import * as d3Shape from 'd3-shape';
import color from 'randomcolor';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
const numberOfSegments = 12;
const wheelSize = getWindowDimensions().width * 0.95;
const fontSize = 26;
const oneTurn = 360;
const angleBySegment = oneTurn / numberOfSegments;
const angleOffset = angleBySegment / 2;
const knobFill = color({ hue: 'purple' });

function App() {
    const makeWheel = () => {
        const data = Array.from({ length: numberOfSegments }).fill(1);
        const arcs = d3Shape.pie()(data);
        const colors = color({
          luminosity: 'dark',
          count: numberOfSegments
        });
      
        return arcs.map((arc, index) => {
          const instance = d3Shape
            .arc()
            .padAngle(0.01)
            .outerRadius(width / 2)
            .innerRadius(20);
      
          return {
            path: instance(arc),
            color: colors[index],
            value: Math.round(Math.random() * 10 + 1) * 200, //[200, 2200]
            centroid: instance.centroid(arc)
          };
        });
      };
      
    return(
        <div>
            <svg>

            </svg>
        </div>
    )
}

export default App;
