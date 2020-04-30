import { Component, OnInit } from "@angular/core";
import { StaffsService } from "./../../../services/staffs.service";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { NgForm, Validators } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: "app-staffs-add",
  templateUrl: "./staffs-add.component.html",
  styleUrls: ["./staffs-add.component.scss"],
})
export class StaffsAddComponent implements OnInit {
  constructor(
    public dialog: MatDialogRef<StaffsAddComponent>,
    public stfs: StaffsService,
    private snackBar: MatSnackBar,
   private loginService: AuthService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  onClose() {
    this.dialog.close();
    this.stfs.filter("click");
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.stfs.formStaffs = {
      id: "" ,
      address: "",
      email: '',
      fullname: "",
      gender: true,
      password: "",
      phoneNumb: "",
      username: "",
      role: false,
    };
  }

  onSubmit(form: NgForm) {
    let data = form.value;
    this.stfs.createStaffs(data);
    this.loginService.register(data.email,data.password)
    this.resetForm(form);
    this.snackBar.open("Added !!!", "Tạo xong r bạn ơi !!", {
      duration: 3000,
      verticalPosition: "bottom",
    });
  }

}
