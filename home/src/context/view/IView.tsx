import { ViewPage } from "../../types/ViewPage";

export interface IView {
  setView: (viewPage: ViewPage) => void;
  getView(): ViewPage;
}
