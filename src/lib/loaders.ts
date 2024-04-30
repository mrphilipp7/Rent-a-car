import { redirect } from "react-router-dom";

export const isLoggedInLoader = () => {
  // replace with a t/f if the user is active
  const AUTH = true;

  if (!AUTH) {
    console.log("Unauthorized");
    return redirect("/");
  }
  return null;
};
