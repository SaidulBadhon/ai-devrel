import ChatFooter from "./_components/ChatFooter";
import ChatHeader from "./_components/ChatHeader";
import Message from "./_components/Message";
import MessageList from "./_components/MessageList";

let messages = [
  {
    _id: "1",
    message: `# other
  ## other 2
  
  - list 1
  - list 2`,
    sender: "me",
  },
  {
    _id: "2",
    message: `# other
  ## other 2
  
  - list 1
  - list 2`,
    sender: "other",
  },
  { _id: "3", message: "How are you?", sender: "me" },
  { _id: "4", message: "I'm fine", sender: "other" },
  { _id: "5", message: "What about you?", sender: "other" },
  { _id: "6", message: "I'm good too", sender: "me" },
  { _id: "7", message: "Hello", sender: "me" },
  { _id: "8", message: "Hi", sender: "other" },
  { _id: "9", message: "How are you?", sender: "me" },
  { _id: "10", message: "I'm fine", sender: "other" },
  { _id: "11", message: "What about you?", sender: "other" },
  { _id: "12", message: "I'm good too", sender: "me" },
  { _id: "13", message: "Hello", sender: "me" },
  { _id: "14", message: "Hi", sender: "other" },
  { _id: "15", message: "How are you?", sender: "me" },
  { _id: "16", message: "I'm fine", sender: "other" },
  { _id: "17", message: "What about you?", sender: "other" },
  { _id: "18", message: "I'm good too", sender: "me" },
  { _id: "19", message: "Hello", sender: "me" },
  { _id: "20", message: "Hi", sender: "other" },
  { _id: "21", message: "How are you?", sender: "me" },
  { _id: "22", message: "I'm fine", sender: "other" },
  { _id: "23", message: "What about you?", sender: "other" },
  { _id: "24", message: "I'm good too", sender: "me" },
  { _id: "25", message: "Hello", sender: "me" },
  { _id: "26", message: "Hi", sender: "other" },
  { _id: "27", message: "How are you?", sender: "me" },
  { _id: "28", message: "I'm fine", sender: "other" },
  { _id: "29", message: "What about you?", sender: "other" },
  { _id: "30", message: "I'm good too", sender: "me" },
  { _id: "31", message: "Hello", sender: "me" },
  { _id: "32", message: "Hi", sender: "other" },
  { _id: "33", message: "How are you?", sender: "me" },
  { _id: "34", message: "I'm fine", sender: "other" },
  { _id: "35", message: "What about you?", sender: "other" },
  { _id: "36", message: "I'm good too", sender: "me" },
];

export default function Page({ params }) {
  const { slug } = params;

  return (
    <div className="container relative mx-auto">
      {/* Chat Container */}
      <div
        // className="flex h-screen flex-col"
        className="flex h-screen flex-col"
        style={{
          height: "max(calc(100vh - 4rem), 800px)",
        }}
      >
        {/* Chat Header */}
        <ChatHeader
          isActive={true}
          title={slug || "Docs Chat"}
          avatar="https://source.boringavatars.com/marble/120/me?colors=%233b82f6"
        />

        {/* Chat Body */}
        <MessageList>
          {messages.map((msg, index) => (
            <Message key={msg._id} {...msg} />
          ))}
        </MessageList>

        {/* Chat Footer */}
        <ChatFooter />
      </div>
    </div>
  );
}
