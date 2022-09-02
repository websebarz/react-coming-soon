export default function Hero() {
  let width = window.innerWidth;
  // console.log(width);
  return (
    <div>
      {width > 1024 ? (
        <img
          className="h-screen w-full"
          src="../imgs/hero-desktop.jpg"
          alt="photo of a female model wearing base apparel summer catalogue"
        ></img>
      ) : (
        <img
          className="w-full bg-cover"
          src="../imgs/hero-mobile.jpg"
          alt="photo of a female model wearing base apparel summer catalogue"
        ></img>
      )}
    </div>
  );
}
