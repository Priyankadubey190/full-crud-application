import React from 'react'
import { ImageSlider } from '../Components/ImageSlider'
import "./home.css"
export default function Home() {
  return (
    <div className="homecontainer">


<ImageSlider />
 <div className="sach_cont">
    <div className="box3_backgroundimage">
       <div className="innerdiv">
           <img className="sach_2" src="https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/sach-img1.gif" alt="sach"/>
           <div><a className="sach_3" href="">SHOES</a></div>
           
       </div>
     
       <div className="innerdiv">
           <img className="sach_2" src="https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/face-cover.jpg"/>
           <div>
           <a  className="sach_3" href="">FACE COVERS</a>
           </div>
           
       </div>
       <div className="innerdiv">
        <img className="sach_2"  src="https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/atheli.jpg"/>
        <div> <a className="sach_3" href="">ATHLEISURE</a></div>
       
    </div>
    <div className="innerdiv">
        <img className="sach_2"  src="https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/ACCESSORIES.jpg"/>
        <div> <a className="sach_3" href="">ACCESSORIES</a></div>
       
    </div>
      </div>
    </div>
</div>
    
  )
}
