"use client";
import { Mail, MessageSquareText } from "lucide-react";
import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { email, message });
    setEmail("");
    setMessage("");
  };

  return (
    <div className="w-full h-full  rounded-lg xl:mt-24  shadow-lg max-w-xl  mx-auto p-12">
      <div className="">
        <h2 className="text-2xl text-black font-bold mb-6 text-center">
          Write Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4   ">
          <div>
            <div className="flex items-center relative  ">
              <Mail className="text-gray-400  absolute top-[14px] left-[14px] " />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="moorad.bill@gmail.com"
                className="w-full mb-4  text-black pl-11 py-3 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="relative">
              <MessageSquareText className="text-gray-400  absolute top-[14px] left-[14px]" />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                className="w-full pl-11 py-3  rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[120px]"
                required
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-3/4 bg-purple-500 font-semibold hover:bg-purple-600 text-white py-3 px-4 rounded-full transition duration-200"
            >
              SEND YOUR MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
