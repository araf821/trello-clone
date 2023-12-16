"use client";

import { FormInput } from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";
import { Board } from "@prisma/client";
import { ElementRef, FC, useRef, useState } from "react";

interface BoardTitleFormProps {
  board: Board;
}

const BoardTitleForm: FC<BoardTitleFormProps> = ({ board }) => {
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);
  const [isEditing, setIsEditing] = useState(false);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    }, 50);
  };

  const disabledEditing = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <form ref={formRef} className="flex items-center gap-x-2">
        <FormInput
          id="title"
          ref={inputRef}
          onBlur={() => {}}
          defaultValue={board.title}
          className="text-lg font-bold px-[7px] py-1 h-7 bg-transparent focus-visible:outline-none focus-visible:ring-transparent border-none"
        />
      </form>
    );
  }

  return (
    <Button
      onClick={enableEditing}
      variant={"transparent"}
      className="font-bold text-lg h-auto w-auto py-1 px-2"
    >
      {board.title}
    </Button>
  );
};

export default BoardTitleForm;
