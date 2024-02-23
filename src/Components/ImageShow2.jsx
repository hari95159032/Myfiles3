import React, { useState } from 'react'
import ImageSlider from './ImageSlider'

export default function ShowHide() {
    const[flag,setflag] = useState(false);
    let func = () =>{
        setflag(!flag)
    }
  return (
    <div>
      <button onClick={func}>{flag?"Show":"Hide"}</button>
      {flag&&<ImageSlider />}
    </div>
  )
}



