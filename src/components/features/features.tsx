import { FeaturesHeading } from "@/lib/constants";
import { TypographyH1 } from "../TypographyH1";
import { Ellipsis, LockKeyhole, Monitor, Timer } from "lucide-react";
import { TypographyMuted } from "../TypographyMuted";
import { Button, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import BalanceGraph from "../icons/BalanceGraph";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ChartComponent } from "../Chart";
import Shield from "../icons/Shield";
import { TrafficGrowthChart } from "./pie-chart";
import Fb from "../icons/Fb";
import Twitter from "../icons/Twitter";
import { LineChartTrend } from "./line-chart";
import PieChartTrends from "../icons/PieChartTrends";

export default function Features() {
  return (
    <section className="py-20">
      <div className="mb-16 flex items-center justify-center">
        <TypographyH1
          title={FeaturesHeading.title}
          className="text-[#14358A] text-center font-medium w-[600px]"
        />
      </div>

      <section className="grid grid-cols-2 gap-x-20 w-full justify-center ml-20">
        <div className="space-y-40">
          <div className="space-y-4">
            <div className="bg-icon-gradient w-fit rounded-lg p-4">
              <Timer size={32} className="text-white" />
            </div>
            <p className="text-[#006FBA] text-lg font-bold">
              Real Time Data Analytics
            </p>
            <TypographyMuted
              subTitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"
              className="text-black/60 !mt-0"
            />
            <Button className="flex items-center justify-center bg-primary-gradient focus:outline-none px-10 py-8 rounded-xl text-white font-bold text-lg">
              Learn More
            </Button>
          </div>

          <Card className="border-none shadow-2xl shadow-blue-500/20">
            <CardContent className="p-6 relative">
              <div className="relative flex justify-between items-start rounded-2xl bg-secondary-gradient p-4">
                <div>
                  <p className="text-lg font-semibold text-white opacity-90">
                    Credit Balance
                  </p>
                  <h2 className="text-3xl font-bold text-white">$25,215</h2>
                </div>
                <div className="flex flex-col gap-y-5 items-end">
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

              <div className="mt-3 w-full">
                <ChartComponent />
              </div>

              <div className="bg-white w-[192px] py-6 px-[18px] rounded-xl absolute top-2/3 left-14">
                <hr className="bg-[#0097FE] h-2 rounded-lg" />
              </div>

              <div className="bg-white w-[192px] py-6 px-[18px] rounded-xl absolute top-[80%] left-28">
                <hr className="bg-[#F7EDFE] border-none h-2 rounded-lg" />
              </div>

              <div className="absolute top-[50%] right-5">
                <Shield />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="bg-icon-gradient w-fit rounded-lg p-4">
              <Monitor size={32} className="text-white" />
            </div>
            <p className="text-[#006FBA] text-lg font-bold">
              Multiple Platform
            </p>
            <TypographyMuted
              subTitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"
              className="text-black/60 !mt-0"
            />
            <Button className="flex items-center justify-center bg-primary-gradient focus:outline-none px-10 py-8 rounded-xl text-white font-bold text-lg">
              Learn More
            </Button>
          </div>
        </div>

        <div className="space-y-40">
          <div className="">
            <Card className="relative border-none shadow-2xl shadow-blue-500/20">
              <CardContent className="p-6 relative">
                <div className="flex flex-col rounded-2xl bg-secondary-gradient w-fit px-6 py-5 absolute right-14 top-0 z-10">
                  <p className="text-lg font-semibold text-white">
                    Traffic Growth
                  </p>
                  <h2 className="text-muted-foreground text-sm">
                    Total traffic growth of 45%
                  </h2>
                  <div>
                    <TrafficGrowthChart />
                  </div>
                </div>

                <div className="mt-3 w-full -z-20">
                  <ChartComponent />
                </div>

                <div className="absolute top-0 left-0">
                  <Fb />
                </div>

                <div className="absolute top-[30%] left-[25%]">
                  <Twitter />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <div className="bg-icon-gradient w-fit rounded-lg p-4">
              <LockKeyhole size={32} className="text-white" />
            </div>
            <p className="text-[#006FBA] text-lg font-bold">Safely Security</p>
            <TypographyMuted
              subTitle="Cum sociis natoque penatibus et magnis dis parturient "
              className="text-black/60 !mt-0"
            />
            <Button className="flex items-center justify-center bg-primary-gradient focus:outline-none px-10 py-8 rounded-xl text-white font-bold text-lg">
              Learn More
            </Button>
          </div>

          <div className="space-y-4 relative">
            <Card className="border-none shadow-2xl shadow-blue-500/20">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-x-2">
                    <div className="w-[14px] h-[14px] rounded-full bg-[#C58DF0]"></div>
                    <div className="w-[14px] h-[14px] rounded-full bg-[#FFCC5E]"></div>
                    <div className="w-[14px] h-[14px] rounded-full bg-[#40E986]"></div>
                  </div>
                </CardTitle>
                <CardContent className="bg-[#EBF7FF] bg-opacity-20 p-[25px] flex gap-x-3 w-full">
                  <div className="bg-white rounded-xl px-5 py-3 w-full">
                    <p className="text-xs">Sales trend</p>
                    <p className="text-2xl font-semibold">68%</p>
                    <LineChartTrend />
                    <div className="w-full flex flex-col gap-2">
                      <Skeleton className="h-3 w-3/5 rounded-lg bg-black/10" />
                      <Skeleton className="h-3 w-4/5 rounded-lg bg-black/10" />
                    </div>
                  </div>

                  <div className="bg-white rounded-xl px-5 py-3 w-full flex flex-col items-center justify-start gap-y-8">
                    <PieChartTrends />
                    <section className="divide-x-2 flex items-center justify-center">
                      <div className="text-center mr-3">
                        <p className="text-2xl font-semibold">62%</p>
                        <p className="text-sm font-medium opacity-70">July</p>
                      </div>
                      <div className="text-center pl-3">
                        <p className="text-2xl font-semibold">38%</p>
                        <p className="text-sm font-medium opacity-70">August</p>
                      </div>
                    </section>

                    <div className="w-full flex flex-col gap-2">
                      <Skeleton className="h-3 w-full rounded-lg bg-black/10" />
                      <div className="flex gap-x-2">
                        <Skeleton className="h-3 w-1/3 rounded-lg bg-black/10" />
                        <Skeleton className="h-3 w-4/5 rounded-lg bg-black/10" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
            <div className="flex flex-col rounded-2xl bg-secondary-gradient w-[184px] px-6 py-5 right-[35%] top-0 z-10 absolute">
              <div className="w-full flex flex-col gap-2">
                <Skeleton className="h-2 w-1/3 rounded-lg bg-white mb-2" />
                <Skeleton className="h-2 w-4/5 rounded-lg bg-white" />
                <Skeleton className="h-2 w-4/5 rounded-lg bg-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
