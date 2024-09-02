import Image from "next/image";
import { TypographyH1 } from "./TypographyH1";
import { Heading } from "@/lib/constants";
import { TypographyMuted } from "./TypographyMuted";
import { Button, Chip } from "@nextui-org/react";
import {
  ArrowRight,
  ChartNoAxesColumn,
  Ellipsis,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import GraphSVG from "./icons/GraphSVG";
import StatCard from "./StatCard";
import BalanceGraph from "./icons/BalanceGraph";
import TableComponent from "./Table";
import { ChartComponent } from "./Chart";
import { Brands } from "./Brands";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center relative">
      <Image
        src={"/BackgroundHero.svg"}
        alt="backgroundHero"
        fill
        className="h-full w-full object-cover -z-[999]"
      />
      {/* <HeroBackground className="h-full w-full -z-[999]" /> */}

      <section className="w-full max-w-[700px] text-center mt-20 space-y-6">
        <TypographyH1 title={Heading.title} className="text-white" />
        <TypographyMuted
          subTitle={Heading.subTitle}
          className="text-white text-base px-4 md:px-[120px]"
        />
      </section>

      <section className="flex-col sm:flex gap-x-4 mt-16 w-full px-4">
        <Button className="w-full sm:w-fit mb-4 sm:mb-0 flex items-center justify-center bg-primary-gradient focus:outline-none px-10 py-8 rounded-xl text-white font-bold text-lg">
          Start Now
        </Button>
        <Button
          className="w-full sm:w-fit justify-items-center px-10 py-[31px] focus:outline-none flex gap-x-2 rounded-xl text-white font-bold text-lg border-2 border-white"
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
        <Card className="relative mx-4 md:mx-[100px] border-none w-full shadow-2xl shadow-blue-500/20 rounded-xl overflow-hidden bg-transparent md:backdrop-blur-lg bg-gradient-to-b from-[#4D5BE2]/10 to-white">
          <CardHeader className="">
            <CardTitle className="flex items-center gap-x-[25px]">
              <div className="hidden sm:flex items-center gap-x-2">
                <div className="w-[14px] h-[14px] rounded-full bg-white"></div>
                <div className="w-[14px] h-[14px] rounded-full bg-white"></div>
                <div className="w-[14px] h-[14px] rounded-full bg-white"></div>
              </div>
              <Input
                placeholder="www.saas.com/users"
                className="text-black placeholder:text-red w-full"
              />
            </CardTitle>
          </CardHeader>
          <Card className="bg-white h-full mx-6 border-none sm:p-6 p-3">
            <div className="flex gap-x-4 w-full flex-wrap gap-y-3">
              <StatCard
                icon={
                  <TrendingUp
                    color="#0097FE"
                    // size={40}
                    className="h-5 w-5 sm:h-14 sm:w-14"
                  />
                }
                title="All Traffic"
                value="574.34k"
              />
              <StatCard
                icon={
                  <GraphSVG
                    // width="40"
                    // height="40"
                    className="h-5 w-5 sm:h-14 sm:w-14"
                  />
                }
                title="Spent this month"
                value="$682.5"
              />
              <StatCard
                icon={
                  <ChartNoAxesColumn
                    color="#0097FE"
                    // size={40}
                    className="h-5 w-5 sm:h-14 sm:w-14"
                  />
                }
                title="Earnings"
                value="$350.40"
              />
            </div>
            <div className="flex gap-x-4 mt-6 gap-y-3 flex-wrap">
              <Card className="border-muted w-full py-6">
                <CardContent>
                  <div className="relative flex justify-between items-start rounded-2xl bg-secondary-gradient sm:p-4 p-2">
                    <div>
                      <p className="text-base sm:text-lg font-semibold text-white opacity-90">
                        Credit Balance
                      </p>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        $25,215
                      </h2>
                    </div>
                    <div className="flex flex-col gap-y-2 sm:gap-y-5 items-end">
                      <Image
                        src={"/Shadow.png"}
                        alt="shadow"
                        width={200}
                        height={100}
                        className="absolute object-contain right-0 top-0"
                      />
                      <Ellipsis size={25} color="white" />
                      <BalanceGraph width="68" height="22" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-base font-semibold text-muted-foreground">
                      Recent
                    </p>
                    <TableComponent />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-muted w-full py-6">
                <CardContent className="px-0">
                  <div className="relative">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                      <p className="text-sm sm:text-lg font-semibold text-muted-foreground">
                        This months earnings
                      </p>
                      <h2 className="text-xl sm:text-3xl font-bold text-[#1B2559]">
                        $801.5
                      </h2>
                      <p className="text-green-500 mt-3 font-semibold bg-green-500/20 rounded-full w-fit p-1">
                        +2.45%
                      </p>
                    </div>
                    <div className="absolute top-0 right-2 sm:right-4">
                      <ChartNoAxesColumn
                        color="#6572EB"
                        // size={40}
                        className="bg-muted rounded-lg p-1 sm:p-2 h-6 w-6 sm:h-14 sm:w-14"
                      />
                    </div>

                    <div className="mt-3 w-full">
                      <ChartComponent />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Card>
          {/* <div className="absolute top-0 -z-20 w-full">
            <Image
              src={"/Bg.svg"}
              alt="bg"
              fill
              className="object-cover w-full fill"
            />
          </div> */}
        </Card>
      </section>

      {/* <section className="my-20">
        <Brands />
      </section> */}
    </section>
  );
}
function SearchBg({ className }: { className: string }) {
  return <>rear</>;
}
