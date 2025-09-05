import { Plus, Mic, AudioLines } from 'lucide-react';
import React, { useRef } from 'react'

function SearchBar() {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };
  return (
    <div className="shadow-sm border-1  flex flex-row items-end  w-[50%]  rounded-4xl justify-around p-2 relative bg-white">
        <div className="rounded-full flex justify-items-center hover:bg-gray-200 p-2">
          <Plus />
        </div>
        <textarea
          ref={textareaRef}
          onInput={handleInput}
          className="flex-1 outline-none bg-transparent resize-none overflow-hidden px-2 py-2 max-h-40"
          rows={1}
          placeholder="Ask Anything"
        />
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="rounded-full flex justify-items-center hover:bg-gray-200 p-2">
            <Mic className="h-5"/>
          </div>
          <div className="rounded-full flex justify-items-center hover:bg-gray-200 p-2">
          <AudioLines /> 
        </div>
          
        </div>
      </div>
  )
}

export default SearchBar