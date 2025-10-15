import { BookingsIndex } from "@/components/dashboard/superAdmin/Bookings/BookingsIndex";
import { AppAdminNav } from "@/components/shared/AppAdminNav";
import React from "react";

export default function page() {
  return (
    <AppAdminNav>
      <BookingsIndex />
    </AppAdminNav>
  );
}
