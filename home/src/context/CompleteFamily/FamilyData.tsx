import { IFamilyInformation } from "../../types/IFamilyInformation";
import { IFamilyData } from "./IFamilyData";

let family: IFamilyInformation;

export class FamilyData implements IFamilyData {
  public setFamily(cf: IFamilyInformation): void {
    family = cf;
  }
  public getFamily(): IFamilyInformation {
    return family;
  }
}
