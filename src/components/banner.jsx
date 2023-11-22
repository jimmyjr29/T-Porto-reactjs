// Banner.js
import React from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Banner(props) {
    return (
        <div id="home" className="section container mx-auto max-w-[1200px] px-3 items-center">
            <div className="w-full">
                <div className="block text-center font-secondary font-black text-30px">
                    <h1 data-aos="zoom-in">Hello, I am</h1>
                    <div>
                        <TypeAnimation
                            sequence={props.animationSequence} // Menggunakan prop untuk urutan animasi
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
                    {props.description} {/* Menggunakan prop untuk deskripsi */}
                </div>
            </div>
        </div>
    )
}
