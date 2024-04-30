import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { useScheduleDateStore } from "@/context/scheduleDate.store";
import { extractBranchID } from "@/lib/utils";

const CalendarSchedule = () => {
  const { id } = useParams<{ id?: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const scheduleData = useScheduleDateStore();

  const getDateFromId = (id: string | undefined): Date => {
    if (!id) return new Date(); // Default to current date
    return parseISO(id); // Parse ISO date string from URL
  };

  const parsedDate = getDateFromId(id);
  const [date, setDate] = React.useState<Date>(parsedDate);

  // Update URL when the date changes
  React.useEffect(() => {
    const branchID = extractBranchID(location.pathname);
    const dateString = format(date, "yyyy-MM-dd"); // Format date for the URL
    const newPath = `/app/branch/${branchID}/schedule/${dateString}`;
    navigate(newPath, { replace: true });
  }, [date, id, navigate]);

  const handleDateChange = (newValue: Date | undefined) => {
    if (newValue) {
      setDate(newValue);
      scheduleData.setCalendarDate(newValue);
    } else {
      console.log("An UNDEFINED date was chosen");
    }
  };

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={handleDateChange}
      className="rounded-md border"
    />
  );
};

export default CalendarSchedule;
