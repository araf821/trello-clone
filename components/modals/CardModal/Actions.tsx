"use client";

import { copyCard } from "@/actions/copy-card";
import { deleteCard } from "@/actions/delete-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAction } from "@/hooks/useAction";
import { useCardModal } from "@/hooks/useCardModal";
import { CardWithList } from "@/types";
import { Copy, Delete } from "lucide-react";
import { useParams } from "next/navigation";
import { toast } from "sonner";

interface ActionsProps {
  data: CardWithList;
}

const Actions = ({ data }: ActionsProps) => {
  const cardModal = useCardModal();

  const { execute: executeCopyCard, isLoading: isCopying } = useAction(
    copyCard,
    {
      onSuccess: () => {
        toast.success(`Copied ${data.title}!`);
        cardModal.close();
      },
      onError: (e) => {
        toast.error(e);
      },
    }
  );
  const { execute: executeDeleteCard, isLoading: isDeleting } = useAction(
    deleteCard,
    {
      onSuccess: () => {
        toast.success(`Delete ${data.title}!`);
        cardModal.close();
      },
      onError: (e) => {
        toast.error(e);
      },
    }
  );

  const params = useParams();

  const onCopy = () => {
    const boardId = params.boardId as string;

    executeCopyCard({
      id: data.id,
      boardId,
    });
  };

  const onDelete = () => {
    const boardId = params.boardId as string;

    executeDeleteCard({
      id: data.id,
      boardId,
    });
  };

  return (
    <div className="space-y-2 mt-2">
      <p className="text-xs font-semibold">Actions</p>
      <Button
        onClick={onCopy}
        disabled={isCopying}
        variant="gray"
        className="w-full justify-start"
        size="inline"
      >
        <Copy className="h-4 w-4 mr-2" /> Copy
      </Button>
      <Button
        onClick={onDelete}
        disabled={isDeleting}
        variant="gray"
        className="w-full justify-start"
        size="inline"
      >
        <Delete className="h-4 w-4 mr-2" /> Delete
      </Button>
    </div>
  );
};

export default Actions;

Actions.Skeleton = function ActionSkeleton() {
  return (
    <div className="mt-2 space-y-2">
      <Skeleton className="w-20 h-4 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
    </div>
  );
};
