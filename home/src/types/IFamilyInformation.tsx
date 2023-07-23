import { IFamilyComplete } from "./ICompleteFamily";

export interface IFamilyInformation {
  success: boolean;
  message: string;
  familyComplete: IFamilyComplete;
}
