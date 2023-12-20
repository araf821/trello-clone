import { z } from "zod";

export const DeleteListValidator = z.object({
  id: z.string(),
  boardId: z.string(),
});
