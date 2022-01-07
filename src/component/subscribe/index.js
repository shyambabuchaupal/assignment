import { useState } from "react"
import "./index.css"

function Subscribe() {

  
    



    return (
        <div className='subscribeus p-4 col-12 d-flex justify-content-center align-items-center'>

            <div className='col-12 d-flex justify-content-center align-items-center flex-column'>

                <p className='fw-bold subscribetext'>Subscribe to All</p>

                <p>Stay informed for latest product and launches.</p>


                <div className='col-lg-3 col-md-4 col-12 d-flex  flex-lg-row flex-md-row flex-column  '>

                    <input placeholder='Your email address' className='form-control p-2 shadow-none col-5' name="email"  />
                    <button className='btn btncolor p-lg-2 p-md-3 p-2 col-lg-auto col-md-auto col-5 shadow-none  mx-1 text-white mt-lg-0 mt-md-0 mt-2 text-center '>Subscribe</button>
                </div>
              

            </div>



        </div>
    )


}

export default Subscribe