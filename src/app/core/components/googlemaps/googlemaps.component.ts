import { AgmGeocoder } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { google } from 'google-maps';

@Component({
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css'],
})
export class GooglemapsComponent implements OnInit {
  public origin: any;
  public destination: any;
  public destination2: any;
  public lat: Number = -22.402714;
  public lng: Number = -46.969692;
  public travelMode = 'DRIVING';

  public waypoints: any = [{ location: { lat: -22.402556, lng: -46.96304 } }];
  public renderOptions = {
    draggable: true,
  };

  constructor(private geocoder: AgmGeocoder) {}

  ngOnInit() {
    this.getDirection();
    this.geocoder.geocode({
      address: 'Av. Pedro Botesi, Mogi Mirim, SP',
    });

    let gg = new google.maps.Geocoder();
    gg.geocode({ address: 'Av. Pedro Botesi, Mogi Mirim, SP' }, (results) => {
      console.log(results);
    });
    console.log(gg);
  }
  public change(event: any) {
    this.waypoints = event.request.waypoints;
  }

  getDirection() {
    this.origin = { lat: -22.402714, lng: -46.969692 };
    this.destination = { lat: -22.402556, lng: -46.96304 };
    this.destination2 = { lat: -22.402556, lng: -46.95304 };

    // this.origin = 'Taipei Main Station'
    // this.destination = 'Taiwan Presidential Office'
  }
}
