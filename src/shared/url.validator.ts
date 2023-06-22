import { AbstractControl } from '@angular/forms';

export function ValidateMail(control: AbstractControl) {
  if (!control.value.startsWith('@cgvakindia.com')) {
    return { invalidMail: true };
  }
  return null;
}