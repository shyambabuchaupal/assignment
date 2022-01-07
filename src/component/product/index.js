import Carousel from "react-multi-carousel"
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import "react-multi-carousel/lib/styles.css";
import CardMedia from '@mui/material/CardMedia';
import im1 from '../../image/t4.jpg'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
};

const Productcart = () => {
    const v = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [cartimg, setCartimg] = useState(v);



    return (
        <div className='container'>
            <div className="col-12 mt-3">
            
                <div className="text-center ">
                    
                    <h4 ><strong>Products</strong></h4>
                </div>

                <Carousel

                    responsive={responsive}
                    infinite

                >
                    {cartimg.map(item => {
                        return (
                            <div>

                                <Card className=" mx-2 " >

                                    <div className='main-productimg'>

                                        <CardMedia
                                            component="img"
                                            image={im1}
                                            alt="green iguana"
                                            className='productcart-img '
                                            style={{ width: '100%', height: 'auto' }}
                                        />



                                    </div>





                                </Card>


                            </div>
                        )
                    })}
                </Carousel>






            </div>
        </div>
    )
}
export default Productcart