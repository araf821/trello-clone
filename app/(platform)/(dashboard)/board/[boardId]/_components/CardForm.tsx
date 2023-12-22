import FormSubmit from "@/components/form/FormSubmit";
import FormTextarea from "@/components/form/FormTextarea";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { FC, forwardRef } from "react";

interface CardFormProps {
  listId: string;
  isEditing: boolean;
  enableEditing: () => void;
  disableEditing: () => void;
}

const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(
  ({ disableEditing, enableEditing, isEditing, listId }, ref) => {
    if (isEditing) {
      return (
        <form className="m-1 py-0.5 px-1 space-y-4" action="">
          <FormTextarea
            id="title"
            onKeyDown={() => {}}
            ref={ref}
            onBlur={() => {}}
            placeholder="Card title..."
          />
          <input hidden id="listId" name="listId" value={listId} type="text" />
          <div className="flex items-center gap-x-1">
            <FormSubmit>Add Card</FormSubmit>
            <Button
              onClick={disableEditing}
              size="sm"
              variant="ghost"
              className=""
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </form>
      );
    }

    return (
      <div className="pt-2 px-2">
        <Button
          onClick={enableEditing}
          className="h-auto w-full px-2 py-1.5 justify-start text-muted-foreground text-sm"
          size="sm"
          variant="ghost"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add a card...
        </Button>
      </div>
    );
  }
);

CardForm.displayName = "CardForm";

export default CardForm;
