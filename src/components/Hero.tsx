import Image from "next/image";
import { TypographyH1 } from "./TypographyH1";

export default function Hero() {
  return (
    <section>
      <Image
        src={"/BackgroundHero2.png"}
        alt="backgroundHero"
        fill
        className="h-full w-full object-cover -z-[999]"
      />

      <TypographyH1 title="Advanced analytics to grow your business" />
    </section>
  );
}
