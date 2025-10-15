import Login from "@/components/auth/admin/Login";
import React from "react";
import ForgotPAssWord from "../../components/auth/admin/ForgotPAssWord";
import Sidebar from "@/components/dashboard/superAdmin/SideBar";

export default function page() {
  return (
    <div>
       <Login />
      {/*<ForgotPAssWord /> */}
      {/* <Sidebar /> */}
    </div>
  );
}
