import React, {useState} from "react";
import style from './Bourd.module.css'
import Square from "./Square";
export default function Bourd(){
    const[state,setState]=useState(Array(9).fill(null))
    const[isXturn,setIsXturn]=useState(true)
      
    function checkWinner(){
        const winnerLogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let logic of winnerLogic){
         const[a,b,c]=logic
        if( state[a]!==null && state[a] ===state[b] && state[a]=== state[c])
           return state[a]
        }
        return false;
    };

       const isWinner=checkWinner();
    function handleClick(index){
        if(state[index] !== null){
            return
        }
        const copyState=[...state]
        copyState[index]= isXturn ? "X" : "O"
        setState(copyState)
        setIsXturn(!isXturn)
    }
    function handleReset(){
        setState(Array(9).fill(null))
        setIsXturn(true)
    }
    return(
        <div className={style.container}>
        <div className={style.bourd}>
            <h2 > Player : X  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Player : O</h2>
              <h3 className={style.turn}>
                 Turn of Player : {isXturn ? "X" : "O"}
                 
                 </h3>
           <div className={style.bourdrow}>
              <Square  
              onClick={()=>handleClick(0)}
              value={state[0]}
              />
              <Square  
               onClick={()=>handleClick(1)}
               value={state[1]}
              />
              <Square  
               onClick={()=>handleClick(2)}
               value={state[2]}
              />
           </div>
           <div className={style.bourdrow}>
              <Square 
               onClick={()=>handleClick(3)}
               value={state[3]}
              />
              <Square  
               onClick={()=>handleClick(4)}
               value={state[4]}
              />
              <Square  
               onClick={()=>handleClick(5)}
               value={state[5]}
              />
           </div>
           <div className={style.bourdrow}>
              <Square  
               onClick={()=>handleClick(6)}
               value={state[6]}
              />
              <Square 
               onClick={()=>handleClick(7)}
               value={state[7]}
              />
              <Square 
               onClick={()=>handleClick(8)}
               value={state[8]}
              />
           </div>
           {isWinner ? 
        <h3 className={style.winner}> Player {isWinner} won the match
        <br/>
        <button 
        onClick={handleReset}
        className={style.btn}>
        Start Again
        </button>
        </h3>

        : ''}
        </div>
        </div>
    )
}


