"use client";
import React, { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const UserNavMenuItem = ({ item, onItemClick }) => {
  const pathname = usePathname();

  const isActive = pathname === item.path;

  return (
    <div className="w-full font-urbanist flex gap-2">
      {isActive ? (
        <div className="bg-primaryColorLight w-2.5 h-10 rounded-tr-lg rounded-br-lg" />
      ) : (
        <div className="bg-transparent w-2.5 h-10 rounded-tr-lg rounded-br-lg" />
      )}
      <Link
      onClick={onItemClick}
        href={item.path}
        className={cn(
          "flex flex-row space-x-2 items-center p-2",
          isActive ? "" : ""
        )}
      >
        {/* Clone the icon element and modify its fill prop with appropriate fill color*/}
        {React.cloneElement(item.icon, {
          fill: isActive ? "#1C0845" : "#292D32",
          stroke: isActive ? "#1C0845" : "#292D32",
        })}
        <span className="text-base font-normal text-textColor">
          {item.title}
        </span>
      </Link>
    </div>
  );
};

const MemoizedUserNavMenuItem = memo(UserNavMenuItem);
export { MemoizedUserNavMenuItem as UserNavMenuItem };
