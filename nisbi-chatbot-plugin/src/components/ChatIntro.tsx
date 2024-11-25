import React, { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import logoNisbi from "../assets/logo-nisbi.svg";
import imgRobot from "../assets/image-robot-upload.svg";

export default function ChatIntro({ onStartChat }: { onStartChat: any }) {
  const [pageState, setPageState] = useState<"intro" | "form">("intro");
  const [errorMessage, setErrorMessage] = useState<{
    fullName?: string;
    phone?: string;
  } | null>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    if (!data?.fullName || !data?.phone) {
      setErrorMessage({
        ...(!data?.fullName && { fullName: "Isi nama lengkap" }),
        ...(!data?.phone && { phone: "Isi nomor telepon yang aktif" }),
      });
      return;
    }

    setErrorMessage(null);
    console.log({ data });
    onStartChat(data);
  };

  return (
    <div id="ChatIntro" className="flex-1 h-full overflow-auto">
      <AnimatePresence>
        {pageState === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="intro flex-1 flex flex-col h-full items-center p-3"
          >
            <img
              src={logoNisbi}
              alt="Nisbi Indonesia"
              width={100}
              height={30}
              className="my-4"
            />
            <p className="text-center max-w-[200px] text-xs">
              Tanyakan apapun terkait Program dan Pelatihan Konsultan kami
              dengan Nisbi Assistant
            </p>
            <img
              src={imgRobot}
              alt=""
              width={400}
              height={400}
              className="my-4"
            />
            <button
              className="w-full bg-blue-600 hover:bg-blue-400 px-5 py-3 rounded-full text-white text-center mt-auto mb-5"
              onClick={() => setPageState("form")}
            >
              Tanyakan pada kami
            </button>
          </motion.div>
        )}

        {pageState === "form" && (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            // exit={{ opacity: 0, y: 100 }}
            className="p-4"
          >
            <button
              className="text-blue-400"
              onClick={() => setPageState("intro")}
            >
              <span className="material-symbols-rounded">arrow_back_ios</span>
            </button>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
              <h2 className="text-xl font-bold text-blue-500 text-center mb-3">
                Nisbi AI Assistant
              </h2>

              <p className="text-xs text-center mb-3">
                Selamat datang di layanan pelatihan kami. Untuk memberikan
                program yang paling sesuai dengan kebutuhan Anda, mohon luangkan
                waktu sebentar untuk mengisi data diri di bawah ini
              </p>

              <div className="flex flex-col gap-y-2">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Nama"
                  className="px-4 py-2 border border-gray-200 rounded-full"
                />
                {errorMessage?.fullName && (
                  <small className="text-red-400">
                    {errorMessage?.fullName}
                  </small>
                )}
              </div>
              <div className="flex flex-col gap-y-2">
                <input
                  type="text"
                  name="phone"
                  placeholder="Nomor Telepon"
                  className="px-4 py-2 border border-gray-200 rounded-full"
                />
                {errorMessage?.phone && (
                  <small className="text-red-400">{errorMessage?.phone}</small>
                )}
              </div>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="px-4 py-2 border border-gray-200 rounded-full"
              />
              <input
                type="text"
                name="expertise"
                placeholder="Bidang Keahlian"
                className="px-4 py-2 border border-gray-200 rounded-full"
              />

              <small className="text-gray-400 text-center mb-3">
                Kami memiliki kebijakan privasi untuk melindungi data pribadi
                Anda
              </small>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-400 px-5 py-3 rounded-full text-white text-center"
              >
                Mulai chat
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
