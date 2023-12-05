"use client";

import { useAction } from "@/hooks/useAction";
import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/form/FormInput";

const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col">
        <FormInput id="title" label={"Board title"} errors={fieldErrors} />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
export default Form;
