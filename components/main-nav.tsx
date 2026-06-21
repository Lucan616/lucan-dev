import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
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
import { cn } from "@/lib/utils";

export default function MainNav() {
  return (
    <Drawer direction="left">
      <header className="fixed inset-x-0 top-0 z-10 px-5">
        <div className="bg-muted/10 mx-auto mt-5 flex h-16 max-w-6xl items-center rounded-xl px-4 ring-1 ring-white/5 backdrop-blur-md sm:px-8">
          <DrawerTrigger asChild>
            <Button size="icon" variant="outline" className="mr-6 sm:hidden">
              <MenuIcon />
            </Button>
          </DrawerTrigger>
          <Link
            href="/"
            className="font-hedvig-serif text-2xl tracking-[0.4rem] uppercase"
          >
            Lucan
          </Link>
          <span className="text-muted-foreground ml-8 hidden text-sm md:inline">
            Front-end developer for {YEARS_EXPERIENCE} years
          </span>
          <div className="ml-auto space-x-2">
            <Link
              href={`mailto:${EMAIL}`}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "hidden sm:inline-flex",
              )}
            >
              Email
            </Link>
            <Link
              href="/Lucan's CV - 2024.pdf"
              download
              className={buttonVariants({ variant: "outline" })}
            >
              Download CV
            </Link>
          </div>
          <Separator
            orientation="vertical"
            className="mx-5 my-4 hidden sm:block"
          />
          <div className="-mr-2 hidden space-x-1 sm:block">
            <Link
              href={SOCIALS.gitHub.href}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "ghost", size: "icon-lg" })}
            >
              <Icons.gitHub className="size-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={SOCIALS.linkedIn.href}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "ghost", size: "icon-lg" })}
            >
              <Icons.linkedIn className="size-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </header>

      {/* MOBILE MENU DRAWER */}
      <DrawerContent>
        <DrawerHeader className="flex-row justify-between">
          <DrawerTitle className="font-hedvig-serif text-2xl tracking-[0.4rem] uppercase">
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
            <a
              href="/Lucan's CV - 2024.pdf"
              download
              className={cn(buttonVariants({ size: "lg" }), "w-full")}
            >
              Download my CV
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full",
              )}
            >
              Send me an email
            </a>
          </div>
          {/* SOCIALS */}
          <div className="mt-auto grid gap-0.5">
            {Object.entries(SOCIALS).map(([key, { href, handle }]) => {
              const Icon = Icons[key as keyof typeof SOCIALS];

              return (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "w-full justify-start px-4",
                  )}
                >
                  <Icon className="mr-4 size-5 fill-current" />
                  {handle}
                </a>
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
