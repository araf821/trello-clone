"use client";

import { FC } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { useCardModal } from "@/hooks/useCardModal";

interface CardModalProps {}

const CardModal: FC<CardModalProps> = ({}) => {
  const id = useCardModal((state) => state.id);
  const isOpen = useCardModal((state) => state.isOpen);
  const close = useCardModal((state) => state.close);

  return (
    <Dialog onOpenChange={close} open={isOpen}>
      <DialogContent>Hello</DialogContent>
    </Dialog>
  );
};

export default CardModal;
