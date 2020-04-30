import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user : firebase.User;

  constructor(private appService: AppService , private loginService: AuthService) {

  }
  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.loginService.getLoggedInUser().subscribe(userLogin => {
      this.user = userLogin;
    })
  }
  
  getClasses() {
    const classes = {
      'pinned-sidebar': this.appService.getSidebarStat().isSidebarPinned,
      'toggeled-sidebar': this.appService.getSidebarStat().isSidebarToggeled
    }
    return classes;
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }
}
