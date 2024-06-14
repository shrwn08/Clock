import React from 'react'
import { useEffect, useState } from "react";
import './style.css'
const AnalogClock = () => {

    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        let d = new Date();
        let Seconds = d.getSeconds();
        let Minutes = d.getMinutes();
        let Hours = d.getHours();
        setSecond(Seconds);
        setMinute(Minutes);
        setHour(Hours);
        console.log(d.getHours());
        console.log(d.getMinutes());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    const secondAngle = (second / 60) * 360;
    const minuteAngle = 180 + (minute / 60) * 360 + (second / 60) * 6;
    const hourAngle = 180 + ((hour % 12) / 12) * 360 + (minute / 60) * 30;

  return (
     <div className="circle">
        <div className="point"></div>
        <div className="hour-name-1 hourName">1</div>
        <div className="hour-name-2 hourName">2</div>
        <div className="hour-name-3 hourName">3</div>
        <div className="hour-name-4 hourName">4</div>
        <div className="hour-name-5 hourName">5</div>
        <div className="hour-name-6 hourName">6</div>
        <div className="hour-name-7 hourName">7</div>
        <div className="hour-name-8 hourName">8</div>
        <div className="hour-name-9 hourName">9</div>
        <div className="hour-name-10 hourName">10</div>
        <div className="hour-name-11 hourName">11</div>
        <div className="hour-name-12 hourName">12</div>
        <div
          className="second-di"
          style={{ transform: `rotate(${secondAngle}deg)` }}
        >
          <div className="second" id="second-hand"></div>
        </div>

        <div
          className="minute-di"
          style={{ transform: `rotate(${minuteAngle}deg)` }}
        >
          {" "}
          <div className="minute" id="minute-hand"></div>
        </div>
        <div
          className="hour-di"
          style={{ transform: `rotate(${hourAngle}deg)` }}
        >
          {" "}
          <div className="hour" id="hour-hand"></div>
        </div>
      </div>
  )
}

export default AnalogClock;