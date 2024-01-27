import React from "react";

const NavComponents = () => {
  return (
    <nav className="flex justify-between rounded mb-10 bg-zinc-200 p-3">
      <h1 className="text-4xl font-bold text-pink-950 hover:text-pink-800 font-sans cursor-pointer">
        Book Shop
      </h1>
      <div>
        <p className="hover:shadow-emerald-50 text-slate-600 hover:text-slate-900 cursor-pointer hover:shadow duration-300 text-xl rounded shadow-slate-500 shadow-md p-2">
          Menu
        </p>
      </div>
    </nav>
  );
};

export default NavComponents;
