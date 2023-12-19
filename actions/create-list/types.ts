import { z } from "zod";
import { CreateListValidator } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { List } from "@prisma/client";

export type InputType = z.infer<typeof CreateListValidator>;
export type ReturnType = ActionState<InputType, List>;
