export default function Hero() {
  let width = window.innerWidth;
  // console.log(width);
  return (
    <div>
      {width > 1024 ? (
        <img className="w-full " src="../imgs/hero-desktop.jpg"></img>
      ) : (
        <img className="w-full " src="../imgs/hero-mobile.jpg"></img>
      )}
    </div>
  );
}
