"use client";

import { FC } from "react";
import { Dialog, DialogContent } from "../../ui/dialog";
import { useCardModal } from "@/hooks/useCardModal";
import { useQuery } from "@tanstack/react-query";
import { CardWithList } from "@/types";
import { fetcher } from "@/lib/fetcher";
import { Header } from "./Header";
import Description from "./Description";
import Actions from "./Actions";

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
      <DialogContent>
        {!cardData ? <Header.Skeleton /> : <Header data={cardData} />}
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
          <div className="col-span-3">
            <div className="w-full space-y-6">
              {!cardData ? (
                <Description.Skeleton />
              ) : (
                <Description data={cardData} />
              )}
            </div>
          </div>
          {!cardData ? <Actions.Skeleton /> : <Actions data={cardData} />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CardModal;
