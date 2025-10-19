import { Link } from "react-router-dom";

const AppNavbarUserMenuModal = () => {

    console.log(window.location.pathname)
    return (
    <div className="absolute w-40 right-4 top-17 bg-black text-white p-4 rounded-lg shadow-lg">
      <h1 className="text-lg font-semibold">User Menu</h1>
      <ul className="mt-2 space-y-2">
        { !(window.location.pathname === "/dashboard") && <Link className="block hover:text-gray-300 cursor-pointer" to="/dashboard" >Dashboard</Link>}
        { !(window.location.pathname === "/projects") && <Link className="block hover:text-gray-300 cursor-pointer" to="/projects" >Projects</Link>}
        { !(window.location.pathname === "/settings") && <Link className="block hover:text-gray-300 cursor-pointer" to="/settings" >Settings</Link>}
        <Link className="block hover:text-gray-300 cursor-pointer">Logout</Link>
      </ul>
    </div>
  );
};

export default AppNavbarUserMenuModal;
