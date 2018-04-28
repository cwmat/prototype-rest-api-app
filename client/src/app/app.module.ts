import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SmellprofileListComponent } from './smellprofile-list/smellprofile-list.component';
import { SmellprofileMapComponent } from './smellprofile-map/smellprofile-map.component';

// import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    SmellprofileListComponent,
    SmellprofileMapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
