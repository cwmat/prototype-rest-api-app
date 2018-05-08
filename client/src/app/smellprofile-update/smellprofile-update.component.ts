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
  selector: 'app-smellprofile-update',
  templateUrl: './smellprofile-update.component.html',
  styleUrls: ['./smellprofile-update.component.css'],
  providers: [SmellprofileService]
})
export class SmellprofileUpdateComponent implements OnInit {
  @ViewChild('Updategmap') updateGmapElement: any;
  uMap: google.maps.Map;
  updateMarker;
  smellprofile;
  updateProfile: any = {};

  constructor(private route: ActivatedRoute,
    private smellprofileService: SmellprofileService,
    private router: Router) {}


  ngOnInit() {
    this.getSmell();
  }

  // Draw map after rendering DOM
  ngAfterViewInit() {
    this.updateMap();
  }

  // Get a specific smell
  getSmell(): void {
    const param = this.route.snapshot.paramMap.get('id');
    this.smellprofileService.getSmell(param)
      .subscribe(smellprofile => {
        this.smellprofile = smellprofile[0];
      });
  }

  // Use data service to update entry
  updateSmell(form: any): void {
    this.updateProfile.name = form.name;
    this.updateProfile.type = form.type;
    this.updateProfile.desc = form.desc;
    this.updateProfile.lat = form.lat;
    this.updateProfile.lon = form.lon;
    console.log(this.updateProfile);
    this.smellprofileService.updateSmell(this.smellprofile._id, this.updateProfile)
      .subscribe((result) => {
        location.reload();
      });
  }

  // Draw/refresh the map
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

    google.maps.event.addListener(this.uMap, 'click', (event) => {
      this.smellprofile.lat = event.latLng.lat();
      this.smellprofile.long = event.latLng.lng();

      if (this.updateMarker) {
        this.updateMarker.setMap(null);
      }

      this.updateMarker = new google.maps.Marker({
        position: {
          lat: this.smellprofile.lat,
          lng: this.smellprofile.long
        },
        map: this.uMap
      });

      this.uMap.setCenter({
        lat: this.smellprofile.lat,
        lng: this.smellprofile.long
      });
    });
  }
}
