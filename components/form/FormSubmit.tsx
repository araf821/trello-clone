"use client";

import { FC } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface FormSubmitProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "primary";
}

const FormSubmit: FC<FormSubmitProps> = ({
  children,
  className,
  disabled,
  variant = "primary",
}) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending || disabled}
      type="submit"
      variant={variant}
      className={cn(className)}
    >
      {children}
    </Button>
  );
};

export default FormSubmit;
