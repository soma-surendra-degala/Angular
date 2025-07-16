import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { routes } from './app/app.routes';


// 👇 import this for compat
import { AngularFireModule } from '@angular/fire/compat';
import { importProvidersFrom } from '@angular/core';
import { App } from './app/app';
import { environment } from './environment/environment';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),

    // ✅ Firebase Modular Init
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),

    // ✅ AngularFireModule.compat init
    importProvidersFrom(AngularFireModule.initializeApp(environment.firebase))
  ]
});
