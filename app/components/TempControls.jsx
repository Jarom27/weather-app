'use client'
import { Raleway } from 'next/font/google';
import React, { useContext, useRef } from 'react';
import { TempContext } from '../context/TempContext';
import styles from './TempControl.module.css';

const font = Raleway({subsets:["latin"]});

export default function TempControls() {
    const {degrees,setDegrees} = useContext(TempContext)
    const temp_c_button = useRef()
    const temp_f_button = useRef()

    function fahrenheitClick(e){
        setDegrees("F")
        temp_c_button.current.classList.remove(styles.active)
        temp_c_button.current.classList.add(styles.inactive)
        temp_f_button.current.classList.remove(styles.inactive)
        temp_f_button.current.classList.add(styles.active)
      
    }
    function centigradesClick(e){
        setDegrees("C")
        temp_f_button.current.classList.remove(styles.active)
        temp_f_button.current.classList.add(styles.inactive)
        temp_c_button.current.classList.remove(styles.inactive)
        temp_c_button.current.classList.add(styles.active)
    }
    return (
      <div className={'hidden lg:flex lg:justify-end lg:gap-3'+font.className}>
          <button ref={temp_c_button} className={"rounded-full text-bold p-2 px-3 mx-2 " + styles.active} onClick={centigradesClick}>°C</button>
          <button ref={temp_f_button} className={"rounded-full p-2 px-3 "+styles.inactive} onClick={fahrenheitClick}>°F</button>
      </div>
    )
}
