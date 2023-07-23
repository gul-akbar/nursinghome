export interface IApplicationError {
  addError: (e: string) => void;
  getErrors(): string[];
}
