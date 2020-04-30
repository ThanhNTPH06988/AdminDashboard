import { UsersEditComponent } from './../users-edit/users-edit.component';
import { Users } from './../../../models/users';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { UsersAddComponent } from '../users-add/users-add.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: any;

  constructor(
    public us: UsersService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    us.refresh().subscribe((m: any) => {
      this.getList();
    });
  }

  ngOnInit() {
    this.getList();
  }

  getList = () => {
    this.us
      .getAllUsers()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.users = data;
        console.log(this.users);
      });
  };

  deleteUsers(id: string) {
    this.us.deleteUsers(id);
    console.log(id);
    this.snackBar.open("Deleted !!", "Xoá rồi đấy", {
      duration: 3000,
      verticalPosition: "bottom",
    });
    this.getList();
  }

  onDialogEdit(user: Users) {
    this.us.formUsers = Object.assign({}, user);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "35%";
    this.dialog.open(UsersEditComponent, dialogConfig);
  }

  onDialogAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "35%";
    this.dialog.open(UsersAddComponent, dialogConfig);
  }
}
