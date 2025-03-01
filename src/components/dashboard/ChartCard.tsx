import Card from "@/components/ui/card";
import { LineChart } from "lucide-react";

export default function ChartCard() {
  return (
    <Card
      title="Dispute Progress"
      icon={<LineChart className="w-5 h-5 text-gray-500" />}
      className="flex-1"
    >
      <p className="text-sm text-gray-500">30 disputes this month</p>
      <div className="mt-4 bg-blue-100 h-24 rounded-md" />
    </Card>
  );
}
