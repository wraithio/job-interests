"use client";
import HomeComponent from "@/components/HomeComponent";
import NavbarComponent from "@/components/NavbarComponent";
import { getData, getDisplay, Job } from "@/lib/utils";
import Image from "next/image";
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
    bd: "wallpaperwhite.jpg",
    link: "",
  });

  let colorClass = `to-${data.color}`;
  useEffect(() => {
    colorClass = `to-${data.color}`;
  }, [data]);

  const handleClick = () => {
    setDisplay(true);
    setData(getData);
  };

  return (
    <main
      style={{ backgroundImage: `url(${data.bd})` }}
      className={`min-h-screen bg-cover bg-center ${
        data.title !== "" && data.company !== "ARI" ? "text-white" : ""
      }`}
    >
      <div
        className={`${
          data.title !== "" && data.company !== "ARI"
            ? "bg-black/20 backdrop-blur-sm min-h-screen px-5"
            : "bg-white/20 backdrop-blur-sm min-h-screen px-5"
        }`}
      >
        <section className="flex gap-3 py-4">
          <div onClick={() => setDisplay(false)}>
            <HomeComponent />
          </div>

          <div onClick={handleClick}>
            <NavbarComponent />
          </div>
        </section>

        <section
          className={`flex justify-end lg:h-[80vh] place-items-center text-right`}
        >
          {display && data.title !== "" ? (
            <div className="flex flex-col justify-end gap-5">
              <h1 className="text-right text-6xl font-[200]">{data.title}</h1>

              <div className="flex justify-end">
                <a
                  href={data.website}
                  target="_blank"
                  className="cursor-pointer flex place-items-center gap-2"
                >
                  <h2 className="text-2xl font-[200]">{data.company}</h2>

                  <Image
                    width={100}
                    height={100}
                    src={data.href}
                    alt={`${data.company} logo`}
                    className="w-24 h-24"
                  />
                </a>
              </div>
              <div className="flex justify-end">
                <div className="lg:w-[60%] w-full flex flex-col gap-3">
                  <div>
                    <h3 className="font-[200]">Description</h3>
                    <h3 className="font-[500]">{data.description}</h3>
                  </div>
                  <div>
                    <h3 className="font-[200]">Benefits</h3>
                    <h3 className="font-[500]">{data.benefits}</h3>
                  </div>
                  <div>
                    <h3 className="font-[200]">Requirements</h3>
                    <h3 className="font-[500]">{data.requirements}</h3>
                  </div>
                  <div>
                    <a href={data.link} target="_blank">
                      <button
                        style={{background: `linear-gradient(to right, rgba(0, 0, 0, 0),${data.color}`}}
                        className={`p-2 border ${
                          data.title !== "" && data.company !== "ARI"
                            ? "border-white"
                            : "border-black"
                        }hover:font-[400]`}
                      >
                        learn more
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3 max-w-[50%]">
              <h1 className="text-7xl">My Job Board</h1>
              <h4 className="text-xl">
                Welcome! This page is all about my goals in software
                development. I&#39;m passionate about creating great solutions
                and building a future in tech. Whether it&#39;s front-end,
                back-end, or problem-solving with data, I&#39;m excited to grow
                and make an impact. Explore my skills and aspirations as I
                pursue opportunities to shape the world with code.
              </h4>
              <h4>
                Hover over <b>Jobs</b> above to get started!
              </h4>
            </div>
          )}
        </section>
        <div className="h-[104px]"></div>
      </div>
    </main>
  );
}
{
  /* <section className="flex justify-end h-[80vh] place-items-center text-right">
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
        </section> */
}
