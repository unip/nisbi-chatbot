import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ImageRobot from "../assets/avatar-robot.svg";
import ImageUser from "../assets/avatar-user.svg";
import { chatSessionDummy } from "../lib/constant/dummy";
import ChatFeed from "./ChatFeed";

export default function ChatDialog({ userData }: { userData: any }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div id="ChatDialog" className="flex-1 flex flex-col h-full">
      <div id="ChatHeader" className="text-white p-3 bg-blue-400 flex gap-x-3">
        <img src={ImageRobot} alt="" width={50} />

        <div className="flex-1 flex flex-col">
          <h3 className="font-bold text-lg">Nisbi Assistant</h3>
          <small className="flex items-center gap-x-2">
            <div className="w-[10px] h-[10px] rounded-full bg-green-300" />
            Online
          </small>
        </div>

        <div id="HeaderMenu" className="grid place-content-center relative">
          <button
            className="w-[30px] active:bg-white/20 rounded-xl py-2"
            onClick={toggleMenu}
          >
            <span className="material-symbols-rounded">more_vert</span>
          </button>

          <AnimatePresence>
            {showMenu && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                id="HeaderMenuBox"
                className="flex flex-col min-w-max text-sm text-gray-800 bg-white py-3 rounded-md shadow-lg absolute right-0 top-[100%] overflow-hidden"
              >
                <li>
                  <button className="w-full flex items-center gap-x-2 hover:bg-gray-100 px-4 py-3">
                    <span className="material-symbols-rounded text-sm">
                      mail
                    </span>{" "}
                    Email percakapan
                  </button>
                </li>
                <li>
                  <button className="w-full flex text-red-400 items-center gap-x-2 hover:bg-gray-100 px-4 py-3">
                    <span className="material-symbols-rounded text-sm">
                      cancel
                    </span>{" "}
                    Akhiri sesi
                  </button>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div
        id="ChatFeeds"
        className="flex-1 flex flex-col px-3 pb-4 overflow-auto"
      >
        {chatSessionDummy.map((chat) => (
          <ChatFeed
            img={chat.isHost ? ImageRobot : ImageUser}
            chat={chat}
            isHost={chat.isHost}
          />
        ))}
        <ChatFeed img={ImageRobot} isHost isTyping />
      </div>

      <div id="ChatDialogFooter" className="p-3 border-t border-gray-300">
        <form className="flex flex-row gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Ada yang bisa kami bantu?"
              className="w-full pl-10 py-3 pr-3 border border-gray-400 rounded-xl"
            />

            <button
              type="button"
              className="absolute left-3 top-3 bottom-3 active:bg-gray-300 rounded"
            >
              <span className="material-symbols-rounded">
                sentiment_satisfied
              </span>
            </button>
          </div>

          <button
            type="submit"
            className="w-full max-w-[50px] bg-blue-500 active:bg-blue-400 rounded-xl grid place-content-center"
            title="Kirim pesan"
          >
            <span className="material-symbols-rounded text-white">send</span>
          </button>
        </form>
      </div>
    </div>
  );
}
