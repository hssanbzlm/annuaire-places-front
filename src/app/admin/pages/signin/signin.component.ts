import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  signinForm!: FormGroup;
  submitted = false;
  error = false;
  waiting = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.signinForm.valueChanges.subscribe((v) => {
      if (this.submitted) this.submitted = false;
    });
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.error = false;
    this.waiting = true;
    if (this.signinForm.invalid) {
      return;
    } else {
      this.authService.signin(this.signinForm.value).subscribe({
        next: (data) => {
          this.waiting = false;
          localStorage.setItem('jwt-annuaire-places', data.token);
          this.router.navigate(['admin/home']);
        },
        error: () => {
          this.error = true;
          this.waiting = false;
        },
      });
    }
  }
}
