import {
  Component,
  OnInit,
  ViewChild
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

// Import Google Map TS types
import {} from '@types/googlemaps';

@Component({
  selector: 'app-smellprofile-details',
  templateUrl: './smellprofile-details.component.html',
  styleUrls: ['./smellprofile-details.component.css'],
  providers: [SmellprofileService]
})
export class SmellprofileDetailsComponent implements OnInit {
  // Google map instance members
  @ViewChild('Detailsgmap') detailsGmapElement: any;
  map: google.maps.Map;
  // Data isntance member
  smellprofile;
  // State change instance member
  viewState: String = "Details";

  constructor(private route: ActivatedRoute,
    private smellprofileService: SmellprofileService,
    private router: Router) {}

  ngOnInit() {
    // Find the specified Smell
    this.getSmell();
  }

  ngAfterViewInit() {
    // Draw the map after the DOM has rendered
    this.refreshMap();
  }

  getSmell(): void {
    // Use data service to find a specific smell
    const param = this.route.snapshot.paramMap.get('id');
    this.smellprofileService.getSmell(param)
      .subscribe(smellprofile => {
        this.smellprofile = smellprofile[0];
      });
  }

  // Deletes smell using data Service
  deleteSmell() {
    if (confirm(`Are you sure you want to delete ${this.smellprofile.desc}?`)) {
      console.log(`deleting ${this.smellprofile._id}`);
      this.smellprofileService.deleteSmell(this.smellprofile._id)
        .subscribe((result) => {
          alert(`Smellprofile ${this.smellprofile.desc} has been deleted`);
          this.router.navigate(['/gallery']);
        })
    }
  }

  goBack(): void {
    // Navigate back to gallery
    this.router.navigate(['/gallery']);
  }

  // Change the view state between 'Details' and 'Update'
  changeViewState(newState): void {
    this.viewState = newState;

    if (this.viewState == 'Details') {
      location.reload();
    }
  }

  refreshMap(): void {
    console.log("INIT!");
    // Rough center point for Richmond, VA
    var rva = {
      lat: 37.536954951447285,
      lng: -77.43867874145508
    };

    // Define a GMap
    this.map = new google.maps.Map(this.detailsGmapElement.nativeElement, {
      zoom: 12,
      center: rva
    });

    // Set a marker
    let marker = new google.maps.Marker({
      position: {
        lat: this.smellprofile.lat,
        lng: this.smellprofile.long
      },
      map: this.map,
      title: this.smellprofile.desc
    });

    // Cetner map
    this.map.setCenter({
      lat: this.smellprofile.lat,
      lng: this.smellprofile.long
    });
  }
}
