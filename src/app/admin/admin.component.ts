import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(router: Router, config: NgbModalConfig) {
    router.navigateByUrl('admin/home');
    //app modals configuration
    config.backdrop = 'static';
    config.centered = true;
  }
}
