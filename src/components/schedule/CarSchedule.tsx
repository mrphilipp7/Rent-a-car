import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CalendarSchedule from "./CalendarSchedule";

import { ScheduleDataTable } from "./SchduleDataTable";

export interface ICardScheduleProps {}

export default function CardSchedule(props: ICardScheduleProps) {
  return (
    <div className="flex">
      <Card>
        <CardHeader>
          <CardTitle>Car Schedule</CardTitle>
          <CardDescription>view reservations</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center flex-col items-start">
          <CalendarSchedule />
          <ScheduleDataTable />
        </CardContent>
      </Card>
    </div>
  );
}
