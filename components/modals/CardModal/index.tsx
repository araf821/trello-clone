"use client";

import { FC } from "react";
import { Dialog, DialogContent } from "../../ui/dialog";
import { useCardModal } from "@/hooks/useCardModal";
import { useQuery } from "@tanstack/react-query";
import { CardWithList } from "@/types";
import { fetcher } from "@/lib/fetcher";

interface CardModalProps {}

const CardModal: FC<CardModalProps> = ({}) => {
  const id = useCardModal((state) => state.id);
  const isOpen = useCardModal((state) => state.isOpen);
  const close = useCardModal((state) => state.close);

  const { data: cardData } = useQuery<CardWithList>({
    queryKey: ["card", id],
    queryFn: () => fetcher(`/api/cards/${id}`),
  });

  return (
    <Dialog onOpenChange={close} open={isOpen}>
      <DialogContent>{cardData?.title}</DialogContent>
    </Dialog>
  );
};

export default CardModal;
