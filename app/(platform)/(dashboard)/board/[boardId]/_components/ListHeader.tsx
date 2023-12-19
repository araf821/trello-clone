"use client";

import { List } from "@prisma/client";
import { FC } from "react";

interface ListHeaderProps {
  data: List;
}

const ListHeader: FC<ListHeaderProps> = ({ data }) => {
  return (
    <div className="pt-2 px-2 text-sm font-semibold flex justify-between gap-x-2 items-start">
      <div className="w-full text-sm px-2.5 py-1 h-7 font-medium border-transparent">
        {data.title}
      </div>
    </div>
  );
};

export default ListHeader;
