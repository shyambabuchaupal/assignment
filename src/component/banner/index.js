import { Carousel } from 'react-bootstrap'
import "./index.css";
import React ,{useState, useEffect} from 'react';







const Banner = () => {

    var b1 = 'a1.jpg'
    var b2 = 'a2.jpg'
    var b3 = 'a3.jpg'
    var b4 = 'a4.jpg'

    var imgarray = [b1, b2, b3, b4]

    const [image, seImage] = useState(imgarray)

    const [index, setIndex] = useState(0)

    const previous = () => {

        var leng = image.length
        var i = index

        if (i > 0) {
            setIndex(index - 1)
        } else {
            setIndex(leng - 1)
        }


    }

    const next = () => {

        var leng = image.length
        var i = index

        if (i < leng - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }

    }

    useEffect(() => {

        setTimeout(() => {

            var leng = image.length
            var i = index

            if (i < leng - 1) {
                setIndex(index + 1)
            } else {
                setIndex(0)
            }


        }, 2000)

    })






    return (
        <div className='container-fluid mt-1 col-12 ' style={{ width: '100%' }} >


            <Carousel

                interval={2000}


            >


                {image.map(item => {

                    return (
                        <Carousel.Item key={item}>
                            <img
                                className="d-block w-100 bannerimg"
                                src={item}
                                alt="First slide"
                                style={{ cursor: 'pointer' }}

                            />



                        </Carousel.Item>


                    )


                })}




            </Carousel>


        </div>
    )
}

export default Banner