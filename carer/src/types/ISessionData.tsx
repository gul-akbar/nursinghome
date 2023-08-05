export interface ISessionData {
  appointmentSessionId: number;
  nursingHomeId: number;
  groupIdentifier: string;
  name: string;
  startDateTime: Date;
  endDateTime: Date;
  rate: number;
  notes: string;
  status: number;
  guid: string;
  lastUpdateDateTime: Date;
  createdDateTime: Date;
}
