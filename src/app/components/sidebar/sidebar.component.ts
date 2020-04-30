import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user : firebase.User;

  constructor( private loginService : AuthService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.loginService.getLoggedInUser().subscribe(userLogin => {
      this.user = userLogin;
    })
  }

  logout(){
    this.loginService.logout();
  }
}
