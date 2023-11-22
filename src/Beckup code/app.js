import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "./components/navigation";
import Banner from "./components/banner";
import Profile from "./components/profile";
import Portofolio from "./components/portofolio";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="App">
            <Header/>
            <Navigation />
            <Banner />
            <Profile />
            <Portofolio />
            <Footer />
        </div>
    );
}

export default App;
