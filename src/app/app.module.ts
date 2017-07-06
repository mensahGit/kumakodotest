import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDIyrzKId0MMeBq2IcRsJ6w3XP5Db4qaFI",
    authDomain: "businesscontacts-f9be7.firebaseapp.com",
    databaseURL: "https://businesscontacts-f9be7.firebaseio.com",
    projectId: "businesscontacts-f9be7",
    storageBucket: "businesscontacts-f9be7.appspot.com",
    messagingSenderId: "453638685094"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
