import { headingFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link href="/">
      <div className="relative hover:opacity-75 transition items-center gap-x-2 max-md:hidden flex justify-center">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <p
          className={cn("text-lg text-neutral-700 pt-1", headingFont.className)}
        >
          Taskify
        </p>
      </div>
    </Link>
  );
};

export default Logo;
