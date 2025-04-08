import Image from "next/image";
import React from "react";

const FooterComponent = () => {
  return (
    <section className="absolute bottom-0 w-full flex flex-col bg-gradient-to-b from-transparent to-slate-500 text-white">
      <div className="flex justify-center">
        <Image
          src="/insigoutline.png"
          alt="Logo"
          width={40}
          height={40}
          className="py-4"
        />
      </div>

      <div className="flex justify-between mx-5 mb-2">
        <h5>Codestack S7</h5>
        <h5>created by: Aaron Robinson</h5>
      </div>
    </section>
  );
};

export default FooterComponent;
