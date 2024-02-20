import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ConnectedNode {
  node: {
    uri: string;
  };
}

interface MenuItem {
  id: string;
  databaseId: number;
  url: string;
  cssClasses: string[];
  label: string;
  connectedNode: ConnectedNode;
}

interface HeaderProps {
  menuItems: MenuItem[];
  pageTitle?: string;
}

import logoImage from "@/assets/images/logo.png";

export default function Header({ menuItems, pageTitle }: HeaderProps) {
  let pathname = usePathname();

  if (pathname.length > 1) {
    pathname = pathname.replace(/\//g, "");
  }

  return (
    <header className="bg-gradient-to-br from-zinc-900 to-zinc-500">
      <div className="container mx-auto p-8 flex">
        <div className="relative max-w-[260px] w-full h-[128px] mr-4">
          <Image src={logoImage} alt="seabrook" />
        </div>
        <nav className="ml-auto" role="navigation">
          <ul className="flex whitespace-nowrap">
            {!!menuItems &&
              menuItems.map((item: MenuItem, index: number) => {
                let uri = item.connectedNode.node.uri;
                let activeLink = pathname.length > 1 ? `/${pathname}/` : pathname;

                if (!!uri) {
                  return (
                    <li className="ml-8" key={`mainNav-${index}`}>
                      <Link
                        className={
                          activeLink === uri
                            ? "text-white text-xl underline underline-offset-2 transition-all hover:opacity-50"
                            : "text-white text-xl opacity-70 transition-all hover:opacity-50"
                        }
                        href={uri}
                      > 
                        {item.label}
                      </Link>
                    </li>
                  );
                }
                return;
              })}
          </ul>
        </nav>
      </div>
      {!!pageTitle && (
        <div className="container mx-auto p-8 lg:pr-[380px] flex">
          <h1 className="text-white text-[50px] lg:text-[79px]">{pageTitle}</h1>
        </div>
      )}
    </header>
  );
}
