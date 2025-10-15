import { RiRecycleFill } from "react-icons/ri";

const NavBar = () => {
    return(
        <div className="p-8 flex justify-between">
            <div className="flex items-center">
                <RiRecycleFill size={50} />
                <h1 className="text-4xl font-bold ml-5">EdenLens</h1>
            </div>
            <div className="flex gap-10">
                <p className="cursor-pointer">Home</p>
                <p className="cursor-pointer">Features</p>
                <p className="cursor-pointer">Pricing</p>
                <p className="cursor-pointer">Blogs</p>
            </div>
        </div>
    )
}

export default NavBar;