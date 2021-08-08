
import { Component, Input } from '@angular/core';
import { Point } from '../chat/shared/model/location';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Input() location: Point;
  isFullScreen = false;
  googleMapType = 'satellite';
}
