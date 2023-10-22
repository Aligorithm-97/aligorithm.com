import React from "react";
import NavLink from "./NavLink";
import { navLinks } from "../../lib/data";
function MenuOverlay() {
  return (
    <ul className="flex flex-col py-4 items-center h-screen bg-black">
      {navLinks.map((e, index: number) => {
        return (
          <li key={index}>
            <NavLink href={e.href} title={e.title} />
          </li>
        );
      })}
    </ul>
  );
}

export default MenuOverlay;
