import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Atom, ChevronDown, MessageCircleDashed, WalletCards } from "lucide-react";

function AppNavBar() {
  return (
    <div className="absolute top-0 left-0 w-full  flex flex-row justify-between items-center">
      <div className="p-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex flex-row gap-2 text-lg hover:bg-gray-100 p-2 rounded-2xl">ChatGPT <ChevronDown/></DropdownMenuTrigger>
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
          <div className="flex flex-row justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-full p-2">
              <h1 className="text-blue-800 font-medium px-2 ">Upgrade to Go</h1>
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100">
              <MessageCircleDashed/>
          </div>
    </div>
  );
}

export default AppNavBar;
