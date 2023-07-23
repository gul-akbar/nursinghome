import { IFamilyInformation } from "../../types/IFamilyInformation";

export interface IFamilyData {
  setFamily: (cf: IFamilyInformation) => void;
  getFamily(): IFamilyInformation;
}
