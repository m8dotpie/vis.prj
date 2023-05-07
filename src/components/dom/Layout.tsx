"use client";

import { useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const Scene = dynamic(() => import("@/components/canvas/Scene"), {
  ssr: false,
});
import { createContext } from "react";

import * as tailwind from "tailwind.config.js";
import SideMenu from "../SideMenu";

export const ThemeContext = createContext(tailwind.theme);

const Layout = ({ children }) => {
  const ref = useRef();

  return (
    <div
      className="min-h-screen flex flex-col"
      ref={ref}
      style={{
        position: "relative",
        width: " 100%",
        height: "100%",
        overflow: "auto",
        touchAction: "auto",
      }}
    >
      <div className="flex flex-col md:flex-row flex-1">
        <SideMenu />
        <main className="flex-1">{children}</main>
        <Scene
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
          }}
          eventSource={ref}
          eventPrefix="client"
        />
      </div>
    </div>
  );
};

export { Layout };
