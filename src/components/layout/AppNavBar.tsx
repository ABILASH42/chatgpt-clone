"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Atom,
  ChevronDown,
  Ellipsis,
  MessageCircleDashed,
  Share,
} from "lucide-react";
import { usePathname } from "next/navigation";

function AppNavBar() {
  const isChatPage = usePathname().startsWith("/home/chat");
  return (
    <div className="absolute top-0 left-0 w-full  flex flex-row justify-between items-center">
      <div className="p-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex flex-row gap-2 text-lg hover:bg-gray-100 p-2 rounded-2xl">
            ChatGPT <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>
              <div className="flex flex-row justify-center items-center gap-2">
                <Atom />
                <div>
                  <h1>ChatGPT Go</h1>
                  <p className="text-gray-400">Our smartest model & more</p>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex flex-row justify-center items-center gap-2">
                <Atom className="h-30" />
                <div>
                  <h1>ChatGPT Plus</h1>
                  <p className="text-gray-400">Our smartest model & more</p>
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {isChatPage ? (
        <div className="flex flex-row justify-center items-center mr-5 gap-2">
          <div className="flex flex-row  justify-center items-center gap-2 hover:bg-gray-100 p-2 rounded-2xl">
            <Share className="w-4" />
            <p>Share</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex flex-row gap-2 text-lg hover:bg-gray-100 p-2 rounded-2xl">
              <Ellipsis />
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="end">
              <DropdownMenuItem>
                <div className="flex flex-row justify-center items-center gap-2">
                  <h1>Delete</h1>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-row justify-center items-center gap-2">
                  <h1>Edit</h1>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <>
          <div className="flex flex-row justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-full p-2">
            <h1 className="text-blue-800 font-medium px-2 ">Upgrade to Go</h1>
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100">
            <MessageCircleDashed />
          </div>
        </>
      )}
    </div>
  );
}

export default AppNavBar;
