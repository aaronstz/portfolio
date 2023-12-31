"use client";
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import { motion } from "framer-motion";
// import Link from "next/link";
import useDownloader from "react-use-downloader";
import spa from "../../languages/es.json";
import en from "../../languages/en.json";

import { TypeAnimation } from "react-type-animation";

const HeroSections = ({ language }) => {
  const scrollToContact = () => {
    scroll.scrollTo("#contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuad",
    });
  };

  const { download } = useDownloader();
  const fileURLENG = "/Resume-GadielAaronGerez.pdf";
  const filenameENG = "Resume-GadielAaronGerez.pdf";
  const fileURLSPA = "/CV-GadielAaronGerez.pdf";
  const filenameSPA = "CV-GadielAaronGerez.pdf";

  return (
    <section className="lg:py-16">
      {language === "en" ? (
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                {en[0].subtitle}
              </span>

              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello
            </span> */}
              <br></br>

              <TypeAnimation
                sequence={[
                  "Aaron",
                  1000,
                  "Web Developer",
                  1000,
                  "Programmer",
                  1000,
                  "Full Stack",
                  1000,
                  "Aaron",
                  1000,
                  "Desarrollador Web",
                  1000,
                  "Programador",
                  1000,
                  "Full Stack",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
              {en[0].description}
            </p>
            <div>
              <Link 
                to="contact"
                smooth={true}
                duration={800}
                className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white cursor-pointer"
                onClick={scrollToContact}
                >
                  Hire Me
              </Link>
              <button
                onClick={() => download(fileURLENG, filenameENG)}
                className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white  mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative hover:animate-jump animate-duration-[500ms]">
              <Image
                src="/images/hero-image1.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={350}
                height={350}
              />
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                {spa[0].subtitle}
              </span>

              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello
            </span> */}
              <br></br>
              <TypeAnimation
                sequence={[
                  "Aaron",
                  1000,
                  "Web Developer",
                  1000,
                  "Programmer",
                  1000,
                  "Full Stack",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
              {spa[0].description}
            </p>
            <div>
            <Link 
                to="contact"
                smooth={true}
                duration={800}
                className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white cursor-pointer"
                onClick={scrollToContact}
                >
                  Contratame
              </Link>
              <button
                onClick={() => download(fileURLSPA, filenameSPA)}
                className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white  mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Descargar CV
                </span>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src="/images/hero-image1.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={350}
                height={350}
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default HeroSections;
