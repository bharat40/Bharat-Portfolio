import React, { useState } from "react";
import { IoMail } from "react-icons/io5";
import { IoPhonePortrait } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbz4D2BUhNHfS6NoUZnocLTEdnM7vuwf_xklxnAok2pQRfdjU_2saMQUOFKNLfVOp9BD/exec";
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    fetch(scriptURL, {
      method: "POST",
      body: formData,
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <section className="h-auto w-full py-10 bg-lime-200" id="contact-section">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-bold text-center">Contact Me</h1>
        <div className="flex flex-col gap-9 md:flex-row md:gap-0 justify-evenly px-10">
          <div className="flex flex-col gap-3 items-center">
            <div className="flex items-center gap-2">
              <IoMail className="md:text-3xl" />
              <span className="font-bold text-neutral-800 md:text-2xl ">
                bharatdhiman40@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <IoPhonePortrait className="md:text-2xl" />
              <span className="font-bold text-neutral-800 md:text-2xl ">
                +919817580826
              </span>
            </div>
            <div className="flex gap-4 ">
              <a href="https://github.com/bharat40" target="_blank">
                <FaGithub className="md:text-3xl hover:scale-105 duration-200" />
              </a>
              <a
                href="https://www.linkedin.com/in/bharat-dhiman-b8a51a25a/"
                target="_blank"
              >
                <FaLinkedin className="md:text-3xl hover:scale-105 duration-200 hover:text-indigo-700" />
              </a>
              <a
                href="https://www.instagram.com/bharat.dhiman21/"
                target="_blank"
              >
                <FaInstagramSquare className="md:text-3xl hover:scale-105 duration-200 hover:text-pink-600" />
              </a>
            </div>
            <button className="px-3 py-1 bg-amber-400 rounded-full text-neutral-800 font-semibold">
              <a href="./MyCV.pdf" download>
                Download CV
              </a>
            </button>
          </div>
          <div className="p-4 w-auto md:w-96">
            <form
              onSubmit={handleSubmit}
              name="submit-to-google-sheet"
              className="flex flex-col gap-3"
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={name}
                className="bg-white px-2 border-2 border-b-amber-400 py-1 outline-none focus:border-amber-400"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                className="bg-white px-2 border-2 border-b-amber-400 py-1 outline-none focus:border-amber-400"
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-white px-2 border-2 border-b-amber-400 py-1 outline-none focus:border-amber-400"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-600 text-white px-2 py-1 rounded-full"
              >
                Submit
              </button>
            </form>
            {submitted && (
              <p className="text-green-500 text-center font-semibold">
                Submitted
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
