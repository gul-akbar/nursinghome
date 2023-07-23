import { IRecurrence } from "./IRecurrence";

export interface ISession {
  name: string;
  startDate: Date;
  startTime: Date;
  endTime: Date;
  rate: number;
  notes: string;
  includeRecurrence: boolean;

  recurrence: IRecurrence;
}
