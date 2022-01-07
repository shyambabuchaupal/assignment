import FacebookIcon from '@mui/icons-material/Facebook';


import InstagramIcon from '@mui/icons-material/Instagram';

import PinterestIcon from '@mui/icons-material/Pinterest';

import PhoneIcon from '@mui/icons-material/Phone';

import EmailIcon from '@mui/icons-material/Email';

import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Subscribe from '../subscribe';

import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
    return (

        <div>

            <div className='bg-light p-2 d-flex justify-content-center align-items-center'>

                <div className='d-xl-block d-lg-block d-md-block d-none col-12 container'>

                    <div className=' col-12 row col-12 p-5 '>

                        <div className='col-lg-3 col-xl-3 col-md-3 '>
                            <h5 className=' text-uppercase fontsizeheading'>Shop</h5>

                            <ul className='textul  m-0 p-0 list-unstyled'>
                                <li><a>New Arrival</a></li>
                                <li><a>Trending products</a></li>
                                <li><a>Top Brands</a></li>

                                <li><a>All Products</a></li>
                            </ul>

                        </div>

                        <div className='col-lg-3 col-xl-3 col-md-3'>
                            <h5 className='text-uppercase fontsizeheading'>Customer service</h5>

                            <ul className='textul m-0 p-0 list-unstyled'>
                                <li className='text-lowercase'><a ><EmailIcon />: support@fitlife.in</a></li>
                                <li><a><PhoneIcon />:+918987248619</a></li>
                                <li><a>Privacy and policy</a></li>
                                <li><a>Refund and cancellations</a></li>

                            </ul>

                        </div>


                        <div className='col-lg-3 col-xl-3 col-md-3'>
                            <h5 className='text-uppercase fontsizeheading'>Keep in touch</h5>

                            <div className=''>
                                <span><InstagramIcon /> </span>
                                <span className='mx-1'><PinterestIcon /> </span>
                                <span className='mx-1'><FacebookIcon /> </span>
                                <span className='mx-1'><YouTubeIcon /></span>

                            </div>




                        </div>

                        <div className='col-lg-3 col-xl-3 col-md-3 '>
                            <h5 className='text-uppercase fontsizeheading'>Office address</h5>

                            <ul className='textul m-0 p-0 list-unstyled'> <li><a>Sector 5 ,subash nagar ,273353 , gandhi nagar, Haryana</a> </li> </ul>

                            <div className='mt-2'>
                                <p className=' text-uppercase fw-bold fontsizeheading'>Payment Accept</p>


                                <div className=''>


                                    <span>
                                        <img src='/t.svg' />
                                    </span>


                                </div>
                            </div>


                        </div>



                    </div>

                </div>



                <div className='d-xl-none d-lg-none d-md-none d-block'>


                    <Accordion className='shadow-none'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className='text-uppercase fw-bold fontsizeheading'>Shop </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>

                                <ul className='textul  m-0 p-0 list-unstyled'>
                                    <li className='p-1'><a>New Arrival</a></li>
                                    <li className='p-1'><a>Trending products</a></li>
                                    <li className='p-1'><a>Top Brands</a></li>

                                    <li className='p-1'><a>All Products</a></li>
                                </ul>

                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='shadow-none'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className='text-uppercase fw-bold fontsizeheading'>customer service</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>


                                <ul className='textul m-0 p-0 list-unstyled'>
                                    <li className='text-lowercase p-1'><a><EmailIcon />: support@.in</a></li>
                                    <li className='p-1'><a><PhoneIcon />:+918987248619</a></li>
                                    <li className='p-1'><a>Privacy and policy</a></li>
                                    <li className='p-1'><a>Refund and cancellations</a></li>

                                </ul>


                            </Typography>

                        </AccordionDetails>

                    </Accordion>




                    <Accordion className='shadow-none'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className='text-uppercase fw-bold fontsizeheading'>office address</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>


                                <ul className='textul m-0 p-0 list-unstyled'> <li><a>Sector 5 , Palam vihar, 122005, gurgaon ,Haryana </a> </li> </ul>



                            </Typography>

                        </AccordionDetails>

                    </Accordion>

                    <div className='mt-3 mx-2'>

                        <h5 className='text-uppercase fw-bold fontsizeheading'>keep in touch</h5>

                        <Typography>

                            <div className=''>
                                <span><InstagramIcon /> </span>
                                <span className='mx-1'><PinterestIcon /> </span>
                                <span className='mx-1'><FacebookIcon /> </span>
                                <span className='mx-1'><YouTubeIcon /></span>


                            </div>

                            <div className='mt-3'>
                                <p className=' text-uppercase fw-bold fontsizeheading mb-0'>Payment Accept</p>

                                <div className=''>


                                    <span>
                                        <img src='/t.svg' className='col-11' />
                                    </span>


                                </div>
                            </div>
                        </Typography>
                    </div>
                </div>

            </div>
            <hr />

            <div className='text-center bg-light'>
                <p>Copyright 2021  All Rights Reserved</p>
            </div>

        </div>

    );
};

export default Footer;