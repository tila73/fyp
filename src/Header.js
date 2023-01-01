import React from "react";
import logo from "./assets/logo.svg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-purple-300">
      <div className="mx-20 py-3">
        {/* Top nav */}
        <div className="flex items-center p-1 flex-grow py-2">
          {/* Logo */}
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <img
              className="cursor-pointer mr-16"
              src={logo}
              alt="logo"
              width={200}
              height={40}
              objectFit="contain"
            />
          </div>

          {/* Search */}
          <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-white">
            <input
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
              type="text"
              placeholder="Search"
            />
            <MagnifyingGlassIcon className="h-14 p-4" />
          </div>

          {/* Right */}
          <div className="flex items-center text-sm font-bold whitespace-nowrap">
            <Link to='/login'>
              <div className="cursor-pointer mx-16">
                <div className="flex items-center">
                  <UserCircleIcon className="h-7" />
                  <ChevronDownIcon className="h-5" />
                </div>
                <p className="hidden md:inline">Account</p>
              </div>
            </Link>

            <div className="cursor-pointer">
              <ShoppingCartIcon className="h-18" />
              <p className="hidden md:inline">Cart</p>
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="flex items-center space-x-10 p-2 font-bold">
          <p className="cursor-pointer flex items-center">
            Shop
            <ChevronDownIcon className="h-4" />
          </p>
          <p className="cursor-pointer">Brands</p>
          <p className="cursor-pointer">Sell</p>
          <p className="cursor-pointer  flex items-center">
            Customer Service
            <ChevronDownIcon className="h-4" />
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
