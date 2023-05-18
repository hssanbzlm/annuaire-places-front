import { Component } from '@angular/core';
import {
  faDashboard,
  faUser,
  faEarthEurope,
  faMapLocationDot,
  faComment,
  faFaceAngry,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  faDashboard = faDashboard;
  faUser = faUser;
  faearthEurope = faEarthEurope;
  famapLocationDot = faMapLocationDot;
  faComment = faComment;
  fafaceAngry = faFaceAngry;
}
