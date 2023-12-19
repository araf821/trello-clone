"use client";

import { ListWithCards } from "@/types";
import { FC, useEffect, useState } from "react";
import ListForm from "./ListForm";
import ListItem from "./ListItem";

interface ListContainerProps {
  boardId: string;
  data: ListWithCards[];
}

const ListContainer: FC<ListContainerProps> = ({ boardId, data }) => {
  const [orderedData, setOrderedData] = useState(data);

  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  return (
    <ol className="flex gap-x-3 h-full">
      {orderedData.map((list, index) => {
        return <ListItem key={list.id} index={index} data={list} />;
      })}
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
};

export default ListContainer;
