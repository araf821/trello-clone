"use client";

import { copyList } from "@/actions/copy-list";
import { deleteList } from "@/actions/delete-list";
import FormSubmit from "@/components/form/FormSubmit";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useAction } from "@/hooks/useAction";
import { List } from "@prisma/client";
import { MoreHorizontal, X } from "lucide-react";
import { ElementRef, FC, useRef } from "react";
import { toast } from "sonner";

interface ListOptionsProps {
  onAddCard: () => void;
  data: List;
}

const ListOptions: FC<ListOptionsProps> = ({ data, onAddCard }) => {
  const closeRef = useRef<ElementRef<"button">>(null);

  const { execute: executeDeleteList } = useAction(deleteList, {
    onSuccess: (data) => {
      toast.success(`List "${data.title}" was deleted.`);
      closeRef.current?.click();
    },
    onError: (e) => {
      toast.error(e);
    },
  });

  const { execute: executeCopyList } = useAction(copyList, {
    onSuccess: (data) => {
      toast.success(`List "${data.title}" copied!`);
      closeRef.current?.click();
    },
    onError: (e) => {
      toast.error(e);
    },
  });

  const onCopy = (formData: FormData) => {
    const id = formData.get("id") as string;
    const boardId = formData.get("boardId") as string;

    executeCopyList({
      id,
      boardId,
    });
  };

  const onDelete = (formData: FormData) => {
    const id = formData.get("id") as string;
    const boardId = formData.get("boardId") as string;

    executeDeleteList({
      id,
      boardId,
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-auto w-auto p-2" variant="ghost">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-0 py-3" side="bottom" align="start">
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          List Actions
        </div>
        <PopoverClose ref={closeRef} asChild>
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
            variant="ghost"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
        <Button
          onClick={onAddCard}
          className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
          variant="ghost"
        >
          Add card...
        </Button>
        <form action={onCopy}>
          <input hidden id="id" name="id" value={data.id} />
          <input hidden id="boardId" name="boardId" value={data.boardId} />
          <FormSubmit
            className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
            variant="ghost"
          >
            Copy list
          </FormSubmit>
        </form>
        <Separator />
        <form action={onDelete}>
          <input hidden id="id" name="id" value={data.id} />
          <input hidden id="boardId" name="boardId" value={data.boardId} />
          <FormSubmit
            className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
            variant="ghost"
          >
            Delete list
          </FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default ListOptions;
