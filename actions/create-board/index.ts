"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";
import { createAuditLog } from "@/lib/create-audit-log";
import { Action, EntityType } from "@prisma/client";
import { hasAvailableCount, incrementAvailableCount } from "@/lib/org-limit";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const canCreate = await hasAvailableCount();

  if (!canCreate) {
    return {
      error: "You have reached your limit. Please upgrade to PRO.",
    };
  }

  const { title, image } = data;

  const [
    imageId,
    imageThumbnailUrl,
    imageFullUrl,
    imageLinkHtml,
    imageUserName,
  ] = image.split("|");

  console.log({
    imageId,
    imageThumbnailUrl,
    imageFullUrl,
    imageLinkHtml,
    imageUserName,
  });

  if (
    !imageId ||
    !imageThumbnailUrl ||
    !imageFullUrl ||
    !imageLinkHtml ||
    !imageUserName
  ) {
    return {
      error: "Missing fields. Failed to create board.",
    };
  }
  let board;

  try {
    board = await db.board.create({
      data: {
        title,
        orgId,
        imageId,
        imageThumbnailUrl,
        imageFullUrl,
        imageLinkHtml,
        imageUserName,
      },
    });

    await incrementAvailableCount();

    await createAuditLog({
      entityId: board.id,
      entityTitle: board.title,
      entityType: EntityType.BOARD,
      action: Action.CREATE,
    });
  } catch (error) {
    return {
      error: "Failed to create new board.",
    };
  }

  revalidatePath(`/board/${board.id}`);
  return { data: board };
};

export const createBoard = createSafeAction(CreateBoard, handler);
