import React from "react";

const ContactNow = () => {
  return (
    <div>
      <h1 className="text-2xl font-extrabold w-7/12 mb-6">
        We&apos;re Here to Help
      </h1>

      <p>
        For urgent inquiries or immediate support, click below to get in touch
        with our team. We&apos;re ready to assist you with any digital needs.
      </p>

      <form className="flex flex-col mt-10">
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="First name"
            className="p-3.5 h-[52px] w-full bg-[#242424] rounded-lg placeholder:font-semibold placeholder:text-[#777272]"
          />

          <input
            type="text"
            placeholder="Last name"
            className="p-3.5 h-[52px] w-full bg-[#242424] rounded-lg placeholder:font-semibold placeholder:text-[#777272]"
          />
        </div>

        <input
          type="text"
          placeholder="Email address"
          className="p-3.5 h-[52px] bg-[#242424] rounded-lg placeholder:font-semibold placeholder:text-[#777272] mt-5"
        />

        <input
          type="text"
          placeholder="Select a service"
          className="p-3.5 h-[52px] bg-[#242424] rounded-lg placeholder:font-semibold placeholder:text-[#777272] mt-5"
        />

        <textarea
          placeholder="Type your message"
          className="p-3.5 h-[80px] bg-[#242424] rounded-lg placeholder:font-semibold placeholder:text-[#777272] mt-5"
        />

        <button className="h-[52px] bg-[#00AEEF] rounded-lg mt-5 flex items-center justify-between px-5 font-semibold">
          Contact our team
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
  );
};

export default ContactNow;
