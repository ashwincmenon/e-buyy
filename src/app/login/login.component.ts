import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './../authenticate.service'
import { AngularFireAuth } from 'angularfire2/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthenticateService) { }

  login()
  {
    this.auth.login();
  }

}
