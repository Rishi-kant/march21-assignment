
import React from "react";

import style from './Scroller.module.css'
export default function Scroller(){
  const mentors=[
    {
     src:"https://images.pexels.com/photos/6014871/pexels-photo-6014871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    name:"Camila",
    profession:"Product Manager @ Google india",
    experience:"4 Yrs Exp."
  
    },
    {
     src:'https://images.pexels.com/photos/3978578/pexels-photo-3978578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     name:"Scarlett",
     profession:"Product Manager @ Google india",
     experience:"4 Yrs Exp."
    },
    {
      src:"https://images.pexels.com/photos/5713666/pexels-photo-5713666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
     name:"Emily",
     profession:"Product Manager @ Google india",
     experience:"4 Yrs Exp."
   
     },
     {
      src:"https://images.pexels.com/photos/7009580/pexels-photo-7009580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
     name:"Olivia",
     profession:"Product Manager @ Google india",
     experience:"4 Yrs Exp."
   
     },
     {
      src:"https://images.pexels.com/photos/7009505/pexels-photo-7009505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
     name:"Emma",
     profession:"Product Manager @ Google india",
     experience:"4 Yrs Exp."
   
     },
     {
      src:"https://images.pexels.com/photos/6118519/pexels-photo-6118519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
     name:"Charlotte",
     profession:"Product Manager @ Google india",
     experience:"4 Yrs Exp."
   
     },
     {
      src:"https://images.pexels.com/photos/7009495/pexels-photo-7009495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
     name:"Sophia",
     profession:"Product Manager @ Google india",
     experience:"4 Yrs Exp."
   
     }
      ]
  return (
    <>
    <div className={style.container}>
      <h1>Know your mentors</h1>
      <p className={style.para}>Work  with a mentor (senior data scientists from top componies) who closely looks at your progress, gives you personolized feedback and helps you fill gaps in your knowledge</p>
    <div className={style.display}>
    {
      mentors.map((person)=>{
        return (
          <div className={style.card}>
            <img  src={person.src}  className={style.images}/>
            <h2  className={style.name}>{person.name}</h2>
            <p className={style.profession}>{person.profession}</p>
            <p className={style.experience}>{person.experience}</p>
          </div>
        )
      })
    }
  </div>
  </div>
  </>
  )
}