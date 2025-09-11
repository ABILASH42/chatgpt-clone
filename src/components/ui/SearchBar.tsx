import { Plus, Mic, AudioLines, ArrowUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { title } from "process";
import React, { useRef, useState } from "react";

type SearchBarProps = {
  id: string;
  setMessages: any;
};

function SearchBar({ id, setMessages }: SearchBarProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [prompt, setPrompt] = useState("");
   const router = useRouter();

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
      setPrompt(textarea.value);
    }
  };

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    
    if (id === "home") {
      const newConvo = {
        id: Date.now().toString(),
        title: prompt.slice(0, 20) || "New Conversation", 
        messages: [
          {
            id: Date.now(),
            role: "user",
            text: prompt,
          },
        ],
      };
      console.log(newConvo)

      await fetch(`http://localhost:3001/conversations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newConvo),
      });

      console.log("New conversation created:", newConvo);
      setPrompt("");
      router.push(`home/chat/${newConvo.id}`);
    }  else {
      try {
        const convoRes = await fetch(
          `http://localhost:3001/conversations/${id}`
        );
        const convo = await convoRes.json();

        const newMessage = {
          id: Date.now(),
          role: "user",
          text: prompt,
        };

        const updatedMessages = [...convo.messages, newMessage];
        const res = await fetch(`http://localhost:3001/conversations/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: updatedMessages,
          }),
        });

        const data = await res.json();
        console.log("Server response:", data);
        setPrompt("");
        setMessages(updatedMessages);
        if (textareaRef.current) {
          textareaRef.current.style.height = "auto";
        }
      } catch (error) {
        console.error("Error submitting:", error);
      }
    }
  };

  return (
    <div className="shadow-sm border-1   flex flex-row items-end  w-[58%]  rounded-4xl justify-around p-2 relative ">
      <div className="rounded-full flex justify-items-center hover:bg-gray-200 p-2">
        <Plus />
      </div>
      <textarea
        ref={textareaRef}
        onInput={handleInput}
        value={prompt}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
          }
        }}
        className="flex-1 outline-none bg-transparent resize-none overflow-hidden px-2 py-2 max-h-40"
        rows={1}
        placeholder="Ask Anything"
      />
      <div className="flex flex-row justify-center items-center gap-2">
        <div className="rounded-full flex justify-items-center hover:bg-gray-200 p-2">
          <Mic className="h-5" />
        </div>
        <div className="rounded-full flex justify-items-center hover:bg-gray-200 p-2">
          {prompt.trim() ? <ArrowUp onClick={handleSubmit} /> : <AudioLines />}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
