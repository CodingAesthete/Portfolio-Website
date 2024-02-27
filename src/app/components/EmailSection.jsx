"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const EmailSection = () => {
  const phone = "+359-878-339-105";
  const email = "harry_olli@abv.bg";

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section
      id="contact"
      className="flex flex-col-reverse md:flex-row-reverse gap-16 my-12 md:my-10 py-10 relative"
    >
      <div className="">
        <h5 className="text-2xl mb-2 font-bold text-white my-0 text-center sm:text-start">
          Connect With Me
        </h5>
        <p className="text-[#ADB7BE] mb-6 max-w-3xl leading-7 text-center sm:text-justify">
          {" "}
          I am currently looking for new opportunities. Whether it is creating
          responsive user interfaces, implementing back-end functionality, or
          troubleshooting issues, I am eager to contribute and learn along the
          way. So do not hesitate to reach out - I am ready to dive in and make
          a positive impact!
        </p>
        <div className="socials flex flex-col sm:flex-row gap-4 sm:gap-2 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Link href="https://github.com/CodingAesthete">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/aleksandar-sultan-662502238/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
            <div onClick={toggleModal}>
              <Image src="/images/call.avif" width={40} height={40} className="bg-white rounded-full" alt="Contact Icon" />
            </div>
          </div>
          {showModal && (
            <div className="modal" onClick={toggleModal}>
              <div
                className="modal-content text-white ml-4"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="mb-2 italic">Phone: {phone}</p>
                <p className="italic">Email: {email}</p>
              </div>
            </div>
          )}
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
