import React from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Banner() {
    return (
        <div id="home" className="section container mx-auto max-w-[1200px] px-3 items-center">
            <div className="w-full">
                <div className="block text-center font-secondary font-black text-30px" >
                    <h1 data-aos="zoom-in">Hello, I am</h1>
                    <div>
                        <TypeAnimation
                            sequence={[
                                'Ferontend Devloper',
                                3000,
                                'Backend Developer',
                                3000,
                                'Website Developer',
                                3000,
                                'Mobile Developer',
                                3000
                            ]}
                            wrapper="span"
                            cursor={true}
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                            className="ml-3 text-secondary"
                        />
                    </div>
                </div>
                <div className="max-w-[750px] text-center mx-auto mt-5" 
                    data-aos="fade-up"
                    data-aos-duration="3000">
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                </div>
            </div>
        </div>
    )
}
