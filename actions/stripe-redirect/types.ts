import { z } from "zod";
import { ActionState } from "@/lib/create-safe-action";
import { StripeRedirectValidator } from "./schema";

export type InputType = z.infer<typeof StripeRedirectValidator>;
export type ReturnType = ActionState<InputType, string>;
