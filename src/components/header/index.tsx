import React from "react";
import { Logo } from "@/components/svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sendEmail } from "../../lib/service"

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
  pageTitle?: string
}

export default function  Header({ menuItems, pageTitle }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="bg-gradient-to-br from-zinc-900 to-zinc-500">
      <div className="container mx-auto p-8 flex">
        <Logo />
        <nav className="ml-auto" role="navigation">
          <ul className="flex">
            {menuItems.map((item: MenuItem, index: number) => {
              let uri = item.connectedNode.node.uri;

              return (
                <li className="ml-8" key={`mainNav-${index}`}>
                  <Link
                    className={
                      pathname === uri
                        ? "text-white text-xl underline underline-offset-2"
                        : "text-white text-xl opacity-70"
                    }
                    href={uri}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {!!pageTitle && 
        <div className="container mx-auto p-8 lg:pr-[380px] flex">
          <h1 className="text-white text-[50px] lg:text-[79px]">{pageTitle}</h1>
        </div>
      }
    </header>
  );
}
