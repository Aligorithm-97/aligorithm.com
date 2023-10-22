import Link from "next/link";

interface navlinktype {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: navlinktype) => {
  return (
    <Link
      className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-blue-200"
      href={href}
    >
      {title}
    </Link>
  );
};

export default NavLink;
