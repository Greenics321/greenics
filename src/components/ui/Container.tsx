import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Container<T extends ElementType = "div">({
  as,
  children,
  className,
  ...rest
}: ContainerProps<T>) {
  const Component = (as ?? "div") as ElementType;
  return (
    <Component
      className={clsx("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Container;
