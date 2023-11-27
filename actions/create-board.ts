"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const CreateBoardValidator = z.object({
  title: z.string().min(3),
});

export async function createBoard(prevState: State, formData: FormData) {
  const validatedFields = CreateBoardValidator.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields.",
    };
  }

  const { title } = validatedFields.data;

  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      message: "Database Error",
    };
  }

  revalidatePath("/organization/org_2YefeiZTbrEjiKkO7e3YV3lC7VU");
  redirect("/organization/org_2YefeiZTbrEjiKkO7e3YV3lC7VU");
}
