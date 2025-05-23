interface ErrorStateProps {
  message: string;
}

export function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-50 via-purple-50 to-pink-50">
      <p className="text-rose-500">Error loading todos: {message}</p>
    </div>
  );
}
