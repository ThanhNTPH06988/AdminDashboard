import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  private formLogin: FormGroup;
  email: "";
  pass: "";
  constructor(
    public loginService: AuthService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
  }


  login() {
    this.loginService.login(this.email, this.pass);
    this.snackBar.open("Logined !!!", "Đăng nhập Thành Công !!", {
      duration: 3000,
      verticalPosition: "bottom",
    });
  }

  loginGoogle() {
    this.snackBar.open("Google !!!", "Login......", {
      duration: 6000,
      verticalPosition: "bottom",
    });
    this.loginService.loginWithGoogle();
  }

  loginFace() {
    this.snackBar.open("Facebook !!!", "Login......", {
      duration: 5000,
      verticalPosition: "bottom",
    });
    this.loginService.loginWithFace();
  }
}
