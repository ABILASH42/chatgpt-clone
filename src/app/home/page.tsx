"use client";
import React from "react";
import SearchBar from "@/components/ui/SearchBar";

function page() {
  
  return (
    <div className="flex flex-col gap-8 justify-center-safe items-center h-screen  w-full ">
      <h1 className="text-3xl ">Whats on your mind today?</h1>
      <SearchBar/>
    </div>
  );
}


export default page;
