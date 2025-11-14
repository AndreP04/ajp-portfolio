"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>C#</li>
        <li>.NET</li>
        <li>Git</li>
        <li>Github</li>
        <li>Docker</li>
        <li>MongoDB</li>
        <li>SQL</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>High School Secunda (NSC)</li>
        <li>Potchefstroom Gimnasium (NSC)</li>
        <li>North West University (BSc in Information Technology)</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner (In progress)</li>
        <li>FreeCodeCamp Backend Development and APIs</li>
      </ul>
    )
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>Golden Key International Honours Society</li>
        <li>Grade 12 Silver Academic Merit</li>
        <li>12 Years of School Attendance Without Absence</li>
      </ul>
    )
  },
  {
    title: "Roadmap",
    id: "roadmap",
    content: (
      <ul className="list-disc pl-2">
        <li>NestJS</li>
        <li>Angular</li>
        <li>GitLab</li>
        <li>GCloud</li>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image className="rounded-3xl" src="/about-image.jpg" alt="About Section Image" width={1000} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate software engineer based in South Africa, driven by a deep desire to learn, and create meaningful software.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("roadmap")} active={tab === "roadmap"}>
              {" "}
              Roadmap{" "}
            </TabButton>
            {/* <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              {" "}
              Education{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("achievements")} active={tab === "achievements"}>
              {" "}
              Achievements{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
