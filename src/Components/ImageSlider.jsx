import React, { useState } from 'react'

export default function ImageSlider() {
    let pictures=["https://cdn.pixabay.com/photo/2023/09/14/15/54/bird-8253245_1280.jpg",
    "https://media.istockphoto.com/id/1251671390/photo/fischers-lovebird-agapornis-fischeri-adults-standing-on-branch.jpg?s=1024x1024&w=is&k=20&c=Wvp4njGNRR2hvF4c74_n8w-JzyOQHAFdRHu3hsnoJvs=",
"https://media.istockphoto.com/id/1407436320/photo/red-munia-bird.jpg?s=1024x1024&w=is&k=20&c=d0zuxDSP_mpPO_vbqAlbVCBOwl2erhgMox45cfrkruo=",
"https://cdn.pixabay.com/photo/2023/12/10/23/26/bird-8442508_1280.jpg"
]
const[index,setIndex] = useState(0)
const nextSlide = () =>{
    if(index===pictures.length-1){
        setIndex(0)
    }else{
        setIndex((prevIndex) => prevIndex + 1);
    }
    
}
const prevSlide = () =>{
    if(index===0){
        setIndex(pictures.length-1)
    }else{
        setIndex((prevIndex) => prevIndex - 1);
    }
    
}
  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <img src={pictures[index]} alt="pictures"></img> <br />
            </div>
            
        </div>
        
      <div className='row'>
        <button onClick={nextSlide}>Next</button>
        <button onClick={prevSlide}>Previous</button>
      </div>
    </div>
  )
}
