"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-row justify-between sm:justify-start gap-8 md:gap-36 xl:ml-2">
        <ul className="list-disc pl-2 space-y-1">
          <li>Node.js</li>
          <li>Express</li>
          <li>React</li>
          <li>jQuery</li>
          <li>Javascript</li>
          <li>MongoDB</li>
        </ul>
        <ul className="list-disc pl-2 space-y-1">
          <li>HTML & CSS</li>
          <li>MVC</li>
          <li>C# & C++</li>
          <li>Tailwind</li>
          <li>Websockets</li>
          <li>Next.js</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Soft Skills",
    id: "soft-skills",
    content: (
      <div className="flex flex-col sm:flex-row justify-between sm:justify-start gap-1 sm:gap-8 md:gap-24 xl:ml-2">
        <ul className="list-disc pl-2 space-y-1">
          <li>Critical Thinking</li>
          <li>Eager to Learn</li>
          <li>Positive Attitude</li>
          <li>Teamwork</li>
          <li>Adaptability</li>
          <li>Fast Learning</li>
        </ul>
        <ul className="list-disc pl-2 space-y-1">
          <li>Attention to Detail</li>
          <li>Problem-Solving</li>
          <li>Creativity</li>
          <li>Critical Thinking</li>
          <li>Empathy</li>
          <li>Flexibility</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="flex flex-row gap-8 md:gap-40 justify-start xl:ml-2">
        <ul className="list-disc pl-2 space-y-2">
          <li>(SoftUni) C# Development Path</li>
          <li>(YouTube) Full-stack courses, projects & tutrials</li>
          <li>(Freelance) Databases, WebAPI , Web Servers</li>
          <li>(Internship) Multi-layer phone book application(C++)</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="flex flex-row gap-8 md:gap-40 justify-start">
        <ul className="list-disc pl-2 space-y-1">
          <li>(SoftUni) C# Development Path</li>
          <li>Google Professional Cloud Developer</li>
        </ul>
      </div>
    ),
  },
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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-0">
        <Image src="/images/synthpc.jpeg" width={500} height={500} alt='about' />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">About Me</h2>
          <p className="text-base lg:text-lg text-center sm:text-justify">
            In the boundless expanse of the digital age, where innovation dances hand in hand with progress, there exists a fervent seeker. A seeker not of treasure hidden beneath the earth nor of secrets whispered in the wind, but of something far more profound: knowledge, skill, and the unyielding pursuit of mastery.
          </p>
          <div className="flex flex-row mt-10 xl:gap-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("soft-skills")}
              active={tab === "soft-skills"}
            >
              {" "}
              Abilities{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificates{" "}
            </TabButton> */}
          </div>
          <div className="mt-0">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;