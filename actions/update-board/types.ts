import { z } from "zod";
import { UpdateBoardValidator } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { Board } from "@prisma/client";

export type InputType = z.infer<typeof UpdateBoardValidator>;
export type ReturnType = ActionState<InputType, Board>;
