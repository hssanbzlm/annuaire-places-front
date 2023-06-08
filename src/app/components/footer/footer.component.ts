import { Component } from '@angular/core';
import {
  faLinkedin,
  faFacebook,
  faGithub,
  faTwitter,
  faDev,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faDev = faDev;
}
