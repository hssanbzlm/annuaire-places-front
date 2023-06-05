import { Component } from '@angular/core';
import {
  faDashboard,
  faUser,
  faEarthEurope,
  faMapLocationDot,
  faComment,
  faFaceAngry,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  faDashboard = faDashboard;
  faUser = faUser;
  faearthEurope = faEarthEurope;
  famapLocationDot = faMapLocationDot;
  faComment = faComment;
  fafaceAngry = faFaceAngry;
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
