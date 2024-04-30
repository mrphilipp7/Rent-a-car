import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractBranchID(url: string) {
  // Split the URL by '/'
  const parts = url.split("/");
  // Find the index of 'branch' to locate the branch ID
  const branchIndex = parts.indexOf("branch");
  if (branchIndex !== -1 && branchIndex + 1 < parts.length) {
    return parts[branchIndex + 1]; // Return the part right after 'branch'
  }
  return null; // Return null if 'branch' or the ID is not found
}
