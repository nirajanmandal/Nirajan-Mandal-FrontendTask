import { cn } from "@/lib/utils";

type TypographyH1Props = {
  title: string;
  className?: string;
};
export function TypographyH1({
  title,
  className,
  ...props
}: TypographyH1Props) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
      {...props}
    >
      {title}
    </h1>
  );
}
