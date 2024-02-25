"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import MenuOverlay from "./MenuOverlay";
import { navLinks } from "../../lib/data";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-2 left-0 right-0 z-10 bg-[121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4">
        <Link
          href={"#landing"}
          className="text-2xl md:text-4xl text-white font-semibold"
        >
          <p>{"< aligorithm />"}</p>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => {
                setNavbarOpen(true);
              }}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <AiOutlineMenu className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => {
                setNavbarOpen(false);
              }}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <AiFillCloseCircle className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks?.map((e, i) => {
              return (
                <li key={i}>
                  <NavLink href={e.href} title={e.title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay /> : null}
    </nav>
  );
}
