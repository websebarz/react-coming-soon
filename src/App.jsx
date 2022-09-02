import About from "./comps/About";
import Header from "./comps/Header";
import Hero from "./comps/Hero";
import "./index.css";

function App() {
  let width = window.innerWidth;
  return (
    <>
      {width > 1024 ? (
        <div className="lg:h-[100vh] lg:grid grid-rows-1 grid-cols-2">
          <div className="lg:flex flex-col p-4 justify-around mr-auto ml-auto">
            <Header />
            <About />
          </div>
          <Hero />
        </div>
      ) : (
        <div>
          <Header />
          <Hero />
          <About />
        </div>
      )}
    </>
  );
}

export default App;
