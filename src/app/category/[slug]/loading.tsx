export default function LoadingCategory() {
  return (
    <main className="container py-8">
      <div className="mb-6 h-7 w-52 animate-pulse rounded bg-zinc-200" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-72 animate-pulse rounded-2xl border bg-zinc-50" />
        ))}
      </div>
    </main>
  );
}
