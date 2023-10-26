import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
const navigation = [{ name: "Home", href: "/" }];

export function Navbar() {
  return (
    <nav className="">
      <Link href="/" className="items-center hidden gap-2 md:flex">
        FinFlow
      </Link>
      {/* <ul className="items-center justify-center hidden gap-4 md:flex">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="font-medium duration-500 text-zinc-500 dark:hover:text-zinc-300 hover:text-zinc-900"
          >
            {item.name}
          </Link>
        ))}
      </ul> */}

      <Sheet>
        <SheetTrigger asChild className="block p-3 md:hidden">
          <Button variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Products</SheetTitle>
            <SheetDescription>
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="font-medium">
                  <SheetClose>{item.name}</SheetClose>
                </Link>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
