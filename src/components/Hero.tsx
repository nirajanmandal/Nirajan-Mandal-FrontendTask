import Image from "next/image";
import { TypographyH1 } from "./TypographyH1";
import { Heading } from "@/lib/constants";
import { TypographyMuted } from "./TypographyMuted";
import { Button } from "@nextui-org/react";
import { ArrowRight, ChartNoAxesColumn, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import GraphSVG from "./icons/GraphSVG";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Image
        src={"/BackgroundHero2.png"}
        alt="backgroundHero"
        fill
        className="h-full w-full object-cover -z-[999]"
      />

      <section className="w-full max-w-[700px] text-center mt-20 space-y-6">
        <TypographyH1 title={Heading.title} className="text-white" />
        <TypographyMuted
          subTitle={Heading.subTitle}
          className="text-white text-base px-[120px]"
        />
      </section>

      <section className="flex gap-x-4 mt-16">
        <Button className="flex items-center justify-center bg-primary-gradient focus:outline-none px-10 py-8 rounded-lg text-white font-bold text-lg">
          Start Now
        </Button>
        <Button
          className="justify-items-center px-10 py-[31px] focus:outline-none flex gap-x-2 rounded-lg text-white font-bold text-lg border-2 border-white"
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

      <section className="flex items-center justify-center mt-16 w-full">
        <Card className="relative w-full h-[400px] shadow-xl rounded-xl overflow-hidden bg-transparent backdrop-blur-lg bg-gradient-to-b from-[#4D5BE2]/10 to-white ">
          <CardHeader>
            <CardTitle className="flex items-center gap-x-[25px]">
              <div className="flex items-center gap-x-2">
                <div className="w-[14px] h-[14px] rounded-full bg-white"></div>
                <div className="w-[14px] h-[14px] rounded-full bg-white"></div>
                <div className="w-[14px] h-[14px] rounded-full bg-white"></div>
              </div>
              <Input
                placeholder="www.saas.com/users"
                className="text-black placeholder:text-red"
              />
            </CardTitle>
          </CardHeader>
          <Card className="bg-white h-full mx-6 border-none">
            <div className="p-8 max-w-6xl mx-auto space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                  icon={<TrendingUp color="#0097FE" size={40} />}
                  title="All Traffic"
                  value="574.34k"
                />
                <StatCard
                  icon={<GraphSVG width="40" height="40" />}
                  title="Spent this month"
                  value="$682.5"
                />
                <StatCard
                  icon={<ChartNoAxesColumn color="#0097FE" size={40} />}
                  title="Earnings"
                  value="$350.40"
                />
              </div>
            </div>
          </Card>
          <div className="absolute top-0 -z-20">
            <Image
              src={"/Bg.png"}
              alt="bg"
              width={1016}
              height={400}
              className="object-cover"
            />
          </div>
        </Card>
      </section>
    </section>
  );
}

type StatCardProps = {
  icon: React.ReactElement;
  title: string;
  value: string;
};
// Stat Card Component
const StatCard = ({ icon, title, value }: StatCardProps) => (
  <Card className="border-muted">
    <CardContent className="p-6 flex items-center space-x-4">
      <span className="bg-[#F6F7FE] p-3 rounded-full">{icon}</span>
      <div>
        <p className="text-base font-semibold text-muted-foreground">{title}</p>
        <h3 className={"text-2xl font-bold text-accent-foreground"}>{value}</h3>
      </div>
    </CardContent>
  </Card>
);
