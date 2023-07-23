import React from "react";
import { Configuration } from "./Configuration/Configuration";
import { IApplicationContext } from "./IApplicationContext";
import { View } from "./view/View";
import { AuthenticatedUser } from "./AuthenticatedUser/AuthenticatedUser";
import { FamilyData } from "./CompleteFamily/FamilyData";
import { ApplicationError } from "./ApplicationError/ApplicationError";

export const defaults: IApplicationContext = {
  Configuration: new Configuration(),
  ViewPage: new View(),
  AuthenticatedUser: new AuthenticatedUser(),
  FamilyData: new FamilyData(),
  ApplicationError: new ApplicationError(),
};

export default React.createContext<IApplicationContext>(defaults);
