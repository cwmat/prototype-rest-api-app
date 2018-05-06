import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { Smellprofile } from '../smellprofile';
import { SmellprofileService } from '../smellprofile.service';

// Import Google Map TS types
import { } from '@types/googlemaps';

@Component({
  selector: 'app-smellprofile-map',
  templateUrl: './smellprofile-map.component.html',
  styleUrls: ['./smellprofile-map.component.css'],
  providers: [SmellprofileService]
})
export class SmellprofileMapComponent implements OnInit {
  // Set the gmap div as a ViewChild
  @ViewChild('gmap') gmapElement: any;
  // Define a map property that will store a GMaps object
  map: google.maps.Map;
  // Define a marker property that will store a GMaps marker object
  marker: google.maps.Marker;
  mapList;

  // Inject data from smellprofile-list (comes from an on-click event)
  @Input() smellprofile: Smellprofile;
  @Input() smellList: any;

  constructor(private smellprofileService:SmellprofileService) { }

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

    this.addMarkers();

      // When the user clicks, open an infowindow
  this.map.data.addListener('click', function (event) {
    var myHTML = "<p><strong>" + event.feature.getProperty("name") + "</strong></p>" + "<p>" + event.feature.getProperty("type") + "</p>" + "<p>" + event.feature.getProperty("desc") + "</p>" + event.feature.getProperty("edit") + event.feature.getProperty("delete");
    this.infowindow.setContent("<div style='width:150px; text-align: center;'>" + myHTML + "</div>");
    this.infowindow.setPosition(event.feature.getGeometry().get());
    this.infowindow.setOptions({
      pixelOffset: new google.maps.Size(0, -30)
    });
    this.infowindow.open(this.map);
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

  getSmells(): void {
    // Subscribe to observable to obtain data asynchronously
    this.smellprofileService.listSmells()
      .subscribe(smellList => this.smellList = smellList);
  }

  addMarkers(): void {
    this.smellprofileService.listSmells()
      .subscribe(mapList => {
        this.mapList = mapList
        for (let i: number = 0; i <= this.mapList.length; i++) {
          let currentSmell = this.mapList[i];
          let myHTML = "<div class='map-text' style='color: black;'>"+ "<p style='font-weight: bold;'>" + currentSmell.type + "</p>" + "<p>" + currentSmell.desc + "</p>" + "<p><a href='/smell/" + currentSmell._id + "'>Details</a></p>" + "</div>";
          let infowindow = new google.maps.InfoWindow({
            content: myHTML
          });
          let marker = new google.maps.Marker({
            position: {lat: this.mapList[i].lat, lng: this.mapList[i].long},
            map: this.map,
            title: this.mapList[i].desc
          });
          marker.addListener('click', function() {
            infowindow.open(this.map, marker);
          });
        }
      });
    
  }

}
