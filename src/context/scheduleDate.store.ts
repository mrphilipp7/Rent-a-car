import { create } from "zustand";

export type ScheduleDateStore = {
  calendarDate: Date | undefined;
  setCalendarDate: (date: Date | undefined) => void;
};

export const useScheduleDateStore = create<ScheduleDateStore>((set) => ({
  calendarDate: new Date(),
  setCalendarDate: (calendarDate) => set(() => ({ calendarDate })),
}));
