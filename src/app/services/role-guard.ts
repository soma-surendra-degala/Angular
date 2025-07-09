import { CanActivateChildFn} from '@angular/router';

export const roleGuard: CanActivateChildFn = (childRoute, state) => {
  const userRole:string="user";

  if(userRole != 'admin'){
      alert("You don't have access");
      return false;
  }
  return true;
};
