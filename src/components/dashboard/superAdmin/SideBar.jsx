// components/Sidebar.jsx
import Link from "next/link";
import {
  Home,
  Users,
  Settings,
  BarChart3,
  LogOut,
  Search,
  Bell,
} from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import dashBoardIcon from "@/assets/dash1-icons/element-equal.svg";
import users from "@/assets/dash1-icons/people.svg";
import investments from "@/assets/dash1-icons/document-forward.svg";
import properties from "@/assets/dash1-icons/task-square.svg";
import projects from "@/assets/dash1-icons/task-square.svg";
import payments from "@/assets/dash1-icons/wallet-add.svg";
import messages from "@/assets/dash1-icons/messages.svg";
import bookings from "@/assets/dash1-icons/messages.svg";
import reports from "@/assets/dash1-icons/note.svg";
import setting from "@/assets/dash1-icons/cpu-setting.svg";

export default function Sidebar() {
  let dashBoardNav = [
    { item: "Dashboard", icon: dashBoardIcon },
    { item: "Users", icon: users },
    { item: "Investments", icon: investments },
    { item: "Properties", icon: properties },
    { item: "Projects", icon: projects },
    { item: "Payments", icon: payments },
    { item: "Messages", icon: messages },
    { item: "Bookings", icon: bookings },
    { item: "Reports", icon: reports },
    { item: "Settings", icon: setting },
  ];
  return (
    <div className="bg-[#F9FBFB] flex">
      <aside className="h-screen w-[236px] bg-[#1c0845] text-gray-100 flex flex-col shadow-lg">
        <Link href="/ " className="p-6 text-2xl font-bold tracking-wide border-gray-700">
          <Image src={logo} alt="" />
        </Link>

        <div className="flex-1 p-4 space-y-2 text-sm">
          {dashBoardNav.map((item) => (
            <button
              key={item}
              className=" w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
            >
              <Image src={item.icon} alt={`${item.item} icon`} />
              <span>{item.item}</span>
            </button>
          ))}
        </div>
      </aside>
      {/*  */}
      <div className="w-full">
        <div className="flex justify-between items-center text-black py-4 border w-full bg-white px-4">
          <div>
            <p className="text-24">Nuvia Home Properties</p>
            <p className="text-12">Nuvia Home Properties</p>
          </div>
          <div className="flex justify-between gap-2 items-center">
            <div className="relative w-full max-w-sm border-black">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-full border border-gray-300 bg-white px-4 py-2 pl-10 text-gray-700 focus:outline-none"
              />
            </div>

            <div className="bg-[#F9FBFB] rounded-full p-3">
              <Bell />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
