import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

// Import data service and data class
import {
  SmellprofileService
} from '../smellprofile.service';
import {
  Smellprofile
} from '../smellprofile';

@Component({
  selector: 'app-smellprofile-list',
  templateUrl: './smellprofile-list.component.html',
  styleUrls: ['./smellprofile-list.component.css'],
  providers: [SmellprofileService]
})
export class SmellprofileListComponent implements OnInit {
  // Define properties for holding data from data service
  smellList: any;
  selectedSmellprofile: Smellprofile;

  // Inject data service in constructor
  constructor(private smellprofileService: SmellprofileService,
    private router: Router) {}

  // On init, call the getSmells() method to obtain data from dataservice
  ngOnInit() {
    this.getSmells();
  }

  // Uses data service to pull data fro REST API
  getSmells(): void {
    // Subscribe to observable to obtain data asynchronously
    this.smellprofileService.listSmells()
      .subscribe(smellList => this.smellList = smellList);
  }

  // Upon selecting a table row, set that smellprofile as the currently selected.
  onSelect(smellprofile: Smellprofile): void {
    this.selectedSmellprofile = smellprofile;
    this.router.navigate(['/smell/' + this.selectedSmellprofile._id]);
  }
}
