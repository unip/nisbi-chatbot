import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import iconChat from "../assets/logo-chat-ai.svg";
import iconClose from "../assets/icon-close.svg";
import ChatIntro from "./ChatIntro";

export default function Chat() {
  const [showBubble, setShowBubble] = useState(false);
  const [showChatBox, setShowChatBox] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBubble(true);
    }, 1000);

    setTimeout(() => {
      setShowBubble(false);
    }, 5000);
  }, []);

  const handleToggleChatbox = () => {
    setShowChatBox((prev) => !prev);
  };

  return (
    <div className="w-full h-full md:w-[400px] md:h-[700px] relative">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            key="bubble"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="absolute right-[100px] bottom-[35px]"
          >
            <div className="bubble max-w-max bg-blue-300 rounded-full px-5 py-2 relative">
              Chat with our AI
            </div>
          </motion.div>
        )}

        {showChatBox && (
          <motion.div
            initial={{ opacity: 0, width: 0, height: 0 }}
            animate={{
              opacity: 1,
              width: "calc(100% - 40px)",
              height: "calc(100% - 120px)",
            }}
            exit={{ opacity: 0, width: 0, height: 0 }}
            className="chatbox flex bg-white shadow-lg rounded-lg absolute right-5 bottom-[100px] border border-gray-200 overflow-hidden"
          >
            <ChatIntro />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className="w-16 h-16 grid place-content-center rounded-full bg-white shadow-lg absolute right-5 bottom-5"
        onClick={handleToggleChatbox}
      >
        {showChatBox ? (
          <img src={iconClose} alt="Chat AI" width={30} height={30} />
        ) : (
          <img src={iconChat} alt="Chat AI" width={40} height={40} />
        )}
      </button>
    </div>
  );
}
