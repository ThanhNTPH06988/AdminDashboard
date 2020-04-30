import { MatSnackBar } from "@angular/material/snack-bar";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-users-add",
  templateUrl: "./users-add.component.html",
  styleUrls: ["./users-add.component.scss"],
})
export class UsersAddComponent implements OnInit {
  constructor(
    public dialog: MatDialogRef<UsersAddComponent>,
    public us: UsersService,
    private snackBar: MatSnackBar,
    private loginService: AuthService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  onClose() {
    this.dialog.close();
    this.us.filter("click");
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.us.formUsers = {
      id: "",
      address: "",
      email: "",
      gender: true,
      fullname: "",
      phoneNumb: "",
    };
  }

  onSubmit(form: NgForm) {
    let data = form.value;
    this.us.createUsers(data);
    this.loginService.register(data.email, data.password);
    this.resetForm(form);
    this.snackBar.open("Added !!!", "Tạo xong r bạn ơi !!", {
      duration: 3000,
      verticalPosition: "bottom",
    });
  }
}
