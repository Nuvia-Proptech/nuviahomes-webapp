"use client"
import { PaymentsIndex } from "@/components/dashboard/superAdmin/Payments/PaymentsIndex";
import { AppAdminNav } from "@/components/shared/AppAdminNav";
import React from "react";

export default function page() {
  return (
    <AppAdminNav>
      <PaymentsIndex />
    </AppAdminNav>
  );
}
