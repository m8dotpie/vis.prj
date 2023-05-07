import Link from "next/link";

import Home from "@/components/svgs/home-icon-silhouette-svgrepo-com.svg";
import Library from "@/components/svgs/library-svgrepo-com.svg";
import Visualizer from "@/components/svgs/eye-svgrepo-com.svg";

export default function SideMenu() {
  const menuItems = [
    {
      href: "/",
      title: "Homepage",
      item: <Home />,
    },
    {
      href: "/visualizer",
      title: "Visualizer",
      item: <Visualizer />,
    },
    {
      href: "/library",
      title: "Library",
      item: <Library />,
    },
  ];
  return (
    <>
      <aside className="bg-primary shadow-md shadow-shadow max-w-5">
        <nav>
          <ul>
            {menuItems.map(({ href, title, item }) => (
              <li className="m-2" key={title}>
                <Link href={href}>
                  <p
                    className={`flex p-2 bg-primary shadow-sm shadow-shadow rounded hover:bg-secondary cursor-pointer`}
                  >
                    {item}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
