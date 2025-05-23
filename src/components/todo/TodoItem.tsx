import { Todo } from "@/generated/graphql";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center space-x-3 p-3 rounded-md hover:bg-teal-50/50 transition-colors duration-200 group">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={(checked) => onToggle(todo.id, checked as boolean)}
        className="h-4 w-4 border-teal-300 data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
      />
      <span
        className={`flex-1 text-teal-800 ${
          todo.completed ? "line-through text-teal-400" : ""
        }`}
      >
        {todo.title}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-rose-500 hover:text-rose-600 hover:bg-rose-50"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </li>
  );
}
