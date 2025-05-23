"use client";

import React, { useState, ChangeEvent } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { GetTodosDocument } from "@/generated/graphql";
import {
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
} from "@/generated/graphql";
import { TodoList } from "@/components/todo/TodoList";
import { TodoForm } from "@/components/todo/TodoForm";
import { LoadingState } from "@/components/todo/LoadingState";
import { ErrorState } from "@/components/todo/ErrorState";

export default function HomePage() {
  const { data, loading, error } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [newTitle, setNewTitle] = useState("");

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error.message} />;

  const handleAddTodo = async () => {
    if (!newTitle.trim()) return;
    await addTodo({
      variables: { title: newTitle },
      refetchQueries: [{ query: GetTodosDocument }],
    });
    setNewTitle("");
  };

  const handleDeleteTodo = async (id: string) => {
    await deleteTodo({
      variables: { id },
      refetchQueries: [{ query: GetTodosDocument }],
    });
  };

  const handleToggleTodo = async (id: string, completed: boolean) => {
    await updateTodo({
      variables: { id, completed },
      refetchQueries: [{ query: GetTodosDocument }],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-purple-50 to-pink-50">
      <div className="container mx-auto py-12 px-4 max-w-xl">
        <Card className="border border-teal-100 shadow-lg bg-white/90 backdrop-blur-sm">
          <CardHeader className="border-b border-teal-100">
            <CardTitle className="text-2xl font-medium bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              GraphQL App
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <TodoList
                todos={data?.todos || []}
                onToggle={handleToggleTodo}
                onDelete={handleDeleteTodo}
              />
              <TodoForm
                newTitle={newTitle}
                onTitleChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNewTitle(e.target.value)
                }
                onAdd={handleAddTodo}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
