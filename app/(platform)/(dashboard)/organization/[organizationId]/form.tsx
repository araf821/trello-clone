"use client";

import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import FormInput from "./FormInput";

const Form = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createBoard, initialState);

  return (
    <form action={dispatch}>
      <div className="flex flex-col">
        <FormInput errors={state?.errors} />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
export default Form;
