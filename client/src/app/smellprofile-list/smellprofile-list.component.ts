import { Component, OnInit, Input } from '@angular/core';

// Import data service and data class
import { SmellprofileService } from '../smellprofile.service';
import { Smellprofile } from '../smellprofile';

@Component({
  selector: 'app-smellprofile-list',
  templateUrl: './smellprofile-list.component.html',
  styleUrls: ['./smellprofile-list.component.css'],
  providers: [SmellprofileService]
})
export class SmellprofileListComponent implements OnInit {
  // Define properties for holding data from data service
  smellList: Smellprofile[];
  selectedSmellprofile: Smellprofile;

  // Inject data service in constructor
  constructor(private smellprofileService:SmellprofileService) { }

  // On init, call the getSmells() method to obtain data from dataservice
  ngOnInit() {
    this.getSmells();
  }

  /**
   * Uses dataservice to pull mock data from mock-data.ts and add to array property
   */
  getSmells(): void {
    // Subscribe to observable to obtain data asynchronously
    this.smellprofileService.listSmells()
      .subscribe(smellList => this.smellList = smellList);
  }

  /**
   * Upon selecting a table row, set that smellprofile as the currently selected.
   * @param smellprofile The selected row and assocaited smellprofile data.
   */
  onSelect(smellprofile:Smellprofile): void {
    this.selectedSmellprofile = smellprofile;
  }
}
