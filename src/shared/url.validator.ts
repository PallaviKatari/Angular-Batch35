import { AbstractControl } from '@angular/forms';

export function ValidateMail(control: AbstractControl) {
  if (!control.value.endsWith('@cgvakindia.com')) {
    return { invalidMail: true };
  }
  return null;
}