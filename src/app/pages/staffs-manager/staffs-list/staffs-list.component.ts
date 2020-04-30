import { Staffs } from "./../../../models/staffs";
import { StaffsAddComponent } from "./../staffs-add/staffs-add.component";
import { map } from "rxjs/operators";
import { StaffsService } from "./../../../services/staffs.service";
import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { StaffsEditComponent } from "../staffs-edit/staffs-edit.component";

@Component({
  selector: "app-staffs-list",
  templateUrl: "./staffs-list.component.html",
  styleUrls: ["./staffs-list.component.scss"],
})
export class StaffsListComponent implements OnInit {
  staffs: any;

  constructor(
    public stfs: StaffsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    stfs.refresh().subscribe((m: any) => {
      this.getList();
    });
  }

  ngOnInit() {
    this.getList();
  }

  getList = () => {
    this.stfs
      .getAllStaffs()
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
        this.staffs = data;
        console.log(this.staffs);
      });
  };

  deleteStaffs(id: string) {
    this.stfs.deleteStaffs(id);
    console.log(id);
    this.snackBar.open("Deleted !!", "Xoá rồi đấy", {
      duration: 3000,
      verticalPosition: "bottom",
    });
    this.getList();
  }

  onDialogEdit(stf: Staffs) {
    this.stfs.formStaffs = Object.assign({}, stf);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(StaffsEditComponent, dialogConfig);
  }

  onDialogAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(StaffsAddComponent, dialogConfig);
  }
}
