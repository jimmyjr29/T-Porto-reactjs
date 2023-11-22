import React from "react";

export default function Profile() {
    return (
        <div id="profile" className="section">
            <div className="container mx-auto max-w-[1200px] px-3 overflow-hidden">
                <div className="font-secondary text-center font-bold mb-12">
                    <h4 className="text-secondary mb-3">
                        Awesome Skills
                    </h4>
                    <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]"
                        data-aos="fade-up"
                        data-aos-duration="1000">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    </h2>
                </div>
                <div className="flex flex-col lg:flex-row items-start justify-between">
                    <div className="text-center w-full max-w-[400px] mx-auto mb-[50px]">
                        <div className="min-w-[300px] min-h-[300px] bg-gradient pt-[50px] rounded-full overflow-hidden"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            >
                            <img src="/images/profile.png" alt="Profile" />
                        </div>
                        <h2 className="text-gradient text-[24px] mt-[20px] font-bold">
                            Jimmy Jupri
                        </h2>
                    </div>
                    <div className="w-full lg:pt-[50px] lg:ml-[50px]">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                            <div className="w-full" 
                                data-aos="flip-left" 
                                data-aos-duration="1000"
                                data-aos-delay="0"
                                >
                                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                                    <img src="/images/1.png" alt="Skill 1" />
                                    <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                                        <div className="text-center w-full text-white">
                                            <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                                                <h4 className="text-gradient">
                                                    Jquery
                                                </h4>
                                            </div>
                                            <p>
                                                It looks like readable English.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full" 
                                data-aos="flip-left" 
                                data-aos-duration="1000"
                                data-aos-delay="300"
                                >
                                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                                    <img src="/images/2.png" alt="Skill 1" />
                                    <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                                        <div className="text-center w-full text-white">
                                            <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                                                <h4 className="text-gradient">
                                                    Bootsrap
                                                </h4>
                                            </div>
                                            <p>
                                                It looks like readable English.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full" 
                                data-aos="flip-left" 
                                data-aos-duration="1000"
                                data-aos-delay="600"
                                >
                                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                                    <img src="/images/3.png" alt="Skill 1" />
                                    <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                                        <div className="text-center w-full text-white">
                                            <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                                                <h4 className="text-gradient">
                                                    CSS
                                                </h4>
                                            </div>
                                            <p>
                                                It looks like readable English.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full" 
                                data-aos="flip-left" 
                                data-aos-duration="1000"
                                data-aos-delay="900"
                                >
                                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                                    <img src="/images/4.png" alt="Skill 1" />
                                    <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                                        <div className="text-center w-full text-white">
                                            <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                                                <h4 className="text-gradient">
                                                    HTML
                                                </h4>
                                            </div>
                                            <p>
                                                It looks like readable English.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full" 
                                data-aos="flip-left" 
                                data-aos-duration="1000"
                                data-aos-delay="1100"
                                >
                                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                                    <img src="/images/5.png" alt="Skill 1" />
                                    <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                                        <div className="text-center w-full text-white">
                                            <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                                                <h4 className="text-gradient">
                                                    React.Js
                                                </h4>
                                            </div>
                                            <p>
                                                It looks like readable English.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
