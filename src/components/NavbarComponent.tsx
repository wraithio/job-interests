"use client"
import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { fetchData, getData, getDisplay, toggleDisplay } from "@/lib/utils"


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Job 1",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Job 2",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Job 3",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Job 4",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Job 5",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
]

const saveData = (index:number) => {
    const data = components[index]
    // const button:HTMLElement|null = document.getElementById("radix-«R14tl7»-trigger-radix-«R74tl7»")
    // if(button){
    //     button.setAttribute("aria-expanded","false")
    //     button.setAttribute("data-state","closed")
    // } 
    toggleDisplay(true)
    fetchData(data)
}

export function NavbarComponent() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Jobs</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component,idx) => (
                <li key={component.title}>
                  <div onClick={() => saveData(idx)} className="block p-2 hover:underline cursor-pointer">
                    <strong>{component.title}</strong>
                    <p className="text-sm">{component.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}


export default NavbarComponent;
