"use client";
import SearchBar from "@/components/ui/SearchBar";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
type Message = {
  role: "user" | "ai";
  text: string;
};

function page() {
  const [messages, setMessages] = useState<Message[]>([]);
  const params = useParams();
  const conversationId = params.id;

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(`http://localhost:3001/conversations/${conversationId}`);
        const data = await res.json();
        setMessages(data.messages);
      } catch (err) {
        console.error(err);
      }
    };

    if (conversationId) fetchMessages();
  }, [conversationId]);


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
                className={`p-3 rounded-2xl  ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white rounded-br-none max-w-md "
                    : "text-gray-900  w-full"
                }`}
              >
                {msg.role === "ai" && msg.text.includes("def") ? (
                  <pre className="bg-black text-green-400 p-2 rounded mt-2 text-sm overflow-x-auto">
                    {msg.text}
                  </pre>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center py-5">
        <div className=" flex w-full justify-center">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default page;
