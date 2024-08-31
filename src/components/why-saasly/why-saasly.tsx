import { WhySaaslyHeading } from "@/lib/constants";
import { TypographyH1 } from "../TypographyH1";
import { ChartPie, Layers, TrendingUp } from "lucide-react";
import { TypographyMuted } from "../TypographyMuted";
import { CgMenuGridO } from "react-icons/cg";

export default function WhySaasly() {
  return (
    <section className="py-20 h-full w-full">
      <div className="mb-16 flex items-center justify-center">
        <TypographyH1
          title={WhySaaslyHeading.title}
          className="text-[#14358A] text-center font-medium w-[576px]"
        />
      </div>
      <section className="grid grid-cols-3 gap-x-9 w-full">
        <div className="space-y-16">
          <div className="space-y-4">
            <div className="bg-icon-gradient w-fit rounded-lg p-4">
              <Layers size={32} className="text-white" />
            </div>
            <p className="text-[#006FBA] text-lg font-bold">
              Accurate Data Science
            </p>
            <TypographyMuted
              subTitle="Cum sociis natoque penatibus et magnis dis parturient "
              className="text-black/60 !mt-0"
            />
          </div>

          <div className="space-y-4">
            <div className="bg-icon-gradient w-fit rounded-lg p-4">
              <ChartPie size={32} className="text-white" />
            </div>
            <p className="text-[#006FBA] text-lg font-bold">
              Report Automation
            </p>
            <TypographyMuted
              subTitle="Montes, nascetur ridiculus mus. Donec quam felis,"
              className="text-black/60 !mt-0"
            />
          </div>
        </div>

        <div>mid section</div>

        <div className="space-y-16">
          <div className="space-y-4">
            <div className="bg-icon-gradient w-fit rounded-lg p-4">
              <CgMenuGridO size={32} className="text-white" />
            </div>
            <p className="text-[#006FBA] text-lg font-bold">
              Fully Integrations
            </p>
            <TypographyMuted
              subTitle="Cum sociis natoque penatibus et magnis dis parturient "
              className="text-black/60 !mt-0"
            />
          </div>

          <div className="space-y-4">
            <div className="bg-icon-gradient w-fit rounded-lg p-4">
              <TrendingUp size={32} className="text-white" />
            </div>
            <p className="text-[#006FBA] text-lg font-bold">
              Advanced Analytics
            </p>
            <TypographyMuted
              subTitle="Montes, nascetur ridiculus mus. Donec quam felis,"
              className="text-black/60 !mt-0"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
