import {
  DailyCorrectTracker,
  OverallLeaders,
  ChartAccuracy,
  DecadeAccuracy,
} from "../components/LeaderboardComponents";
import { Card } from "../components/ui/card";


export default function LeaderboardPage() {
  return (
    <div className="w-full h-fullcontent-center place-content-center justify-center flex items-center">
      <Card className="bg-white w-4/5 justify-self-center space-y-2 p-4 mb-48">
        <div className="h-2" />
        <OverallLeaders />
        <div className="h-2" />
        <div className="columns-2">
          <ChartAccuracy />
          <DecadeAccuracy />
        </div>
        <DailyCorrectTracker />
      </Card>
    </div>
  );
}
