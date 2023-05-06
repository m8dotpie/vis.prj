"use client";

import { useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const Scene = dynamic(() => import("@/components/canvas/Scene"), {
  ssr: false,
});

const Layout = ({ children }) => {
  const ref = useRef();
  const menuItems = [
    {
      href: "/",
      title: "Homepage",
    },
    {
      href: "/visualizer",
      title: "Visualizer",
    },
    {
      href: "/library",
      title: "Library",
    },
  ];

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
        <aside className="bg-gray-200 w-full md:w-60">
          <nav>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li className="m-2" key={title}>
                  <Link href={href}>
                    <p
                      className={`flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer`}
                    >
                      {title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
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
