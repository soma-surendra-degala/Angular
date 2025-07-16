import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { App } from './app/app';
import { tokenInterceptor } from './app/token-interceptor';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(
      withInterceptors([tokenInterceptor])
    )
  ]
});
