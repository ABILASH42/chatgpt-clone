import { AudioLines, Mic, Plus } from "lucide-react";
import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen w-screen">
      <h1>Whats on your mind today?</h1>
      <div className="bg-gray-100 flex flex-row items-center h-13 w-4/10 rounded-full justify-around p-4">
        <Plus />
        <input className="outline-0 w-7/8" type="text" />
        <div className="flex flex-row justify-center items-center gap-2">
          <Mic />
          <AudioLines />
        </div>
      </div>
    </div>
  );
}

export default page;
