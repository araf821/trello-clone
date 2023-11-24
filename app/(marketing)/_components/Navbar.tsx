import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 flex justify-between items-center md:w-auto md:block w-full">
          <Button size="sm" asChild variant="outline" className="">
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get Taskify for Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
