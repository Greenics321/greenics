export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-brand/30 border-t-brand" />
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Loading…
        </p>
      </div>
    </div>
  );
}
