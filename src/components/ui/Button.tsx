import Link from "next/link";
import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-[4px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#6FA62C] text-white hover:bg-[#7DB733]",
  secondary:
    "bg-surface-light text-foreground border border-hairline-strong hover:border-brand/40 hover:bg-navy-light",
  outline:
    "bg-transparent text-foreground border border-white/45 hover:border-brand hover:text-brand",
  ghost: "bg-transparent text-foreground hover:text-brand",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-sm",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  withArrow?: boolean;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof CommonProps | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    withArrow = false,
  } = props;

  const classes = clsx(base, variants[variant], sizes[size], className);

  const inner = (
    <>
      {children}
      {withArrow && (
        <FaArrowRight
          className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, variant: _v, size: _s, withArrow: _w, className: _c, children: _ch, ...rest } =
      props;
    return (
      <Link href={href} className={clsx(classes, "group")} {...rest}>
        {inner}
      </Link>
    );
  }

  const { variant: _v, size: _s, withArrow: _w, className: _c, children: _ch, href: _h, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={clsx(classes, "group")} {...rest}>
      {inner}
    </button>
  );
}

export default Button;
