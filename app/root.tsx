import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { LinksFunction } from "@remix-run/node";

import Navigation from "~/components/Navigation";
import styles from "./styles/tailwind.css";
import MovableFilm from "./components/MovableFilm";

export const links: LinksFunction = () => {
  return[
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#393E46] w-screen h-screen relative overflow-hidden">
        <Navigation />
        <MovableFilm />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
