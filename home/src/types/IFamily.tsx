export interface IFamily {
  familyId: number;
  guid: string;
  lastUpdateDateTime: Date;
  systemOrganisationId: number;
  name: string;
  houseNumber: string;
  addressLine: string;
  postcode: string;
  mobile: string;
  emailAddress: string;
  username: string;
  reference: string;
  approved: boolean;
  ignore: boolean;
}
