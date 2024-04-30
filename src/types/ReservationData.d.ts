export type ReservationData = {
  id: string;
  reserveTime: number;
  status: "pending" | "pending" | "success" | "failed";
  email: string;
  car: string;
};
