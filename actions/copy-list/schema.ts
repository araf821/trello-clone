import { z } from "zod";

export const CopyListValidator = z.object({
  id: z.string(),
  boardId: z.string(),
});
