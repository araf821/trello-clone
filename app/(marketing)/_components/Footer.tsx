import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 flex justify-between items-center md:w-auto md:block w-full">
          <Button size="sm" className="" variant="ghost">
            Privacy Policy
          </Button>
          <Button variant="ghost" size="sm">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
