"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import Sidebar from "./Sidebar";

interface MobileSidebarProps {}

const MobileSidebar: FC<MobileSidebarProps> = ({}) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const open = useMobileSidebar((state) => state.open);
  const close = useMobileSidebar((state) => state.close);
  const isOpen = useMobileSidebar((state) => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button onClick={open} className="md:hidden" variant="ghost" size="sm">
        <Menu className="h-4 w-4 mr-2" />
      </Button>
      <Sheet open={isOpen} onOpenChange={close}>
        <SheetContent side="left" className="p-2 pt-10">
          <Sidebar storageKey="t-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSidebar;
