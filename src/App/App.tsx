import { memo } from "react";
import GlobalStyles from "./globalStyles";
import "./App.css";
import Body from "../Components/Body/Body";

function App() {
  return (
    <>
      <GlobalStyles />
      <Body />
    </>
  );
}

export default memo(App);
