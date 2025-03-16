import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { EMAIL, SOCIALS, YEARS_EXPERIENCE } from "@/lib/constants";

export default function MainNav() {
  return (
    <Drawer direction="left">
      <header className="fixed inset-x-0 top-0 z-10 px-5">
        <div className="mx-auto mt-5 flex h-16 max-w-6xl items-center rounded-xl bg-muted/10 px-4 ring-1 ring-white/5 backdrop-blur-md sm:px-8">
          <DrawerTrigger asChild>
            <Button size="icon" variant="outline" className="mr-6 sm:hidden">
              <MenuIcon />
            </Button>
          </DrawerTrigger>
          <Link
            href="/"
            className="font-hedvig-serif text-2xl uppercase tracking-[0.4rem]"
          >
            Lucan
          </Link>
          <span className="ml-8 hidden text-sm text-muted-foreground md:inline">
            Front-end developer for {YEARS_EXPERIENCE} years
          </span>
          <div className="ml-auto space-x-2">
            <Button variant="ghost" className="hidden sm:inline-flex" asChild>
              <Link href={`mailto:${EMAIL}`}>Email</Link>
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
              <Link href={SOCIALS.gitHub.href} target="_blank" rel="noreferrer">
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
                href={SOCIALS.linkedIn.href}
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

      {/* MOBILE MENU DRAWER */}
      <DrawerContent
        handle={false}
        className="inset-y-0 left-0 mt-0 w-[85vw] max-w-md rounded-t-none border-y-0 border-r"
      >
        <DrawerHeader className="flex items-center justify-between text-left">
          <DrawerTitle className="font-hedvig-serif text-2xl uppercase tracking-[0.4rem]">
            Lucan
          </DrawerTitle>
          <DrawerClose asChild>
            <Button size="icon" variant="outline">
              <XIcon />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <div className="mb-5 flex h-full flex-col px-4">
          <div className="grid gap-4">
            <Button size="lg" className="w-full" asChild>
              <a href="/Lucan's CV - 2024.pdf" download>
                Download my CV
              </a>
            </Button>
            <Button size="lg" className="w-full" variant="outline" asChild>
              <a href={`mailto:${EMAIL}`}>Send me an email</a>
            </Button>
          </div>
          {/* SOCIALS */}
          <div className="mt-auto grid gap-0.5">
            {Object.entries(SOCIALS).map(([key, { href, handle }]) => {
              const Icon = Icons[key as keyof typeof SOCIALS];

              return (
                <Button
                  key={key}
                  variant="ghost"
                  size="lg"
                  className="w-full justify-start px-4"
                  asChild
                >
                  <a href={href} target="_blank" rel="noreferrer">
                    <Icon className="mr-4 size-6 fill-current" />
                    {handle}
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
        <DrawerFooter className="border-t text-center text-sm">
          &copy; {new Date().getFullYear()} | Made by Lucan Grobler
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
