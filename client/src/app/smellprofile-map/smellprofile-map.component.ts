import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { Smellprofile } from '../smellprofile';

// Import Google Map TS types
import { } from '@types/googlemaps';

@Component({
  selector: 'app-smellprofile-map',
  templateUrl: './smellprofile-map.component.html',
  styleUrls: ['./smellprofile-map.component.css']
})
export class SmellprofileMapComponent implements OnInit {
  // Set the gmap div as a ViewChild
  @ViewChild('gmap') gmapElement: any;
  // Define a map property that will store a GMaps object
  map: google.maps.Map;
  // Define a marker property that will store a GMaps marker object
  marker: google.maps.Marker;

  // Inject data from smellprofile-list (comes from an on-click event)
  @Input() smellprofile: Smellprofile;

  constructor() { }

  ngOnInit() {
    // Rough center point for Richmond, VA
    var rva = {
      lat: 37.536954951447285,
      lng: -77.43867874145508
    };

    // Define a GMap
    this.map = new google.maps.Map(this.gmapElement.nativeElement, {
      zoom: 12,
      center: rva
    });
  }

  /**
   * Whenever a clcik event from smellprofile-list injects new data, change the map marker.
   * @param changes Change event
   */
  ngOnChanges(changes: any) {
    // If there is no injected data, display a blank map, otherwise show a marker
    if (this.smellprofile) {
      // If there is already a marker on the map, remove it
      if (this.marker) {
        this.marker.setMap(null);
      }
      // Create a marker using the injected data's lat/long
      this.marker = new google.maps.Marker({
        position: {lat: this.smellprofile.lat, lng: this.smellprofile.long},
        map: this.map,
        title: this.smellprofile.desc
      });
      // Set marker to map and log
      this.marker.setMap(this.map);
      console.log(this.smellprofile);
    }
  }
}
