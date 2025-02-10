import Image from "next/image";
import { Francois_One } from "next/font/google";

import EmailQrCode from "@/app/assets/qrcode_119811978_4c9191d99842b3c31ce619a8ffed4fb3.svg";

const francoisOne = Francois_One({ subsets: ["latin"], weight: "400" });

const GetNotified = () => {
  return (
    <div className="md:flex md:gap-x-8">
      <div className="hidden md:block w-[275px] flex-none bg-[#242425] p-6 rounded-lg">
        <div>
          <Image src={EmailQrCode} alt="logo" className="rounded-lg" />
        </div>

        <div className="flex items-center mt-8">
          <svg
            width="21"
            height="38"
            viewBox="0 0 21 38"
            fill="none"
            className="flex-shrink-0"
          >
            <rect
              x="1"
              y="1.5"
              width="19"
              height="35"
              rx="2"
              stroke="white"
              stroke-width="2"
            />
          </svg>

          <span className="text-lg font-bold leading-[23.4px] ml-4">
            Scan Qr code to get quicker response.
          </span>
        </div>
      </div>

      <div>
        <h1
          className={`text-2xl md:text-4xl font-extrabold md:w-full w-7/12 mb-6 ${francoisOne.className}`}
        >
          We&apos;re almost ready to launch!
        </h1>

        <p className="md:text-lg">
          We&apos;re preparing to revolutionize the digital world with
          innovative solutions and creative strategies.
        </p>

        <form className="flex flex-col mt-10">
          <input
            type="text"
            placeholder="Email address"
            className="p-4 h-[52px] bg-[#242424] rounded-lg placeholder:font-semibold placeholder:text-[#777272]"
          />

          <button className="h-[52px] bg-[#00AEEF] rounded-lg mt-5 flex items-center justify-between px-5 font-semibold">
            Notify me
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5625 5.75L19.3125 12.5L12.5625 19.25M18.375 12.5H4.6875"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetNotified;
