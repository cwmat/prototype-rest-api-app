import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


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
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
