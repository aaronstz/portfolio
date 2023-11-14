"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "skills",
        id:"skills",
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
        )
    },
    {
        title: "education",
        id:"education",
        content: (
            <ul className="list-disc pl-2">
                <li>SoyHenry - Full Stack Developer Bootcamp.</li>
                <li>Facultad de Ciencias Exactas y Naturales, UBA - Diplomma in Computer Programming and Data Analysys.</li>
            </ul>
        )
    },
    {
        title: "certifications",
        id:"certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>EFSET English Certificate 74/100 (C2 Proficient)</li>
            </ul>
        )
    },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    })
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image1.jpg" width={500} height={500} alt="about"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Hello! My name is Aaron, I'm a Full Stack Developer from Buenos
            Aires, Argentina. I love working as a team, learning and helping as
            much as I can. I am always trying my best to learn something new. I
            just finished Henry's bootcamp and I'm continuing my education on
            Data Science in Facultad de Ciencias Exactas y Naturales, UBA.{" "}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                {" "}
                Skills{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                {" "}
                Education{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                {" "}
                Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
