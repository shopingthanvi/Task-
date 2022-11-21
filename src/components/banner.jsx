import React from 'react';
import Button from "./inputControl/button";
const Banner = () => {
    return (
        <>
            <div className="c-banner">

                <div className="c-banner__information">
                    <div className="c-banner__container">
                        <h1 className="c-banner__text">Save time! </h1>
                        <h1 className="c-banner__text">Get the best deal. </h1>
                        <Button
                            text="ENQUIRY NOW"
                            className="c-banner__button mt-3"
                        />
                    </div>

                </div>
            </div>


        </>

    );
}

export default Banner;