import React from 'react';
import Img from "./../../src/aboutUs.png"
import Button from "./inputControl/button"
const AboutUs = () => {
    return (
        <section className="c-aboutus">
            <div className="c-aboutus__left">
                <h1 className="c-aboutus__heading">About Us</h1>
                <p className="c-aboutus__discription" >We are highly concerned about supplying goods of highest quality to our customers
                    so that they reward us with repeat orders. Our expertise and experience help us to provide you
                    only the best quality products.
                    We have set up a web based interface to facilitate
                    better communication with clients and the company.</p>
                <Button
                    secondry
                    text="LEARN MORE"
                />
            </div>
            <img className="c-aboutus__right" src={Img} />
        </section>
    );
}

export default AboutUs;