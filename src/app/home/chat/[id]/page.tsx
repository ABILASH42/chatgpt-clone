"use client";
import SearchBar from "@/components/ui/SearchBar";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
type Message = {
  role: "user" | "ai";
  text: string;
};

function page() {
  const [messages, setMessages] = useState<Message[]>([]);
  const params = useParams();
  const conversationId: any = params.id;
  const bottomRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/conversations/${conversationId}`
        );
        const data = await res.json();
        setMessages(data.messages);
      } catch (err) {
        console.error(err);
      }
    };

    if (conversationId) fetchMessages();
  }, [conversationId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="mx-auto w-[60%]">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 m-1 rounded-2xl  ${
                  msg.role === "user"
                    ? "bg-gray-200  rounded-br-none max-w-md whitespace-pre-wrap"
                    : "text-gray-900  w-full whitespace-pre-wrap"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div ref={bottomRef}></div>
      </div>
      <div className="flex flex-row items-center justify-center py-5">
        <div className=" flex w-full justify-center">
          <SearchBar id={conversationId} setMessages={setMessages} />
        </div>
      </div>
    </div>
  );
}

export default page;
