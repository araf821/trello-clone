import { z } from "zod";

export const DeleteCardValidator = z.object({
  id: z.string(),
  boardId: z.string(),
});
