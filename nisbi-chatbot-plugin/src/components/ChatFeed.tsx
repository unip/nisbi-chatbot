import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChatType } from "../lib/types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/id";

dayjs.extend(relativeTime);
export default function ChatFeed({
  img,
  chat,
  isHost,
  isTyping,
}: {
  img: string;
  chat?: ChatType;
  isHost: boolean;
  isTyping?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`user flex gap-x-3 mt-5 ${!isHost ? "flex-row-reverse" : ""}`}
    >
      <div className="avatar w-[25px] h-[25px] sticky top-3">
        <img src={img} alt="" className="w-full h-full" />
      </div>

      <div
        className={`feeds flex flex-col gap-y-3 ${
          isHost ? "items-start" : "items-end"
        }`}
      >
        <AnimatePresence>
          {isTyping ? (
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="feed max-w-[200px] text-sm border border-gray-300 p-3 rounded-2xl"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                ...
              </motion.span>
            </motion.div>
          ) : (
            chat?.feeds.map((feed) => (
              <motion.div
                initial={{ x: isHost ? 50 : -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className={`feed w-max max-w-[200px] text-sm borde p-3 rounded-2xl border ${
                  chat.isHost
                    ? "border-gray-300"
                    : "border-blue-300 bg-blue-100"
                }`}
              >
                {feed.text}
                <p className="text-right text-gray-400 text-xs mt-2">
                  {dayjs().locale("id").to(feed.createdAt)}
                </p>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
