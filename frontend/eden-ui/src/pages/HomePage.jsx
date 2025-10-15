import HeroAnimation from "../components/home/HeroAnimation";
import HeroSection from "../components/home/HeroSection";
import NavBar from "../components/home/NavBar";

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <HeroAnimation />
        </div>
    )
}

export default HomePage;