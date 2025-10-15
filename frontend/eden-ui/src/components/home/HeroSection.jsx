const HeroSection = function () {

    return(
        <div className="text-center mt-20 px-10">
            <h1 className="text-5xl font-md">See Your Garbage Collection Like Never Before</h1>
            <p className="text-xl mt-5">EdenLens gives you deep insights into Garbage Collection, visualizes heap behavior, and helps you optimize JVM performance, all in one sleek dashboard</p>

            <div className="mt-5 flex gap-5 justify-center">
                <button className="text-white bg-black px-6 py-2 rounded-md cursor-pointer">Analyze</button>
                <button className="border-2 px-6 py-2 rounded-md cursor-pointer">Register</button>
            </div>
        </div>
    )
}
export default HeroSection;