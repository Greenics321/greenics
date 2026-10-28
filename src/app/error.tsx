"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
        Something went wrong
      </span>
      <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        An unexpected error occurred
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
        We&apos;ve logged the issue. You can try again, or head back to the
        homepage to continue browsing.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button onClick={() => reset()} size="lg">
          Try Again
        </Button>
        <Button href="/" size="lg" variant="outline">
          Back to Home
        </Button>
      </div>
    </Container>
  );
}
