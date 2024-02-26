"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "../../../../public/images/csf.svg";
import { MenuItems } from "../../constants";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { clsx } from "clsx";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg fixed z-10 w-full">
      <div className="container flex justify-between px-10 items-center py-5">
        <Link href="/">
          <Image
            src={Logo}
            alt="Accelerate Africa's Logo"
            width={120}
            className="w-[110px] sm-[120px]"
          />
        </Link>

        <div className="hidden sm:block">
          {MenuItems.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              className={clsx(
                pathname === item.route || pathname.startsWith(item.route + "/")
                  ? "text-primary hover:text-red-500"
                  : "text-foreground hover:text-gray-500",
                "px-4 font-medium"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
