import { UserTransactionsIndex } from "@/components/dashboard/User/Transactions/UserTransactionsIndex";
import React from "react";

const AgentTransactionsPage = () => {
  return (
    <section className="flex justify-center items-center text-black">
      <UserTransactionsIndex />
    </section>
  );
};

export default AgentTransactionsPage;
