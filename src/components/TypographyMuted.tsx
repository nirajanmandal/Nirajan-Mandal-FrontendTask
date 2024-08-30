import { cn } from "@/lib/utils";

type TypographyMutedProps = {
  subTitle: string;
  className?: string;
};
export function TypographyMuted({ subTitle, className }: TypographyMutedProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{subTitle}</p>
  );
}
