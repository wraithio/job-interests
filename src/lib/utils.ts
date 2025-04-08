import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface Job {
  title: string; href: string; description: string
}

let display = false;
let data:Job = {title:"",description:"",href:""}
export function fetchData(entry:Job) {
  return data = entry;
}

export function getData(){
  console.log(data)
  return data;
}

export function toggleDisplay(bool:boolean){
  display = bool
  console.log(display)
  return display
}

export function getDisplay(){
  console.log(display)
  return display
}