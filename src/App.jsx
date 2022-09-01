import { useState } from "react";
import About from "./comps/About";
import Header from "./comps/Header";
import Hero from "./comps/Hero";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <About />
    </>
  );
}

export default App;
