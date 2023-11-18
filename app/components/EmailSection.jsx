"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = ({ language }) => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData);
    if (response.status === 200) {
      console.log("Message sent successfully");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {
        language === 'en' ? (
          <><div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
          <div >
            <h5 className="text-xl font-bold text-white my-2">Let's connect!</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
              {" "}
              I'm currently looking for new opportunities, my inbox is always open.
            </p>
            <div className="socials flex flex-row gap-2">
              <Link href="https://github.com/aaronstz/">
                <Image src={GithubIcon} alt="github" />
              </Link>
              <Link href="https://www.linkedin.com/in/aarongerez/">
                <Image src={LinkedinIcon} alt="linkedin" />
              </Link>
            </div>
          </div>
          <div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  type="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your E-Mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="jacob@google.com"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Just saying hi"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 resize-none"
                  placeholder="Let's talk about..."
                  
                />
              </div>
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full "
              >
                {" "}
                Send Message
              </button>
              {
                emailSubmitted && (
                    <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
                )
              }
            </form>
          </div></>
        ) : (
          <><div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
          <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">Conectemos!</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
              {" "}
              Actualmente estoy buscando nuevas oportunidades. Mi casilla está siempre abierta.
            </p>
            <div className="socials flex flex-row gap-2">
              <Link href="https://github.com/aaronstz/">
                <Image src={GithubIcon} alt="github" />
              </Link>
              <Link href="https://www.linkedin.com/in/aarongerez/">
                <Image src={LinkedinIcon} alt="linkedin" />
              </Link>
            </div>
          </div>
          <div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  type="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Tu Mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="jacob@google.com"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Solo paso a saludar"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Mensaje
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 resize-none"
                  placeholder="Hablemos sobre..."
                  
                />
              </div>
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full "
              >
                {" "}
                Enviar mensaje
              </button>
              {
                emailSubmitted && (
                    <p className="text-green-500 text-sm mt-2">Mail enviado con éxito.</p>
                )
              }
            </form>
          </div></>
        )}
      
    </section>
  );
};

export default EmailSection;
