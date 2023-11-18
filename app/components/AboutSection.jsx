"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import spa from "../languages/es.json";
import en from "../languages/en.json";


const AboutSection = ({ language }) => {
  const TAB_DATA = [
    {
      title: "skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Python</li>
          <li>Node.js</li>
          <li>React.js</li>
          <li>Redux.js</li>
          <li>Javascript</li>
          <li>Express.js</li>
          <li>PostgreSQL</li>
        </ul>
      ),
    },
    {
      title: "education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>SoyHenry - Full Stack Developer Bootcamp.</li>
           {
            language === 'en' ? (

              <li>Facultad de Ciencias Exactas y Naturales, UBA - Diplomma in Computer
              Programming and Data Analysys.</li>
            ) : (
              <li>Facultad de Ciencias Exactas y Naturales, UBA - Diplomatura en Análisis de Datos y Programación.</li>
            )
            }
        </ul>
      ),
    },
    {
      title: "certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>EFSET English Certificate 74/100 (C2 Proficient)</li>
        </ul>
      ),
    },
  ];
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      {language === "en" ? (
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image
            src="/images/about-image1.jpg"
            width={500}
            height={500}
            alt="about"
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base md:text-lg">{en[0].about} </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                Certifications{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      ) : (
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image
            src="/images/about-image1.jpg"
            width={500}
            height={500}
            alt="about"
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">Sobre mí</h2>
            <p className="text-base md:text-lg">{spa[0].about} </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Habilidades{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Educacion{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                Certificados{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
