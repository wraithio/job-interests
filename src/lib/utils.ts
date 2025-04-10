import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Job {
  title: string;
  company: string;
  href: string;
  description: string;
  benefits: string;
  requirements: string;
  color: string;
  website: string;
  bd: string;
  link:string
}

let display = false;
let data: Job = {
  title: "",
  company: "",
  benefits: "",
  requirements: "",
  color: "",
  description: "",
  href: "",
  website: "",
  bd:"",
  link:""
};
export function fetchData(entry: Job) {
  return (data = entry);
}

export function getData() {
  return data;
}

export function toggleDisplay(bool: boolean) {
  display = bool;
  return display;
}

export function getDisplay() {
  return display;
}
