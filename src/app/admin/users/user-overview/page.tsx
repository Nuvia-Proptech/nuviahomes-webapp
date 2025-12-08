import React from "react";

import { SuperAdminHeader } from "@/components/dashboard/superAdmin/SuperAdminHeader";
import SecondOne from "@/components/testBed/SecondOne";

export default function page() {
  return (
    <div className="w-full flex-1 md:ml-60 justify-center items-center h-screen text-black bg-secondaryColor ">
      <SuperAdminHeader />
      <SecondOne />
    </div>
  );
}
