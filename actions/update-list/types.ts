import { z } from "zod";
import { UpdateListValidator } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { List } from "@prisma/client";

export type InputType = z.infer<typeof UpdateListValidator>;
export type ReturnType = ActionState<InputType, List>;
