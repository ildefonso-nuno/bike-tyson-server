import {Bicycle} from "./bicycle.model";

export interface UserReport {
  id: number;
  user_id: number;
  bicycle?: Bicycle;
  start_datetime: Date;
  end_datetime: Date | null;
  lor_code: string;
  gps: string | null;
  description: string | null;
  created_at: Date;
  updated_at: Date;
}
