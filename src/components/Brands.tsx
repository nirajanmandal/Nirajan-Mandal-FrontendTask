import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Brand1 from "./icons/Brand1";
import Brand2 from "./icons/Brand2";
import Brand3 from "./icons/Brand3";
import Brand4 from "./icons/Brand4";
import Brand5 from "./icons/Brand5";

const brands = [
  {
    name: "layers",
    img: <Brand1 />,
  },
  {
    name: "quotient",
    img: <Brand2 />,
  },
  {
    name: "circooles",
    img: <Brand3 />,
  },
  {
    name: "hourglass",
    img: <Brand4 />,
  },
  {
    name: "command+R",
    img: <Brand5 />,
  },
];

const firstRow = brands.slice(0, brands.length / 2);

const BrandCard = ({
  img,
  name,
}: {
  img: React.ReactElement;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-44 cursor-pointer rounded-xl p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <span>{img}</span>
        <p className="text-xl font-bold text-muted-foreground capitalize">
          {name}
        </p>
      </div>
    </figure>
  );
};

export function Brands() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <BrandCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
