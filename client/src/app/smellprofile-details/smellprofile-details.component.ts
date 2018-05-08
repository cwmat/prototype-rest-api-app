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
  @ViewChild('Detailsgmap') detailsGmapElement: any;
  map: google.maps.Map;
  @ViewChild('Updategmap') updateGmapElement: any;
  uMap: google.maps.Map;
  updateMarker;
  smellprofile;
  // updateSmellprofile;
  updateProfile: any = {};
  viewState: String = "Details";

  constructor(private route: ActivatedRoute,
    private smellprofileService: SmellprofileService,
    private router: Router) {}

  ngOnInit() {
    this.getSmell();
    // this.refreshMap();


    // this.addMarkers();
  }

  ngAfterViewInit() {
    this.refreshMap();
    this.updateMap();
  }

  getSmell(): void {
    const param = this.route.snapshot.paramMap.get('id');
    this.smellprofileService.getSmell(param)
      .subscribe(smellprofile => {
        this.smellprofile = smellprofile[0];
      });
  }

  // calls update from SmellprofileService using data passed from ngForm.value
  updateSmell(data: any): void {
    this.updateProfile.name = data.name;
    this.updateProfile.type = data.type;
    this.updateProfile.desc = data.desc;
    this.updateProfile.lat = data.lat;
    this.updateProfile.lon = data.lon;
    this.smellprofileService.updateSmell(this.smellprofile._id, this.updateProfile)
      .subscribe((result) => {
        location.reload();
      });
  }

  // deletes photo using PhotoService
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
    // navigate back to gallery
    this.router.navigate(['/gallery']);
  }

  changeViewState(newState): void {
    this.viewState = newState;

    if (this.viewState == 'Details') {
      // setTimeout(this.refreshMap(), 3000);
      // location.reload();
      this.refreshMap();
      this.updateMap();
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

    let marker = new google.maps.Marker({
      position: {
        lat: this.smellprofile.lat,
        lng: this.smellprofile.long
      },
      map: this.map,
      title: this.smellprofile.desc
    });

    this.map.setCenter({
      lat: this.smellprofile.lat,
      lng: this.smellprofile.long
    });
  }

  updateMap(): void {
    console.log("INIT!");
    // Rough center point for Richmond, VA
    var rva = {
      lat: 37.536954951447285,
      lng: -77.43867874145508
    };

    // Define a GMap
    this.uMap = new google.maps.Map(this.updateGmapElement.nativeElement, {
      zoom: 12,
      center: rva
    });

    this.updateMarker = new google.maps.Marker({
      position: {
        lat: this.smellprofile.lat,
        lng: this.smellprofile.long
      },
      map: this.uMap,
      title: this.smellprofile.desc
    });

    this.uMap.setCenter({
      lat: this.smellprofile.lat,
      lng: this.smellprofile.long
    });

    google.maps.event.addListener(this.map, 'click', (event) => {
      this.updateProfile.lat = event.latLng.lat();
      this.updateProfile.long = event.latLng.lng();
      
      if (this.updateMarker) {
        this.updateMarker.setMap(null);
      }

      this.updateMarker = new google.maps.Marker({
        position: {
          lat: this.updateProfile.lat,
          lng: this.updateProfile.long
        },
        map: this.map
        // title: this.newSmell.desc
      });
  
      this.map.setCenter({
        lat: this.updateProfile.lat,
        lng: this.updateProfile.long
      });
    });
  }

  mapClick(event): any {
    this.updateProfile.lat = event.latLng.lat();
    this.updateProfile.long = event.latLng.lng();
    let marker = new google.maps.Marker({
      position: {
        lat: this.updateProfile.lat,
        lng: this.updateProfile.long
      },
      map: this.map
      // title: this.newSmell.desc
    });

    this.map.setCenter({
      lat: this.updateProfile.lat,
      lng: this.updateProfile.long
    });

    console.log(this.updateProfile.lat, this.updateProfile.long);

  }


}
