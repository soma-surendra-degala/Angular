import { AbstractControl, ValidationErrors } from '@angular/forms';

export function CustomValidator(control: AbstractControl): ValidationErrors | null {
  const badWords = ['Fool', 'bloody', 'damn'];
  const sentence: string = control.value || '';
  const words: string[] = sentence.split(' ');

  const hasBadWord = words.some((word: string) => badWords.includes(word));

  return hasBadWord ? { badWord: true } : null;
}
