import { Container, Paper } from "@mui/material";

import { useState, } from "react";
import im1 from '../../image/t1.webp'





const Product1 = () => {

    const v = [1, 2, 3]
    const [img, setImg] = useState(v)







    return (
        <div >

            <Container>
                <div className="mb-2 mt-3">
                    <h4 className="text-center "><strong>Developer On Demand</strong></h4>
                </div>


                <div className="p-lg-2 p-0 d-flex justify-content-center align-items-center col-12 mt-4">


                    <div className="row col-12 ">



                        {
                            img.map((item) => {
                                return (<div className="col-lg-4  col-12" >
                                    <Paper className="p-2 mx-1  mb-2">
                                        <img src={im1} className="mb-2 col-12" />


                                    </Paper>

                                </div>

                                )
                            })
                        }



                    </div>

                </div>


            </Container>

        </div>
    )
}
export default Product1;