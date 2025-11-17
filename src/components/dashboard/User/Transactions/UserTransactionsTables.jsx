import React from 'react'
import { UserTransactionTableBodies } from './UserTransactionTableBodies';

export const UserTransactionsTables = ({ transactions }) => {
  return (
    <div className="overflow-x-auto w-full">
    <table className="w-full min-w-3xl text-sm text-left text-textColor">
      <thead className="">
        <tr className="text-textColor font-semibold text-sm font-urbanist">
          <th className="py-2">ID</th>
          <th className="py-2">Project</th>
          <th className="py-2">Client</th>
          <th className="py-2">Issued Date</th>
          <th className="py-2">Total</th>
          <th className="py-2">Balance</th>
          <th className="py-2">Status</th>
          <th className="py-2">Action</th>
        </tr>
      </thead>

      <tbody className="">
        {transactions.map((item) => {
          return (
            <UserTransactionTableBodies
            key={item.id}
              id={item.id}
              street={item.street}
              city={item.city}
              client={item.name}
              email={item.email}
              date={item.date}
              time={item.time}
              total={item.total}
              balance={item.balance}
              status={item.status}
            />
          );
        })}
      </tbody>
    </table>
  </div>
  )
}
