import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./index.css";

import MenuIcon from '@mui/icons-material/Menu';


const BelowHeader = () => {
    return (
        <>

            <div className="d-lg-block d-none">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container d-flex">
                    <a className="navbar-brand">     
                <Typography className="mx-3 fs-4 fw-bold">
                 Logo
                </Typography>
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
                               <button className="btn bg-dark text-white  shadow-none fw-bold">LOGIN</button>

                            </li>



                        </ul>

                    </div>
                </div>
            </nav>

            </div>



            <Paper className="d-lg-none d-block bg-light text-dark p-2">

                <Container>

                    <Box className='d-flex align-items-center'>
                    <Typography>
                   <MenuIcon />
                </Typography>

                <Typography className="mx-3 fs-4 fw-bold">
                 Logo
                </Typography>
                    </Box>

                </Container>


            </Paper>

            

        </>
    )
}
export default BelowHeader;