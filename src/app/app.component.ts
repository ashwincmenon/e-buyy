import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from './authenticate.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userServ: UserService, private auth: AuthenticateService, router:Router){
    auth.user$.subscribe(user => {
      if (user){
        userServ.save(user);
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    })
  }
}