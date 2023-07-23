import { IUser } from "../../types/IUser";
import { IAuthenticatedUser } from "./IAuthenticatedUser";

export class AuthenticatedUser implements IAuthenticatedUser {
  public setUser(u: IUser): void {
    sessionStorage.setItem("User", JSON.stringify(u));
  }
  public getUser(): IUser {
    const newUser: IUser = {
      success: false,
      information: "",
      sessionGuid: "",
      awaitingApproval: false,
      familyGuid: "",
    };
    return JSON.parse(
      sessionStorage.getItem("User") || JSON.stringify(newUser)
    );
  }
}
