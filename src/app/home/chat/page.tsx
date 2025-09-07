"use client";
import SearchBar from "@/components/ui/SearchBar";


function page() {
  const messages = [
  { role: "user", text: "Hey, what exactly is machine learning?" },
  {
    role: "ai",
    text:
      "Machine learning is a field of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. " +
      "It uses algorithms and statistical models to identify patterns in data and make predictions or decisions. For example, a spam filter learns what emails are spam by analyzing labeled examples."
  },
  { role: "user", text: "Oh, like how Netflix recommends movies?" },
  {
    role: "ai",
    text:
      "Exactly! Netflix uses recommendation systems powered by machine learning. They analyze your watch history, ratings, and even the behavior of users similar to you. " +
      "This allows Netflix to suggest movies or shows that you’re more likely to enjoy."
  },
  { role: "user", text: "Cool. Can you explain supervised learning in detail?" },
  {
    role: "ai",
    text:
      "Supervised learning is when you train a model on labeled data. This means each training example comes with an input and the correct output. " +
      "For example, if you want to predict house prices, you feed the model historical data with features like size, location, and the actual price. The model learns the relationship between inputs and outputs."
  },
  { role: "user", text: "Got it. What about unsupervised learning then?" },
  {
    role: "ai",
    text:
      "Unsupervised learning deals with unlabeled data. The system tries to identify hidden patterns or structures without knowing the correct output. " +
      "Clustering is a common example — like grouping customers into segments based on buying behavior, even if you don’t know the categories beforehand."
  },
  { role: "user", text: "And reinforcement learning?" },
  {
    role: "ai",
    text:
      "Reinforcement learning is a type of learning where an agent interacts with an environment and learns by receiving rewards or penalties. " +
      "It’s often used in game AI and robotics. For example, an AI playing chess gets rewarded when it wins and penalized when it loses, improving its strategy over time."
  },
  { role: "user", text: "Nice. Can you write a simple Python example of recursion?" },
  {
    role: "ai",
    text: `def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n-1)\n\nprint(factorial(5))  # Output: 120`
  },
  { role: "user", text: "That makes sense. How about Fibonacci with recursion?" },
  {
    role: "ai",
    text: `def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(6))  # Output: 8`
  },
  { role: "user", text: "This looks inefficient though, right?" },
  {
    role: "ai",
    text:
      "You’re correct. Recursive Fibonacci is elegant but inefficient because it recalculates values many times. " +
      "For example, fibonacci(6) calls fibonacci(5) and fibonacci(4), but fibonacci(5) again calls fibonacci(4) and fibonacci(3), repeating work."
  },
  { role: "user", text: "So how do we improve it?" },
  {
    role: "ai",
    text:
      "We can use memoization or dynamic programming. Memoization stores already computed results in a cache, so we don’t compute them again. " +
      "Dynamic programming builds up solutions iteratively. Both approaches reduce time complexity from exponential to linear."
  },
  { role: "user", text: "Can you show me memoized Fibonacci in Python?" },
  {
    role: "ai",
    text: `memo = {}\n\ndef fibonacci(n):\n    if n in memo:\n        return memo[n]\n    if n <= 1:\n        return n\n    memo[n] = fibonacci(n-1) + fibonacci(n-2)\n    return memo[n]\n\nprint(fibonacci(40))  # Much faster!`
  },
  { role: "user", text: "That’s much better. Thanks!" },
  {
    role: "ai",
    text:
      "You’re welcome! Optimizations like this are key in real-world programming. Always consider both readability and performance."
  },
  { role: "user", text: "By the way, how is AI used in healthcare?" },
  {
    role: "ai",
    text:
      "AI in healthcare is used for diagnosis support, patient monitoring, drug discovery, and personalized treatment plans. " +
      "For instance, AI models can analyze X-rays or MRIs to detect diseases, sometimes even earlier than doctors. Chatbots can also help patients manage appointments or medication reminders."
  },
  { role: "user", text: "That’s impressive. What about risks?" },
  {
    role: "ai",
    text:
      "Great question. Risks include biased training data, privacy concerns, and over-reliance on AI systems. " +
      "For example, if training data lacks diversity, AI diagnostic tools might perform poorly on underrepresented groups."
  },
  { role: "user", text: "So regulation is important, right?" },
  {
    role: "ai",
    text:
      "Exactly. Regulations ensure safety, fairness, and accountability. Governments and organizations worldwide are working on ethical AI guidelines for healthcare and beyond."
  },
  { role: "user", text: "Thanks! One last question: difference between AI, ML, and DL?" },
  {
    role: "ai",
    text:
      "- **AI (Artificial Intelligence):** Broad concept of machines performing tasks that require human intelligence.\n" +
      "- **ML (Machine Learning):** Subset of AI, focuses on algorithms that learn from data.\n" +
      "- **DL (Deep Learning):** Subset of ML, uses neural networks with multiple layers to model complex patterns."
  },
  { role: "user", text: "Ah, so deep learning is inside machine learning?" },
  { role: "ai", text: "Yes! Think of it like concentric circles: AI > ML > DL." },
  { role: "user", text: "Crystal clear now. Thanks for the long explanation!" },
  { role: "ai", text: "Anytime! Happy to help 🚀" },
  { role: "user", text: "Cool, now tell me something random to fill the chat log 😅" },
  {
    role: "ai",
    text:
      "Sure! Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are still edible even after thousands of years!"
  },
  { role: "user", text: "Woah, that’s crazy! Give me another fact." },
  {
    role: "ai",
    text:
      `To get the color of a <div> (text color, background color, border color, etc.) using Inspect in your browser (e.g., Chrome, Edge, Firefox), follow these steps:

Open Inspect Tool

Right-click on the <div> you want to check.

Select Inspect (or press Ctrl+Shift+I / Cmd+Opt+I).

Select the Element

In the Elements panel, the <div> will be highlighted in the HTML.

Its applied styles will appear in the Styles panel (on the right).

Find Color Properties
Look for CSS properties such as:

color: → text color

background-color: → background color

border-color: → border color

Example:

color: rgb(255, 255, 255);
background-color: #1a73e8;
border-color: rgba(0, 0, 0, 0.2);


Check Computed Styles (if needed)

Go to the Computed tab to see the final color being applied (after inheritance or overrides).

Search for color or background-color.

Copy the Color

In Chrome/Edge, the color swatch (small colored square) can be clicked.

A color picker opens, showing the value in HEX, RGB, HSL, etc.

You can copy it directly.

👉 Would you like me to show you how to extract it with JavaScript in the Console too (so you can quickly log the color of any <div>)?

You said:
hi`
  },
  { role: "user", text: "Now that’s wild. Keep going with fun facts." },
  {
    role: "ai",
    text:
      "Bananas are berries, but strawberries are not. Botanically speaking, a berry is a fruit produced from the ovary of a single flower."
  },
  { role: "user", text: "😂 Okay, enough facts. Thanks for the fun chat!" },
  {
    role: "ai",
    text:
      "You’re welcome! It was fun chatting with you. Feel free to ask me anything anytime."
  }
];

  return (
    <div >
      <div className="flex flex-col h-screen justify-center items-center ">
        <div className="flex-1 overflow-y-auto p-4 space-y-4 w-[50%] mb-15">
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
        <div className="fixed bottom-5 w-full flex justify-center items-center">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default page;
