"use client";

import { useProModal } from "@/hooks/useProModal";
import { Dialog, DialogContent } from "../ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";

interface ProModalProps {}

const ProModal = ({}: ProModalProps) => {
  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.close}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        <div className="aspect-video relative flex items-center justify-center">
          <Image src={"/hero.svg"} alt="hero" className="object-cover" fill />
        </div>
        <div className="text-neutral-700 mx-auto space-y-6 py-6">
          <h2 className="font-semibold text-xl">
            Upgrade to Taskify Pro today!
          </h2>
          <p className="text-xs font-semibold text-neutral-600">
            Explore The Best Of Taskify
          </p>
          <div className="pl-3">
            <ul className="text-sm list-disc">
              <li>Unlimited Boards</li>
              <li>Advanced Checklists</li>
              <li>Admin and Security Features</li>
              <li>And more!</li>
            </ul>
          </div>
          <Button variant="primary" className="w-full">
            Upgrade
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
