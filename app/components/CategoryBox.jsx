'use client'

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import qs from "query-string";

const CategoryBox = ({ selected, label, icon: Icon }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = () => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery = {
      ...currentQuery,
      category: label,
    };

    if (params.get("category") === label) delete updatedQuery.category;

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 cursor-pointer  hover:text-black
       ${
         selected
           ? "border-neutral-900 border-b-4 text-black"
           : "border-transparent"
       } 
       ${selected ? "text-black font-bold" : "text-neutral-500 "}`}>
      <Icon className="text-2xl" />
      <p className="text-sm  font-medium">{label}</p>
    </div>
  );
};

export default CategoryBox;
