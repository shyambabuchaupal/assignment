import { Typography } from "@mui/material";
import React from "react";

import BelowHeader from "./index1";




const UpHeader = () => {
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-white bg-dark col-12">
                <div class="container ">

                    <div className="d-flex justify-content-center align-items-center col-12">

                      <div className="d-flex justify-content-evenly align-items-center flex-lg-row flex-column col-12">

                      <div >
                            <Typography className="fw-bold rounded-pill p-2 bg-white text-dark">get extra 20% off with purchasing prouct</Typography>
                        </div>


                        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center">
                               
                        <div class="nav-item text-white mt-lg-0 mt-2">
                                <a><i class="bi bi-envelope"></i> shyam18061996@gmail.com</a>
                            </div>

                            <div class="nav-item text-white mx-2 mt-lg-0 mt-2">
                            <a><i class="bi bi-telephone-fill ms-1"></i> <span> +91 8987248619</span></a>
                            </div>

                        </div>
                        



                      </div>

                      </div>
                  
                       

                </div>
            </nav>

            <BelowHeader />


        </>
    )
}
export default UpHeader