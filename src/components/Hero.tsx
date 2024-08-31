import Image from "next/image";
import { TypographyH1 } from "./TypographyH1";
import { Heading } from "@/lib/constants";
import { TypographyMuted } from "./TypographyMuted";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Image
        src={"/BackgroundHero2.png"}
        alt="backgroundHero"
        fill
        className="h-full w-full object-cover -z-[999]"
      />

      <section className="px-[170.5px] text-center mt-20 space-y-6">
        <TypographyH1 title={Heading.title} className="text-white" />
        <TypographyMuted
          subTitle={Heading.subTitle}
          className="text-white text-base px-[120px]"
        />
      </section>

      <section className="flex gap-x-4 mt-16">
        <Button className="bg-primary-gradient focus:outline-none px-10 py-5 rounded-lg text-white font-bold text-lg">
          Start Now
        </Button>
        <Button
          className="px-10 py-5 focus:outline-none flex gap-x-2 rounded-lg text-white font-bold text-lg border-2 border-white"
          endContent={
            <ArrowRight
              size={25}
              className="transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          }
        >
          Trial
        </Button>
      </section>

      <section className="flex items-center justify-center mt-16">
        <Card className="relative w-[1016px] h-[400px] shadow-xl rounded-xl overflow-hidden bg-transparent backdrop-blur-lg bg-gradient-to-b from-[#4D5BE2]/10 to-white ">
          <CardHeader>
            <CardTitle>
              <input
                placeholder="asdfd"
                className="w-full h-full text-black placeholder:text-red"
              />
            </CardTitle>
          </CardHeader>
          {/* <div className="absolute top-0 -z-20">
            <Image
              src={"/Bg.png"}
              alt="bg"
              width={1016}
              height={400}
              className="object-cover"
            />
          </div> */}
        </Card>
      </section>
    </section>
  );
}
