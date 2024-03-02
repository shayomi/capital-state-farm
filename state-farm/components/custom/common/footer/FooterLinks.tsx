"use client";

import React from "react";
import { MenuItems } from "../../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Typography } from "@/components/ui/typography";

const FooterLinks = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="flex flex-col gap-y-4 justify-center">
        <Typography variant="h3">Useful Links</Typography>
        <div className="flex flex-col gap-y-4">
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
      </div>
    </div>
  );
};

export default FooterLinks;
