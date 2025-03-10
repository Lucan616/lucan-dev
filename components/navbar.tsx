import Link from "next/link";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 px-5">
      <div className="mx-auto mt-5 flex h-16 max-w-6xl items-center rounded-xl bg-muted/10 px-4 ring-1 ring-white/5 backdrop-blur-md sm:px-8">
        <Button size="icon" variant="outline" className="mr-6 sm:hidden">
          <MenuIcon />
        </Button>
        <Link
          href="/"
          className="font-hedvig-serif text-2xl uppercase tracking-[0.4rem]"
        >
          Lucan
        </Link>
        <span className="ml-8 hidden text-sm text-muted-foreground md:inline">
          Front-end developer for 5 years
        </span>
        <div className="ml-auto space-x-2">
          <Button variant="ghost" className="hidden sm:inline-flex" asChild>
            <Link href="mailto:lucangrobler6@gmail.com">Email</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/Lucan's CV - 2024.pdf" download>
              Download CV
            </Link>
          </Button>
        </div>
        <Separator
          orientation="vertical"
          className="mx-5 hidden h-8 sm:block"
        />
        <div className="-mr-2 hidden space-x-1 sm:block">
          <Button
            size="icon"
            variant="ghost"
            className="[&_svg]:size-5"
            asChild
          >
            <Link
              href="https://github.com/Lucan616"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.gitHub />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="[&_svg]:size-5"
            asChild
          >
            <Link
              href="http://linkedin.com/in/lucan-grobler"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.linkedIn />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
