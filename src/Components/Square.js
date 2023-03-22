
import React from "react";
import style from './Square.module.css'

export default function Square(props){
  return(
    
    <div
    onClick={props.onClick}
    className={style.square}
    
    >
        <h1>{props.value}</h1>
    </div>
  )
}