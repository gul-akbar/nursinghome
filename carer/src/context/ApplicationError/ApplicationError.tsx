import { IApplicationError } from "./IApplicationError";

let errors: string[];

export class ApplicationError implements IApplicationError {
  public addError(value: string): void {
    errors.push(value);
  }
  public getErrors(): string[] {
    return errors;
  }
}
