import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase";
import { FirebaseAuth } from "@angular/fire";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  // Cách 1 check đăng nhập kiểu nông dân
  private isSignedIn: boolean;

  // cách 2 check đăng nhâp kiểu người máy

  // public isSingnedInStream: Observable<boolean>;


  constructor(public afAuth: AngularFireAuth, private router: Router) {
    // Cách 1 check đăng nhập kiểu nông dân
    afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        this.isSignedIn = true;
        router.navigate(['/dashboard'])
      } else {
        this.isSignedIn = false;
        router.navigate(['/signin'])
      }
    });

    // Cách 2 check đăng nhập kiểu người máy

    // this.isSingnedInStream = afAuth.authState.map<firebase.User, boolean>(
    //   (user: firebase.User) => {
    //     return  user !=null;
    //   }
    // );
  }

  // Cách 1 check đăng nhập kiểu nông dân
  get usestated(): boolean {
    return this.isSignedIn;
  }

  loginWithGoogle() {
    this.afAuth.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then((value) => {
        this.router.navigate(["/dashboard"]);
      })
      .catch((err) => {
        alert("có biến");
      });
  }

  loginWithFace() {
    this.afAuth.auth
      .signInWithPopup(new auth.FacebookAuthProvider())
      .then((value) => {
        this.router.navigate(["/dashboard"]);
      })
      .catch((err) => {
        alert("có biến");
      });
  }

  login(email: string, password: string) {
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        this.router.navigate(["/dashboard"]);
      })
      .catch((err) => {
        console.log("Lỗi đăng nhập sai pass");
      });
  }

  register(email: string, pass: string) {
   this.afAuth.auth.createUserWithEmailAndPassword(email,pass).then((value)=>{
     this.router.navigate(['/users'])
   });
  }

  logout() {
    this.afAuth.auth.signOut().then((value) => {
      this.router.navigate(["/signin"]);
    });
  }

  getLoggedInUser() {
    return this.afAuth.authState;
  }

}
