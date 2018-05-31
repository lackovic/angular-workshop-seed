import { ValidationErrors, AbstractControl } from '@angular/forms';

const validCities = ['Graz', 'Mallorca', 'Hamburg', 'Wien', 'Zürich'];

export function city(control: AbstractControl): null | ValidationErrors {
  if (validCities.indexOf(control.value) === -1) {
    return {
      city: {
        valueEntered: control.value,
        allowedValues: validCities
      }

    };
  }
  return null;
}
