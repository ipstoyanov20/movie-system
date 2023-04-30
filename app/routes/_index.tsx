import type { V2_MetaFunction } from "@remix-run/node";
//import { Link } from "react-router-dom";

import { Link } from "@remix-run/react";
export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div className="h-screen grid place-content-center  place-items-center">
      <h1 className=" text-white font-semibold text-4xl text-opacity-50 align-baseline hover:shadow-lg m-5">
        Hi, this is a brief example of Remix and Tailwind CSS
      </h1>
      <img
        src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Art-Best-HD-Nature-Backgrounds-620x349.jpg"
        alt="Bg"
        className="sh-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 m-5"
      />
      <img
        src="/favicon.ico"
        alt="Here"
        className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 m-5"
      />
    </div>
  );
}
