import { IConfiguration } from "./IConfiguration";

let menuId: number;

export class Configuration implements IConfiguration {
  public setMenuId(id: number): void {
    menuId = id;
  }
  public getMenuId(): number {
    return menuId;
  }
}
