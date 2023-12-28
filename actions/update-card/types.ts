import { z } from "zod";
import { ActionState } from "@/lib/create-safe-action";
import { Card } from "@prisma/client";
import { UpdateCardValidator } from "./schema";

export type InputType = z.infer<typeof UpdateCardValidator>;
export type ReturnType = ActionState<InputType, Card>;
