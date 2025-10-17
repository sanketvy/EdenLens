const AppNavbarUserMenuModal = () => {
  return (
    <div className="absolute w-40 right-4 top-17 bg-black text-white p-4 rounded-lg shadow-lg">
      <h1 className="text-lg font-semibold">User Menu</h1>
      <ul className="mt-2 space-y-2">
        <li className="hover:text-gray-300 cursor-pointer">Profile</li>
        <li className="hover:text-gray-300 cursor-pointer">Settings</li>
        <li className="hover:text-gray-300 cursor-pointer">Logout</li>
      </ul>
    </div>
  );
};

export default AppNavbarUserMenuModal;
