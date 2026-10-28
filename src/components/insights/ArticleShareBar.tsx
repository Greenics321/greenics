"use client";

import { useState } from "react";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaLink,
  FaCheck,
} from "react-icons/fa6";
import { clsx } from "clsx";

type ArticleShareBarProps = {
  /** Absolute or relative URL of the article (used for share links). */
  url: string;
  /** Article title (used in share text). */
  title: string;
};

/**
 * A vertical sticky share bar for article pages. Renders LinkedIn, X,
 * Facebook share buttons + a "copy link" button with a copied-confirmation
 * state. Hidden on small screens (where the inline share link suffices).
 */
export function ArticleShareBar({ url, title }: ArticleShareBarProps) {
  const [copied, setCopied] = useState(false);

  const absoluteUrl = url.startsWith("http")
    ? url
    : `https://www.greenicsenterprises.com${url}`;
  const encodedUrl = encodeURIComponent(absoluteUrl);
  const encodedTitle = encodeURIComponent(title);

  const shares = [
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      Icon: FaLinkedinIn,
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      Icon: FaXTwitter,
    },
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      Icon: FaFacebookF,
    },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(absoluteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — no-op.
    }
  }

  return (
    <div
      className="sticky top-24 hidden flex-col items-center gap-3 lg:flex"
      aria-label="Article share actions"
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground [writing-mode:vertical-rl] rotate-180">
        Share
      </span>
      <span className="h-8 w-px bg-hairline-strong" aria-hidden="true" />
      {shares.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline-strong text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
        >
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        aria-label={copied ? "Link copied" : "Copy link"}
        className={clsx(
          "flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
          copied
            ? "border-brand bg-brand/15 text-brand"
            : "border-hairline-strong text-muted-foreground hover:border-brand/50 hover:text-brand"
        )}
      >
        {copied ? (
          <FaCheck className="h-3.5 w-3.5" aria-hidden="true" />
        ) : (
          <FaLink className="h-3.5 w-3.5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}

export default ArticleShareBar;
