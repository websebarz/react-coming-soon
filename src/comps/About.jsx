export default function About() {
  return (
    <div className="p-4 mt-16 text-center">
      <h1 className="text-5xl tracking-widest">
        <span className="font-light text-primary">WE'RE</span> COMING SOON
      </h1>
      <p className="mt-6 text-primary">
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
      <form className="mt-8">
        <input
          type="text"
          name="name"
          placeholder="Email Address"
          className="relative w-full h-[55px] py-3 px-6 rounded-full"
        />
        <button
          type="submit"
          className="absolute w-[70px] h-[55px] bottom-12 right-4 bg-secondary rounded-full p-3 flex justify-center items-center shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
            <path
              fill="none"
              stroke="#FFF"
              stroke-width="2"
              d="M1 1l8.836 8.836L1 18.671"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
