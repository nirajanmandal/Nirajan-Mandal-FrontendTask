import { Card, CardContent } from "./ui/card";

type StatCardProps = {
  icon: React.ReactElement;
  title: string;
  value: string;
};

export default function StatCard({ icon, title, value }: StatCardProps) {
  return (
    <Card className="border-muted w-full shadow-none">
      <CardContent className="p-2 sm:p-6 flex items-center space-x-4">
        <span className="bg-[#F6F7FE] p-3 rounded-full">{icon}</span>
        <div>
          <p className="text-xs sm:text-sm font-semibold text-muted-foreground">
            {title}
          </p>
          <h3 className={"text-sm sm:text-2xl font-bold text-[#1B2559]"}>
            {value}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
}
