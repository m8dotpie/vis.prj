"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Logo = dynamic(
  () => import("@/components/canvas/Examples").then((mod) => mod.Logo),
  { ssr: false }
);
const Dog = dynamic(
  () => import("@/components/canvas/Examples").then((mod) => mod.Dog),
  { ssr: false }
);
const Duck = dynamic(
  () => import("@/components/canvas/Examples").then((mod) => mod.Duck),
  { ssr: false }
);

export default function Page() {
  return (
    <>
      <p>Home page</p>
    </>
  );
}
