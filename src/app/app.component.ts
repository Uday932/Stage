import { Component, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'

})
export class AppComponent {
  title = 'Test_project_2';
  public error:boolean = false;
  public loading:boolean = false;

  constructor(private fb: FormBuilder,
    private router: Router,) {
}

loginForm = this.fb.group({
username: ['', Validators.required],
password: ['', Validators.required],
});

ngOnInit() {
}

get form() {
return this.loginForm.controls;
}

  onSubmit() {
    this.loading = true;
        () => {
          this.loading = false;
          this.loginForm.reset();
          this.router.navigateByUrl('/admin/dashboard');
        }
  }
}
