import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/services/users.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {

  constructor(
    public dialog: MatDialogRef<UsersEditComponent>,
    public us: UsersService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
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
    this.us.updateUsers(data.id,data);
    this.resetForm(form);
    this.snackBar.open("Added !!!", "Tạo xong r bạn ơi !!", {
      duration: 3000,
      verticalPosition: "bottom",
    });
  }

}
