import { ISessionData } from "./ISessionData";

export interface IAppointmentSession {
  sessions: ISessionData[];
  success: boolean;
  errorMessage: string;
}
