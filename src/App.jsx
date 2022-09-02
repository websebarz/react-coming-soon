import About from "./comps/About";
import Header from "./comps/Header";
import Hero from "./comps/Hero";
import "./index.css";

function App() {
  let width = window.innerWidth;

  return (
    <>
      {width > 1024 ? (
        <div className="h-screen lg:grid grid-rows-1 grid-cols-2 bg-about-pattern bg-contain">
          <div className="lg:flex flex-col p-4 justify-around mr-auto ml-auto">
            <Header />
            <About />
          </div>
          <Hero />
        </div>
      ) : (
        <div className="h-screen">
          <Header />
          <Hero />
          <About />
        </div>
      )}
    </>
  );
}

export default App;
