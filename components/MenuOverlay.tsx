import React from "react";
import NavLink from "./NavLink";
const navLinks = [
  {
    href: "#about",
    title: "About",
  },
  {
    href: "#projects",
    title: "Projects",
  },
  {
    href: "#contact",
    title: "Contact",
  },
];
function MenuOverlay() {
  return (
    <ul className="flex flex-col py-4 items-center ">
      {navLinks.map((e, index: number) => {
        return (
          <li key={index}>
            <NavLink href={e.href} title={e.title} />;
          </li>
        );
      })}
    </ul>
  );
}

export default MenuOverlay;
