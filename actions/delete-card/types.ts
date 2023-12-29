import { z } from "zod";
import { ActionState } from "@/lib/create-safe-action";
import { Card } from "@prisma/client";
import { DeleteCardValidator } from "./schema";

export type InputType = z.infer<typeof DeleteCardValidator>;
export type ReturnType = ActionState<InputType, Card>;
