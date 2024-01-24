import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'x-toastr';

@Component({
  selector: 'app-login',
  templateUrl: `login.component.html`,
  styleUrls: [`login.component.scss`]
})
export class LoginComponent {
  public error:boolean = false;
  public loading:boolean = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private authenticationService: AuthenticationService) {
  }

}

