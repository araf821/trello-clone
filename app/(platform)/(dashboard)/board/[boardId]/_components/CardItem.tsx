"use client";

import { Draggable } from "@hello-pangea/dnd";
import { Card } from "@prisma/client";
import { FC } from "react";

interface CardItemProps {
  data: Card;
  index: number;
}

const CardItem: FC<CardItemProps> = ({ data, index }) => {
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          role="button"
          className="truncate mb-2 border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm transition"
        >
          {data.title}
        </div>
      )}
    </Draggable>
  );
};

export default CardItem;
