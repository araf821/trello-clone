"use client";

import { ListWithCards } from "@/types";
import { FC } from "react";
import ListForm from "./ListForm";

interface ListContainerProps {
  boardId: string;
  data: ListWithCards[];
}

const ListContainer: FC<ListContainerProps> = ({ boardId, data }) => {
  return (
    <ol className="">
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
};

export default ListContainer;
