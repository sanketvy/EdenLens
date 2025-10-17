import { RiRecycleFill } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";

import AppNavbarUserMenuModal from "./AppNavbarUserMenuModal";
import { useState } from "react";

const AppNavbar = () => {

    const [userMenuOpen, setUserMenuOpen] = useState(false);

    return (
        <>
            <div className="bg-black flex justify-between items-center text-white px-5 py-2">
                <div className="flex items-center">
                    <RiRecycleFill size={50} />
                    <h1 className="text-4xl font-bold ml-5">EdenLens</h1>
                </div>
                <div>
                    <RxAvatar size={40} onClick={()=>setUserMenuOpen(prev => !prev)} />
                </div>
            </div>

            {userMenuOpen && <AppNavbarUserMenuModal/>}
        </>
    )
}

export default AppNavbar;