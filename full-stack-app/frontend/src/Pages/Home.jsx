import React from 'react'
import "./home.css"
export default function Home() {
  return (
    <div>
      <div id="surcontainer">
                <input type="radio" name="images" id="suri1" checked  />
                <input type="radio" name="images" id="suri2" />
                <input type="radio" name="images" id="suri3" />
                <input type="radio" name="images" id="suri4" />
        
                <div className="surslide_img" id="surone">
                    <img src="../images/topimg1.jpg"/>
        
                    <label  for="suri4"  className="surpre"></label>
                    <label  for="suri2"  className="surnxt"></label>
                </div>
             
        
                <div className="surslide_img" id="surtwo">
                    <img src="../images/top-img-2.jpg"/>
        
                    <label  for="suri1"  className="surpre"></label>
                    <label  for="suri3"  className="surnxt"></label>
            
                </div>
        
               
                <div className="surslide_img" id="surthree">
                    <img src="../images/img-top-4.webp"/>
        
                    <label  for="suri2"  className="surpre"></label>
                <label  for="suri4"  className="surnxt"></label>
                </div>
        
                
        
                <div className="surslide_img" id="surfour">
                    <img src="../images/top-img-5.jpg"/>
        
                    <label  for="suri3"  className="surpre"></label>
                    <label  for="suri1"  className="surnxt"></label>
                </div>
        
                <div className="surnav">
             <label className="surdots" id="surdot1" for="suri1"></label>
             <label className="surdots" id="surdot2" for="suri2"></label>
             <label className="surdots" id="surdot3" for="suri3"></label>
             <label className="surdots" id="surdot4" for="suri4"></label>
                </div>
               
            </div>
    </div>
  )
}
