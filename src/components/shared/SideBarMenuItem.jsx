import React, { useState, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarMenuItem = ({ item }) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
      setSubMenuOpen(!subMenuOpen);
    };
  
    return (
      <div className="">
        {item.submenu ? (
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 w-full justify-between ${
              pathname.includes(item.path) ? "" : ""
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="font-normal text-base">{item.title}</span>
            </div>
          </button>
        ) : (
          <Link
            href={item.path}
            className={`flex flex-row space-x-4 items-center p-2 ${
              item.path === pathname ? "" : ""
            }`}
          >
            {item.icon}
            <span className="text-base font-normal">{item.title}</span>
          </Link>
        )}
      </div>
    );
  };

  const memoizedSideBarMenuItem = memo(SideBarMenuItem)
  export { memoizedSideBarMenuItem as SideBarMenuItem}