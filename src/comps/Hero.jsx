export default function Hero() {
  let width = window.innerWidth;
  // console.log(width);
  return (
    <div>
      {width > 1024 ? (
        <img className="h-screen w-full" src="../imgs/hero-desktop.jpg"></img>
      ) : (
        <img className="w-full bg-cover" src="../imgs/hero-mobile.jpg"></img>
      )}
    </div>
  );
}
