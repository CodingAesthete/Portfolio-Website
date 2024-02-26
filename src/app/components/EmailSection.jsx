import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section id="contact" className="flex flex-col-reverse md:flex-row-reverse gap-16 my-12 md:my-10 py-10 relative">
      <div className="">
        <h5 className="text-xl font-bold text-white my-0">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-6 max-w-3xl leading-7 text-center sm:text-justify">
          {" "}
          I'mm currently looking for new oppurtunities.Whether it's creating responsive user interfaces, implementing back-end functionality, or troubleshooting issues, I'm eager to contribute and learn along the way. So don't hesitate to reach out - I'm ready to dive in and make a positive impact! :)
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/CodingAesthete">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/aleksandar-sultan-662502238/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <Image
          src="/images/message.jpg"
          alt="contact image"
          height={300}
          width={350}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default EmailSection;