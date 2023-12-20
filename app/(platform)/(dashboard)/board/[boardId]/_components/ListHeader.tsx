"use client";

import { FormInput } from "@/components/form/FormInput";
import { List } from "@prisma/client";
import { ElementRef, FC, useRef, useState } from "react";
import { useEventListener } from "usehooks-ts";

interface ListHeaderProps {
  data: List;
}

const ListHeader: FC<ListHeaderProps> = ({ data }) => {
  const [title, setTitle] = useState(data.title);
  const [isEditing, setIsEditing] = useState(false);

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.select();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      formRef.current?.requestSubmit();
    }
  };

  useEventListener("keydown", onKeyDown);

  return (
    <div className="pt-2 px-2 text-sm font-semibold flex justify-between gap-x-2 items-start">
      {isEditing ? (
        <form
          action="
        "
          className="flex-1 px-0.5"
        >
          <input type="text" hidden id="id" name="id" value={data.id} />
          <input
            type="text"
            hidden
            id="boardId"
            name="boardId"
            value={data.boardId}
          />
          <FormInput
            id="title"
            placeholder="Enter list title..."
            onBlur={() => {}}
            ref={inputRef}
            defaultValue={title}
            className="text-sm px-[7px] py-1 h-7 font-medium border-transparent focus:border-input hover:border-input transition truncate bg-transparent focus:bg-white duration-200"
          ></FormInput>
        </form>
      ) : (
        <div
          onClick={enableEditing}
          className="w-full text-sm px-2.5 py-1 h-7 font-medium border-transparent"
        >
          {title}
        </div>
      )}
    </div>
  );
};

export default ListHeader;