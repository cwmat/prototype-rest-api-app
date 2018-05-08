import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';

// Import data service and data class
import {
  SmellprofileService
} from '../smellprofile.service';
import {
  Smellprofile
} from '../smellprofile';

@Component({
  selector: 'app-smellprofile-new',
  templateUrl: './smellprofile-new.component.html',
  styleUrls: ['./smellprofile-new.component.css'],
  providers: [SmellprofileService]
})
export class SmellprofileNewComponent implements OnInit {
  @ViewChild('Creategmap') detailsGmapElement: any;
  map: google.maps.Map;
  @Output() newSmellEvent = new EventEmitter();
  newSmell: any = {};
  marker: google.maps.Marker;


  constructor(private smellprofileService: SmellprofileService) {}

  ngOnInit() {}

  // Load map after DOM renders
  ngAfterViewInit() {
    this.refreshMap();
  }

  // Use data service to create new smell
  createSmell(newSmellForm): void {
    let data: any = {
      name: this.newSmell.name,
      type: this.newSmell.type,
      desc: this.newSmell.desc,
      lat: this.newSmell.lat,
      lon: this.newSmell.long
    };
    console.log("Data", data);
    this.smellprofileService.createSmell(data)
      .subscribe((smell) => {
        console.log("Smell", smell)
        this.newSmellEvent.emit();
        newSmellForm.reset();
      });
  }

  // Create/refresh the map
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

    google.maps.event.addListener(this.map, 'click', (event) => {
      this.newSmell.lat = event.latLng.lat();
      this.newSmell.long = event.latLng.lng();
      
      if (this.marker) {
        this.marker.setMap(null);
      }

      this.marker = new google.maps.Marker({
        position: {
          lat: this.newSmell.lat,
          lng: this.newSmell.long
        },
        map: this.map
      });
  
      this.map.setCenter({
        lat: this.newSmell.lat,
        lng: this.newSmell.long
      });
    });
  }

  // Map click event for setting lat/long for input
  mapClick(event): any {
    this.newSmell.lat = event.latLng.lat();
    this.newSmell.long = event.latLng.lng();
    let marker = new google.maps.Marker({
      position: {
        lat: this.newSmell.lat,
        lng: this.newSmell.long
      },
      map: this.map
    });

    this.map.setCenter({
      lat: this.newSmell.lat,
      lng: this.newSmell.long
    });

    console.log(this.newSmell.lat, this.newSmell.long);
  }
}
