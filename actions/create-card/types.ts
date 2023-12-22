import { z } from "zod";
import { ActionState } from "@/lib/create-safe-action";
import { Card } from "@prisma/client";
import { CreateCardValidator } from "./schema";

export type InputType = z.infer<typeof CreateCardValidator>;
export type ReturnType = ActionState<InputType, Card>;
