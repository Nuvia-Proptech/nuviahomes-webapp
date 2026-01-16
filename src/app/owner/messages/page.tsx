import { UserMessagesIndex } from "@/components/dashboard/User/Messages/UserMessagesIndex";
import React from "react";

const OwnerMessagesPage = () => {
  return (
    <section className="flex justify-center items-center text-black">
      <UserMessagesIndex />
    </section>
  );
};

export default OwnerMessagesPage;
