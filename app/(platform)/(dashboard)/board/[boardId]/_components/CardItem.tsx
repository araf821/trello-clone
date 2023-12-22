"use client";

import { Card } from "@prisma/client";
import { FC } from "react";

interface CardItemProps {
  data: Card;
  index: number;
}

const CardItem: FC<CardItemProps> = ({ data, index }) => {
  return (
    <div
      role="button"
      className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm transition"
    >
      {data.title}
    </div>
  );
};

export default CardItem;
