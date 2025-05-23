import { ChangeEvent } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface TodoFormProps {
  newTitle: string;
  onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
}

export function TodoForm({ newTitle, onTitleChange, onAdd }: TodoFormProps) {
  return (
    <div className="flex space-x-2 pt-2">
      <Input
        type="text"
        placeholder="Add a new todo..."
        value={newTitle}
        onChange={onTitleChange}
        className="flex-1 border-teal-200 focus:border-teal-400 focus:ring-teal-400"
      />
      <Button
        onClick={onAdd}
        className="bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white px-4 transition-all duration-200"
      >
        Add
      </Button>
    </div>
  );
}
