import { ViewPage } from "../../types/ViewPage";
import { IView } from "./IView";

export class View implements IView {
  public setView(page: ViewPage): void {
    sessionStorage.setItem("pageView", page.toString());
  }
  public getView(): ViewPage {
    return Number(sessionStorage.getItem("pageView"));
  }
}
