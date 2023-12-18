import { z } from "zod";
import { DeleteBoardValidator } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { Board } from "@prisma/client";

export type InputType = z.infer<typeof DeleteBoardValidator>;
export type ReturnType = ActionState<InputType, Board>;
