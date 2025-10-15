"use client";
import { MessagesIndex } from "@/components/dashboard/superAdmin/Messages/MessagesIndex";
import { AppAdminNav } from "@/components/shared/AppAdminNav";
import React from "react";

export default function page() {
  return (
    <AppAdminNav>
      <MessagesIndex />
    </AppAdminNav>
  );
}
