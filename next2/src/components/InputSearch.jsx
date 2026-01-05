"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value.trim();
    // console.log(value);
    // new search parameter
    const newParams = new URLSearchParams(params.toString());
    // set query
    newParams.set("search", value);
    router.push(`?${newParams.toString()}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          className="border p-2"
          type="text"
          placeholder="enter your food"
        />
        <button className="border p-2 rounded">Search</button>
      </form>
    </div>
  );
};

export default InputSearch;
