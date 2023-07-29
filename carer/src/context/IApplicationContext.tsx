import { IApplicationError } from "./ApplicationError/IApplicationError";
import { IAuthenticatedUser } from "./AuthenticatedUser/IAuthenticatedUser";
import { IFamilyData } from "./CompleteFamily/IFamilyData";
import { IConfiguration } from "./Configuration/IConfiguration";
import { IFormatters } from "./Formatters/IFormatters";
import { IView } from "./view/IView";

export interface IApplicationContext {
  Configuration: IConfiguration;
  ViewPage: IView;
  AuthenticatedUser: IAuthenticatedUser;
  FamilyData: IFamilyData;
  ApplicationError: IApplicationError;
  Formatter: IFormatters;
}
