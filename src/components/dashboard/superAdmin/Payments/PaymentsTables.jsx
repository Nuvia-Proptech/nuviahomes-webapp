import React from "react";
import { PaymentsTableBodies } from "./PaymentsTableBodies";

export const PaymentsTables = ({ paymentsData }) => {
  return (
    <div className="overflow-x-auto my-5">
      <table className="min-w-[900px] w-full text-sm text-left text-textColor">
        <thead className="">
          <tr className="text-textColor font-semibold text-sm font-urbanist">
            <th className="py-2 w-16">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2 w-64">Method</th>
            <th className="py-2 w-32">Amount</th>
            <th className="py-2">Change</th>
            <th className="py-2">Date</th>
            <th className="py-2">Payable Amount</th>
            <th className="py-2 w-32">Actions</th>
          </tr>
        </thead>

        <tbody className="">
          {paymentsData.map((item) => {
            return (
              <PaymentsTableBodies
                id={item.id}
                name={item.name}
                method={item.method}
                amount={`#${item.amount}`}
                charge={`#${item.charge}`}
                date={item.date}
                payable={item.payableAmount}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
