import { AbstractControl, ValidationErrors } from '@angular/forms';

export function areDifferent(controlNames: string[]) {
  return (control: AbstractControl): null | ValidationErrors => {
    const value1 = control.get(controlNames[0]).value;
    const value2 = control.get(controlNames[1]).value;
    if (value1 === value2) {
      return {
        areDifferent: {
          valuesAreEqual: true
        }
      };
    }
    return null;
  };
}
