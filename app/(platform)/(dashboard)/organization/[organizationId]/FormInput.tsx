"use client";

import { Input } from "@/components/ui/input";
import { FC } from "react";
import { useFormStatus } from "react-dom";

interface FormInputProps {
  errors?: {
    title?: string[];
  };
}

const FormInput: FC<FormInputProps> = ({ errors }) => {
  const { pending } = useFormStatus();

  return (
    <div>
      <Input
        id="title"
        required
        name="title"
        placeholder="Enter a board title..."
        // className="border border-zinc-700 p-1"
        type="text"
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className="text-rose-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FormInput;
