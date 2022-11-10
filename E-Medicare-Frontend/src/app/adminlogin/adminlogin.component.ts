import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationStatus } from '../models/AthenticationStatus.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  authStatus: AuthenticationStatus | undefined;
  constructor(
    private loginloginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(form.value.username, form.value.password);

    this.loginloginService
    .authenticated(form.value.username, form.value.password)
    .subscribe((res) => {
      this.authStatus = res;
      if (this.authStatus.authenticated) {
        alert("Successfully logged in!")
        this.router.navigate(['/adminpage'], {relativeTo: this.route});
      }
      else {
        alert("Invalid Credentials!")
        this.router.navigate(['/login'], { relativeTo: this.route});
        form.reset();
      }
    });
  }
}