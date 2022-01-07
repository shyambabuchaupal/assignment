import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Banner from "./component/banner";
import UpHeader from "./component/header";
import CaseProduct from "./component/caseproduct";
import Productcart from "./component/product";
import Services from "./component/services";
import Product1 from "./component/product1";
import Subscribe from "./component/subscribe";
import Footer from "./component/footer";


const App =()=>{
    return(
        <>
       <UpHeader />
       <Banner />
       <Productcart />
       <Services />
       <CaseProduct />
       <Product1 />
       <Subscribe />
       <Footer />
        
        </>
    )
}
export default App;