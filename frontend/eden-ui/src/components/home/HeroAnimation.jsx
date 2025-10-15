import { useEffect, useState } from "react";

const HeroAnimation = () => {
    const [gc, setGc] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setGc(prev => prev + 1);           
        }, 1000); 
    }, []);


    const gridCreation = () => {
        let grid = [];
        let colors = ["bg-red-500", "bg-green-500", "bg-yellow-500", "bg-gray-500", "bg-blue-500", "bg-gray-500"];
        for(let i=0; i<15; i++){
            let colIndex = Math.floor(Math.random() * 6);
            grid.push(<div className={`w-15 h-15 bg-black ${colors[colIndex]}`}></div>);
        }
        return grid;
    }

    return (
        <div className="flex flex-col justify-center items-center gap-5 mt-20">
            {[...Array(4)].map((_, idx) => (
                <div key={idx} className="flex gap-3">
                {gridCreation()}
                </div>
            ))}

            <div className="flex gap-5 mt-7">
                <div className="flex items-center gap-3">
                    <span className="w-[24px] h-[24px] rounded-md bg-green-500 inline-block"></span>
                    <p className="text-gray-700 font-medium">Eden Space</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="w-[24px] h-[24px] rounded-md bg-yellow-500 inline-block"></span>
                    <p className="text-gray-700 font-medium">Survivor Space</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="w-[24px] h-[24px] rounded-md bg-blue-500 inline-block"></span>
                    <p className="text-gray-700 font-medium">Old Generation Space</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="w-[24px] h-[24px] rounded-md bg-red-500 inline-block"></span>
                    <p className="text-gray-700 font-medium">Humongous Space</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="w-[24px] h-[24px] rounded-md bg-gray-500 inline-block"></span>
                    <p className="text-gray-700 font-medium">Free Memory</p>
                </div>
            </div>

            <h1>*Representation of G1 GC Garbage collection.</h1>
        </div>
    )
}

export default HeroAnimation;