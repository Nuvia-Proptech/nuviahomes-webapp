import React from "react";
import { PropertiesTableBodies } from "./PropertiesTableBodies";
import { propertyData } from "@/lib/dummyData/propertieData";

export const PropertiesTables = () => {
  return (
    <div className="overflow-x-auto my-5">
      <table className="min-w-[900px] w-full text-sm text-left text-textColor">
        <thead className="">
          <tr className="text-textColor font-semibold text-sm font-urbanist">
            <th className="py-5">ID</th>
            <th>Properties</th>
            <th>Type | Category</th>
            <th>Price | User</th>
            <th>Featured</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="">
          {propertyData.map((item) => {
            return (
              <PropertiesTableBodies
                id={item.id}
                street={item.street}
                city={item.city}
                type={item.type}
                category={item.category}
                price={item.price}
                user={item.user}
                isFeatured={item.isFeatured}
                status={item.status}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
