"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { SquarePen, Atom, Images, CircleUserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type Conversation = {
  id: number;
  title: string;
};

export function AppSidebar() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentPath, setCurrentPath] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const res = await fetch("http://localhost:3001/conversations");
        const data = await res.json();
        setConversations(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchConversations();
    setCurrentPath(pathname || "");
  }, [pathname]);
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex flex-row justify-between items-center relative  cursor-pointer">
            <div className="pl-1.5 pt-1 h-5 group flex items-center justify-center transition-opacity duration-200 group-data-[state=collapsed]:group-hover:opacity-0">
              <Atom />
            </div>
            <div className="group-data-[state=collapsed]:absolute group-data-[state=collapsed]:inset-0 group-data-[state=collapsed]:opacity-0 group-data-[state=collapsed]:group-hover:opacity-100 group-data-[state=collapsed]:group-hover:scale-110 flex items-center justify-center transition-opacity duration-200 ml-auto group-data-[state=collapsed]:ml-0">
              <SidebarTrigger />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className={currentPath === "/home"?"bg-gray-200":""}>
                <a href="/home">
                  <SquarePen />
                  <span>New Chat</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a>
                  <Images />
                  <span>Library</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Chats</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {conversations.length === 0 ? (
                <SidebarMenuItem>
                  <span className="text-muted">Loading chats…</span>
                </SidebarMenuItem>
              ) : (
                conversations.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className={currentPath === `/home/chat/${item.id}`?"bg-gray-200":""}>
                      <a href={`/home/chat/${item.id}`}>
                        <span className="sidebar-text group-data-[state=collapsed]:hidden">
                          {item.title}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="h-1/10">
              <a>
                <CircleUserRound />
                <span>Username</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
