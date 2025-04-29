import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateExperience = (
  startYear: number,
  startMonth: number = 1
) => {
  const startDate = new Date(startYear, startMonth - 1); // Month is 0-based in JS
  const currentDate = new Date();

  const years = currentDate.getFullYear() - startDate.getFullYear();
  const months = currentDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    return `more than ${years - 1} years`;
  } else if (months === 0) {
    return `${years} years`;
  } else {
    return `more than ${years} years`;
  }
};
