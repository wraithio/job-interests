"use client";
import FooterComponent from "@/components/FooterComponent";
import HomeComponent from "@/components/HomeComponent";
import NavbarComponent from "@/components/NavbarComponent";
import { getData, getDisplay, Job, toggleDisplay } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [display, setDisplay] = useState<boolean>(getDisplay);
  const [data, setData] = useState<Job>({
    title: "",
    href: "",
    description: "",
  });

  const handleClick = () => {
    setDisplay(true);
    setData(getData);
  };
  return (
    <main className="min-h-screen mx-5 bg">
      <section className="flex gap-3">
        <div onClick={() => setDisplay(false)}>
          <HomeComponent />
        </div>

        <div onClick={handleClick}>
          <NavbarComponent />
        </div>
      </section>

      {display ? (
        <div>
          <h1>{data.title}</h1>
          <h1>{data.href}</h1>
          <h1>{data.description}</h1>
        </div>
      ) : (
        <section className="flex justify-end h-[80vh] place-items-center text-right">
          <div className="flex flex-col gap-3 max-w-[50%]">
            <h1 className="text-5xl">My Job Board</h1>
            <h4 className="text-sm">
              Welcome! This page is all about my goals in software development.
              I&#39;m passionate about creating great solutions and building a
              future in tech. Whether it's front-end, back-end, or
              problem-solving with data, I&#39;m excited to grow and make an
              impact. Explore my skills and aspirations as I pursue
              opportunities to shape the world with code.
            </h4>
          </div>
        </section>
      )}
    </main>
  );
}
