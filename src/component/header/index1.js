import React from "react";
import "./index.css";


const BelowHeader = () => {
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container d-flex">
                    <a className="navbar-brand">
                        <img src="/myntra.png" style={{ height: '50px', width: 'auto' }} />
                    </a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item text-white">
                                <a class="nav-link active fw-bold" aria-current="page" href="#">Home</a>

                            </li>
                            <li class="nav-item text-white">
                                <a class="nav-link active fw-bold" aria-current="page" href="#">About</a>

                            </li>
                            <li class="nav-item text-white">
                                <a class="nav-link active fw-bold" aria-current="page" href="#">servece</a>

                            </li>
                            <li class="nav-item text-white">
                                <a class="nav-link active fw-bold" aria-current="page" href="#">Contact</a>

                            </li>
                            <li class="nav-item text-white">
                               <button className="btn btn1 shadow-none fw-bold">LOGIN</button>

                            </li>



                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}
export default BelowHeader;