import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border border-b-0 border-t-[#33353F] border-l-transparent border-r-transparent text-white mt-6">
      <div className="container p-4 flex justify-between">
        <div className="flex flex-row gap-2">
          <span><Image
            src="/images/logo4.png"
            alt="logo image"
            className=" rounded-full"
            height={50}
            width={50}
          /></span>
          <span className="text-slate-400">© 2024 Alex</span>
        </div>
        <p className="text-slate-500">Rights not reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;