import { useState } from "react";
import HeroAnimation from "../components/home/HeroAnimation";
import HeroSection from "../components/home/HeroSection";
import NavBar from "../components/home/NavBar";
import LoginModal from "../components/home/LoginModal";
import RegisterModal from "../components/home/RegisterModal";

const HomePage = () => {
    const [isLoginModalActive, setIsLoginModalActive] = useState(false);
    const [isRegisterModalActive, setIsRegisterModalActive] = useState(false);

    return (
        <>
            <div>
                <NavBar />
                <HeroSection setIsLoginModalActive={setIsLoginModalActive} setIsRegisterModalActive={setIsRegisterModalActive} />
                <HeroAnimation />
            </div>
            {isLoginModalActive && <LoginModal onClose={() => setIsLoginModalActive(false)} />}
            {isRegisterModalActive && <RegisterModal onClose={() => setIsRegisterModalActive(false)} />}

        </>
    )
}

export default HomePage;