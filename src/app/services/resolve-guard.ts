import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

export const resolveGuard : ResolveFn<string> = (route, state) => {
   const dataService = inject(DataService);
  return true;
};
