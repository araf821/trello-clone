import { z } from "zod";

export const UpdateListValidator = z.object({
  title: z
    .string({
      required_error: "Title is required.",
      invalid_type_error: "Title is required.",
    })
    .min(3, "Title is too short."),
  id: z.string(),
  boardId: z.string(),
});
