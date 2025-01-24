import {
  DailyCorrectTracker,
  OverallLeaders,
} from "../components/LeaderboardComponents";
import { Card } from "../components/ui/card";

export default function TestPage() {
  return (
      <Card className="bg-white w-4/5 justify-self-center h-auto space-y-2 overflow-scroll p-4">
        <DailyCorrectTracker />
        <div className="h-2" />
        <OverallLeaders />
      </Card>
  );
}
