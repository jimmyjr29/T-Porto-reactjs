import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "./components/navigation";
import Banner from "./components/banner";
import Profile from "./components/profile";
import Portofolio from "./components/portofolio";
import Footer from "./components/footer";
import Header from "./components/header"; // Impor komponen Header

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    const animationSequence = [
        'Frontend Developer',
        3000,
        'Backend Developer',
        3000,
        'Website Developer',
        3000,
        'Mobile Developer',
        3000
    ];

    const description = "Many desktop publishing packages and web page editors..."; // Deskripsi yang ingin Anda tampilkan

    const headerData = {
        title: "Jimmy.Jr",
        // subtitle: "Jimskuy",
        githubUrl: "https://github.com/yourgithubusername",
        linkedinUrl: "https://www.linkedin.com/in/yourlinkedinusername"
    };

    return (
        <div className="App">
            <Header data={headerData} /> {/* Meneruskan prop data ke komponen Header */}
            <Navigation />
            <Banner animationSequence={animationSequence} description={description} />
            <Profile />
            <Portofolio />
            <Footer />
        </div>
    );
}

export default App;
