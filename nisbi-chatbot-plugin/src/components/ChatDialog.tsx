import React from "react";
import ImageRobot from "../assets/avatar-robot.svg";
import ImageUser from "../assets/avatar-user.svg";

export default function ChatDialog({ userData }: { userData: any }) {
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
      </div>

      <div
        id="ChatFeeds"
        className="flex-1 flex flex-col px-3 pb-4 overflow-auto"
      >
        <div className="user flex gap-x-3 mt-5">
          <div className="avatar w-[25px] h-[25px] sticky top-3">
            <img src={ImageRobot} alt="" className="w-full h-full" />
          </div>

          <div className="feeds flex flex-col gap-y-3">
            <div className="feed max-w-[200px] text-sm border border-gray-300 p-3 rounded-lg">
              Hallo 👋 Saya Nisbi Bot, personal assistant dari Nisbi Indonesia
              yang akan membantu Anda!
            </div>
            <div className="feed max-w-[200px] text-sm border border-gray-300 p-3 rounded-lg">
              Apa yang bisa saya bantu? Pilih satu dari beberapa opsi di bawah
              ini atau ketik pesan untuk pertanyaan lainnya.
            </div>
          </div>
        </div>

        <div className="user flex flex-row-reverse gap-x-3 mt-5">
          <div className="avatar w-[25px] h-[25px] sticky top-3">
            <img src={ImageUser} alt="" className="w-full h-full" />
          </div>

          <div className="feeds flex flex-col gap-y-3">
            <div className="feed max-w-[200px] bg-blue-100 text-sm border border-blue-200 p-3 rounded-lg">
              Hallo 👋 Saya Nisbi Bot, personal assistant dari Nisbi Indonesia
              yang akan membantu Anda!
            </div>
            <div className="feed max-w-[200px] bg-blue-100 text-sm border border-blue-200 p-3 rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              tempora numquam minima nulla aut harum provident ducimus
              recusandae nesciunt nihil, odit quos et voluptates, illum quod
              aliquam aperiam facere! Ratione similique corrupti odit nesciunt
              nulla iure maxime quia aspernatur delectus dolor rerum, nam saepe
              aut atque veritatis eos facere ipsam? Delectus dolore doloribus
              velit nam a, facere officia vero illum ipsum sit aperiam quisquam,
              accusamus cumque consequatur iure reiciendis doloremque non
              voluptatibus qui quis ab inventore quas ut! Iusto, repellat
              molestiae. Quasi mollitia commodi, tempora consequuntur itaque a
              non fugit! Repellendus obcaecati quam cupiditate autem incidunt?
              Quia alias iure voluptatem.
            </div>
          </div>
        </div>
      </div>

      <div id="ChatDialogFooter" className="p-3 border-t border-gray-300">
        <form className="flex flex-row gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Ada yang bisa kami bantu?"
              className="pl-10 py-3 pr-3 border border-gray-400 rounded-md"
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
            className="w-full bg-blue-500 active:bg-blue-400 rounded-lg grid place-content-center"
          >
            <span className="material-symbols-rounded text-white">send</span>
          </button>
        </form>
      </div>
    </div>
  );
}
