import { z } from "zod";
import { DeleteListValidator } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { List } from "@prisma/client";

export type InputType = z.infer<typeof DeleteListValidator>;
export type ReturnType = ActionState<InputType, List>;
