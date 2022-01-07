import React from "react";

import BelowHeader from "./index1";




const UpHeader = () => {
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-white bg-dark">
                <div class="container-fluid">

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
                            
                            <div class="nav-item text-white">
                                <a><i class="bi bi-envelope"></i> shyam18061996@gmail.com</a>
                            </div>
                            <div class="nav-item text-white">
                            <a><i class="bi bi-telephone-fill ms-1"></i> <span> +91 8987248619</span></a>
                            </div>

                        </ul>

                    </div>
                </div>
            </nav>

            <BelowHeader />


        </>
    )
}
export default UpHeader