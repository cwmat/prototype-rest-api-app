import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SmellprofileListComponent } from './smellprofile-list/smellprofile-list.component';
import { SmellprofileMapComponent } from './smellprofile-map/smellprofile-map.component';
import { SmellprofileDetailsComponent } from './smellprofile-details/smellprofile-details.component';
import { SmellprofileGalleryComponent } from './smellprofile-gallery/smellprofile-gallery.component';
import { SmellprofileNewComponent } from './smellprofile-new/smellprofile-new.component';
import { SmellprofileUpdateComponent } from './smellprofile-update/smellprofile-update.component';

// import { AgmCoreModule } from '@agm/core';

const routes:Routes = [
  { path: '', redirectTo: '/gallery', pathMatch: 'full'},
  { path: 'gallery', component: SmellprofileGalleryComponent },
  { path: 'smell/:id', component: SmellprofileDetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SmellprofileListComponent,
    SmellprofileMapComponent,
    SmellprofileDetailsComponent,
    SmellprofileGalleryComponent,
    SmellprofileNewComponent,
    SmellprofileUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
