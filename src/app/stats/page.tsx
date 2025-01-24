import { DataTable } from "@/src/components/data-table/DataTable";
import { songs } from "@/src/data/data";
import { columns } from "@/src/components/data-table/songColumns";
import { Card } from "../components/ui/card";

export default function SongStatsPage() {
  return (
    <div className="w-full h-full">
      <Card className="bg-white w-11/12 justify-self-center h-auto space-y-2 overflow-scroll p-2">
        <h3 className="mb-1 font-bold">Song Stats</h3>
        <DataTable columns={columns} data={songs} />
      </Card>
    </div>
  );
}
