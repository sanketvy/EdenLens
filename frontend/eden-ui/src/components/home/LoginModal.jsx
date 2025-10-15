const LoginModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50" onClick={onClose}>
            <div className="bg-white text-black p-6 rounded-lg w-[480px] shadow-2xl text-center" onClick={(e) => e.stopPropagation()}>
                <div>
                    <h1 className="text-xl font-semibold">Login</h1>
                    <p className="mt-5">Start using EdenLens to visualize your garbage collection logs and improve performance.</p>

                    <div className="flex flex-col">
                        <p className="text-left mt-10 mb-2">Email:</p>
                        <input type="text" placeholder="Enter your Email" className="w-full bg-gray-100 p-2" />
                        
                        <p className="text-left mt-5 mb-2">Password:</p>
                        <input type="password" placeholder="Enter your Password" className="w-full bg-gray-100 p-2" />
                        <button className="text-white bg-black px-6 py-2 rounded-md cursor-pointer mt-10">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
