"use client";
import HomeComponent from "@/components/HomeComponent";
import NavbarComponent from "@/components/NavbarComponent";
import { getData, getDisplay, Job } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const [display, setDisplay] = useState<boolean>(getDisplay);
  const [data, setData] = useState<Job>({
    title: "",
    company: "",
    benefits: "",
    requirements: "",
    color: "",
    description: "",
    href: "",
    website: "",
  });

  let colorClass = `text-${data.color}`;
  useEffect(() => {
    colorClass = `text-${data.color}`;
  }, [data]);

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

      {/* <section className="flex justify-end h-[80vh] place-items-center text-right">
        <div className="flex flex-col gap-3 max-w-[50%]">
          <h1 className="text-5xl">My Job Board</h1>
          <h4 className="text-sm">
            Welcome! This page is all about my goals in software development.
            I&#39;m passionate about creating great solutions and building a
            future in tech. Whether it's front-end, back-end, or problem-solving
            with data, I&#39;m excited to grow and make an impact. Explore my
            skills and aspirations as I pursue opportunities to shape the world
            with code.
          </h4>
        </div>
      </section> */}

      <section className="flex justify-end h-[80vh] place-items-center text-right">
        {display ? (
          <div className="flex flex-col justify-end gap-5">
            <h1 className="text-right text-6xl">{data.title}</h1>
            <a href={data.website} className="cursor-pointer">
              <div className="flex gap-2 place-items-center justify-end">
                <h2 className="text-4xl">{data.company}</h2>

                <img
                  src={data.href}
                  alt={`${data.company} logo`}
                  className="w-24 h-24"
                />
              </div>
            </a>
            <div className="flex justify-end">
              <div className="w-[60%] flex flex-col gap-3">
                <div>
                  <h3 className="font-bold">Description</h3>
                  <h3 className="text-sm">{data.description}</h3>
                </div>
                <div>
                  <h3 className="font-bold">Benefits</h3>
                  <h3 className="text-sm">{data.benefits}</h3>
                </div>
                <div>
                  <h3 className="font-bold">Requirements</h3>
                  <h3 className="text-sm">{data.requirements}</h3>
                </div>
                {/* <div>
                  <button className={colorClass}>learn more</button>
                </div> */}
              </div>
            </div>
          </div>
        ) : (
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
        )}
      </section>
    </main>
  );
}
