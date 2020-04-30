import { StaffsService } from './../../../services/staffs.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-staffs-edit',
  templateUrl: './staffs-edit.component.html',
  styleUrls: ['./staffs-edit.component.scss']
})
export class StaffsEditComponent implements OnInit {

  constructor(
    public dialog : MatDialogRef<StaffsEditComponent>,
    public stfs : StaffsService,
    private snackBar : MatSnackBar
  ) { }

  ngOnInit() {
  }

  onClose(){
    this.dialog.close();
    this.stfs.filter('click');
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.stfs.formStaffs = {
      id: "",
      address: "",
      email: "",
      fullname: "",
      gender: null,
      password: "",
      phoneNumb: "",
      username: "",
      role:null
    };
  }

  onSubmit(form: NgForm) {
    let data = form.value;
    console.log(data.id)
    this.stfs.updateStaffs(data.id, data);
    this.resetForm(form);
    this.snackBar.open("Updated !!!", "Sửa xong r bạn ơi !!", {
      duration: 3000,
      verticalPosition: "bottom",
    });
  }


}
