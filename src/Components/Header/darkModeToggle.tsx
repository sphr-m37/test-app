import { useEffect } from "react";
import { BiSun } from "react-icons/bi";

function DarkModeToggle(): JSX.Element {
  useEffect(() => {
    localStorage.theme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    if (typeof localStorage.theme === "string")
      document.documentElement.classList.add(localStorage.theme);
  }, []);

  const changeDarkModeHandler = () => {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
      document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };
  return <BiSun onClick={changeDarkModeHandler} />;
}

export default DarkModeToggle;
