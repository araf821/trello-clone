import { z } from "zod";

export const CopyCardValidator = z.object({
  id: z.string(),
  boardId: z.string(),
});
