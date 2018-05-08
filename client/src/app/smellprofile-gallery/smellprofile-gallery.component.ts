import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import {
  SmellprofileListComponent
} from "../smellprofile-list/smellprofile-list.component";

@Component({
  selector: 'app-smellprofile-gallery',
  templateUrl: './smellprofile-gallery.component.html',
  styleUrls: ['./smellprofile-gallery.component.css']
})
export class SmellprofileGalleryComponent implements OnInit {
  @ViewChild(SmellprofileListComponent) child: SmellprofileListComponent;
  viewState: String = 'Map';

  constructor() {}

  ngOnInit() {}

  // Change view state back to map after creating a new smell
  updateSmells() {
    this.child.getSmells();
    this.changeViewState('Map');
  }

  // Set view state as either: 'Map', 'List', or 'Create'
  changeViewState(newState): void {
    this.viewState = newState;
  }
}
