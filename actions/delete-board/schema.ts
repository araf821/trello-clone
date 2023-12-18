import { z } from "zod";

export const DeleteBoardValidator = z.object({
  id: z.string(),
});
