import React from "react";
import { Navbar } from "./site-nav";
import { ModeToggle } from "./mode-toggle";
import { Separator } from "./ui/separator";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-3xl">
      <div className="flex items-center justify-between p-4">
        <Navbar />
        <ModeToggle />
      </div>
      <Separator className="w-full"/>
    </header>
  );
};

export default Header;
