import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const moduleGuard: CanMatchFn = (route, segments) => {
   const userRole: string = "user"; 
  const router = inject(Router); 

  if(userRole !== 'admin'){
    router.navigate(['access-denied']);
    return false;
  }

  return true;
};
