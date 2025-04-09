"use client";
import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { fetchData, Job } from "@/lib/utils";
import { useRouter } from "next/navigation";

const components: Job[] = [
  {
    title: "Full Stack Software Engineer",
    company: "Starburst",
    href: "/starburst.png",
    description:
      "Starburst is the data platform for analytics, applications, and AI, unifying data across clouds and on-premises to accelerate AI innovation. The key value driver for Starburst is its streamlined, easy-to-use, delightful user interfaces and workflows. As a Full Stack Software Engineer developing solutions in the Starburst Engineering organization, you`ll share ownership of building out the user experience. You`ll work closely with UX, and product management to design and build the back-end and front-end components to implement new features our customers will love.",
    benefits:
      "Our global workforce is supported by a competitive Total Rewards program that reflects our commitment to a rewarding and supportive work environment. This includes a variety of benefits like competitive pay, attractive stock grants, flexible paid time off, and more.",
    requirements:
      "The job requires Typescript and React, both of which I am familiar with. I would have to learn Angular and some Java, as the job description requires some experience in both.",
    color: "purple-400",
    website: "https://www.starburst.io/",
  },
  {
    title: "Frontend Engineer",
    company: "ARI",
    href: "/ari.png",
    description:
      "We built an AI-driven virtual avatar named ARI who shops for fashion items across the internet, personalized to users' style. ARI leverages our proprietary recommendation system that detects nuanced personal style through numerous variables as well as conducting sentiment analysis over chat-bot conversations. ARI returns personalized clothing product recommendations sourced across the entire internet through vector search for users.We are looking for a frontend engineer who can keep up with us, and has the right energy and excitement to build a Unicorn with us. Our product is very design-heavy so if you have a keen eye and infatuation with pixel-perfect, clean UI development, you're in the right place.",
    benefits:
      "We are looking for a contractor to work on a retainer (full time hours for a couple months, as decided through further conversation together), with the potential to extend a full time founding frontend engineer offer by the end.",
    requirements:
      "This position is a temp job that could form into a full-time/partner role. I have an interest in the world of fashion and e-commerce. I believe I currently have the skills to excel in this role and a very small start-up like this would be a perfect role to dip my feet into.",
    color: "red-400",
    website: "https://www.shopari.com/",
  },
  {
    title: "Apple Cloud Storage Engineer",
    company: "Apple",
    href: "/apple.png",
    description:
      "As a Back-End Software Engineer, you'll be responsible for crafting and maintaining the systems that power our core operations. You`ll focus on back-end development with Golang while occasionally contributing to front-end tasks. Working in a Linux environment, you`ll create solutions that manage data, handle backups, and support critical services. Your work will ensure our systems are robust, scalable, and aligned with the company`s goals for privacy and efficiency. Design, develop, and maintain REST APIs and backend services. Write clean, tested, reliable code in Golang, focusing on scalability and performance. Implement solutions in Linux environments, particularly RHEL.",
    benefits:
      "Apple employees also have the opportunity to become an Apple shareholder through participation in Apple`s discretionary employee stock programs. Apple employees are eligible for discretionary restricted stock unit awards, and can purchase Apple stock at a discount if voluntarily participating in Apple`s Employee Stock Purchase Plan. You`ll also receive benefits including: Comprehensive medical and dental coverage, retirement benefits, a range of discounted products and free services, and for formal education related to advancing your career at Apple, reimbursement for certain educational expenses - including tuition. ",
    requirements:
      "I would have to learn Golang, Agile, and more Linux OS to even think about applying here. This would be my dream job out of the five. Although, I have been on Windows machines most of my life, I`ve come to appreciate the simplicity and sleek aethetic that Apple products provide and would be a dream to be a part of creating that experience for people across the world.",
    color: "slate-400",
    website:"https://www.apple.com/"
  },
  {
    title: "Product Designer",
    company: "Certa",
    href: "/certa.png",
    description:
      "We're looking for a product designer to drive our user experience forward as we grow our product offering and tackle new and complex challenges around self service workflow building Studio, Gen AI driven insights and productivity - Certa AI -, and simplifying our app experience.",
    benefits:
      "Best-in-class compensation, Fully-remote work with flexible schedules, Continuous learning, Massive opportunities for growth, Yearly offsite, Quarterly hacker house, PTO, Sick, Holidays, and personal, days off, Comprehensive health coverage (generous employer paid, contribution to healthcare, 401k + company match, mental health resources ,for you and your family)",
    requirements:
      "The job description requires a bachelor's degree, a few years of experience, Figma experience, and a `growth mindset`. This would be a great position for me in a few years time after my earn my degree and am more confident in my skills.",
    color: "blue-500",
    website:"https://www.certa.ai/"
  },
  {
    title: "GPU Performance Architect",
    company: "AMD",
    href: "/amd.png",
    description:
      "We create innovative hardware solutions and deliver world class GPUs. As a GPU performance architect, you will be working on exciting projects with the very best and most passionate GPU team in the world. Work on workload/competitive analysis of contemporary and futuristic game/AI/ML applications, Identify complex technical problems, break them down, summarize multiple possible solutions, and help the team make progress, Work with architects to understand bottlenecks in graphics cores and SoCs",
    benefits:
      "At AMD, your base pay is one part of your total rewards package. Your base pay will depend on where your skills, qualifications, experience, and location fit into the hiring range for the position. You may be eligible for incentives based upon your role such as either an annual bonus or sales incentive. Many AMD employees have the opportunity to own shares of AMD stock, as well as a discount when purchasing AMD stock if voluntarily participating in AMD`s Employee Stock Purchase Plan.",
    requirements:
      "Undergrad degree required. Knowledge of Graphics/Compute APIs (DirectX/OpenGL/Vulkan/OpenCL etc.) & knowledge of GPU architecture. I would love to work with this company, I am learning more about computer hardware and having a career with a fusion of both soft and hardware would be perfect for me.",
    color: "green-400",
    website:"https://www.amd.com/en.html"
  },
];

export function NavbarComponent() {
  const router = useRouter();

  const saveData = (index: number) => {
    const data = components[index];
    // const button:HTMLElement|null = document.getElementById("radix-«R14tl7»-trigger-radix-«R74tl7»")
    // if(button){
    //     button.setAttribute("aria-expanded","false")
    //     button.setAttribute("data-state","closed")
    // }
    fetchData(data);
  };
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Jobs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component, idx) => (
                <li key={component.title}>
                  <div
                    onClick={() => saveData(idx)}
                    className="block p-2 hover:underline cursor-pointer"
                  >
                    <strong>{component.title}</strong>
                    <p className="text-sm">{component.company}</p>
                  </div>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavbarComponent;
