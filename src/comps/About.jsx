import { useState } from "react";

export default function About() {
  const message = "Please provide a valid email";
  const [isInvalid, setIsInvalid] = useState(false);
  const isEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name } = event.target;

    if (name.value.match(isEmail)) {
      event.target.reset();
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }
  };
  return (
    <div className="relative max-w-md p-4 mt-16 text-center mr-auto ml-auto lg:mt-0">
      <h1 className="text-5xl tracking-widest lg:text-left text-6xl">
        <span className="font-light text-primary">WE'RE</span> COMING SOON
      </h1>
      <p className="mt-6 text-primary lg:text-left">
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
      <form onSubmit={handleSubmit} className="mt-8">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Email Address"
            className="w-full p-4 px-6 rounded-full outline-secondary"
            required={true}
          />
          {isInvalid && (
            <img
              className="absolute right-28 bottom-8 lg:absolute right-28 bottom-8"
              src="../imgs/icon-error.svg"
            />
          )}
        </div>
        <button
          type="submit"
          className="absolute w-[80px] h-[3.625em] right-4 bottom-4 bg-secondary rounded-full outline-none
           flex justify-center items-center shadow-lg hover:scale-110 duration-200 hover:bg-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              d="M1 1l8.836 8.836L1 18.671"
            />
          </svg>
        </button>
        {isInvalid && (
          <p className="text-secondary absolute left-8 mt-2 lg:absolute left-8 mt-2">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
