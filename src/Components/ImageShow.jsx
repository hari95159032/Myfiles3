import React, { useState } from 'react'

export default function ImageShow() {
    let pictures=["https://cdn.pixabay.com/photo/2023/09/14/15/54/bird-8253245_1280.jpg",
    "https://media.istockphoto.com/id/1251671390/photo/fischers-lovebird-agapornis-fischeri-adults-standing-on-branch.jpg?s=1024x1024&w=is&k=20&c=Wvp4njGNRR2hvF4c74_n8w-JzyOQHAFdRHu3hsnoJvs=",
"https://media.istockphoto.com/id/1407436320/photo/red-munia-bird.jpg?s=1024x1024&w=is&k=20&c=d0zuxDSP_mpPO_vbqAlbVCBOwl2erhgMox45cfrkruo=",
"https://cdn.pixabay.com/photo/2023/12/10/23/26/bird-8442508_1280.jpg"
]
    const[image,setImage] = useState();
    let func = () =>{
        setImage(0)

    }
    
  return (
    <div>
        <img src={pictures[image]} alt="image"></img><br />
      <button onClick={func}>Show</button>
    </div>
  )
}
