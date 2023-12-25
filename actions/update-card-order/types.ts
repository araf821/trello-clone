import { z } from "zod";
import { ActionState } from "@/lib/create-safe-action";
import { Card } from "@prisma/client";
import { UpdateCardOrderValidator } from "./schema";

export type InputType = z.infer<typeof UpdateCardOrderValidator>;
export type ReturnType = ActionState<InputType, Card[]>;
