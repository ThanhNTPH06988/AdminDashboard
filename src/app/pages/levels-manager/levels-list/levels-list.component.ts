import { LevelsAddComponent } from './../levels-add/levels-add.component';
import { LevelsUpdateComponent } from './../levels-update/levels-update.component';
import { Component, OnInit } from '@angular/core';
import { LevelsService } from 'src/app/services/levels.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from "rxjs/operators";
import { Levels } from 'src/app/models/levels';
@Component({
  selector: 'app-levels-list',
  templateUrl: './levels-list.component.html',
  styleUrls: ['./levels-list.component.scss']
})
export class LevelsListComponent implements OnInit {

  levels: any;
  nameSearch: string = ""

  constructor(
    public lvs: LevelsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    lvs.refresh().subscribe((m: any) => {
      this.getList();
    });
  }

  ngOnInit() {
    this.getList();
  }

  getList = () => {
    this.lvs
      .getAllLevels()
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
        this.levels = data;
        console.log(this.levels);
      });
  };

  /// Search name
  searchByName(){
    // let value = this.nameSearch.toLowerCase();
    this.lvs.findID(this.nameSearch)
    .subscribe(result => {
     this.levels = result
     console.log(this.levels)
    })
  }

  /// xoá levels
  deleteLevels(id: string) {
    if (confirm("Bạn có muốn xoá không")) this.lvs.deleteLevels(id);
    this.snackBar.open("delete !!", "Xoá rồi đấy", {
      duration: 3000,
      verticalPosition: "bottom",
    });
  }

  onDialogEdit(lev: Levels) {
    this.lvs.formLevels = Object.assign({}, lev);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    this.dialog.open(LevelsUpdateComponent, dialogConfig);
  }

  onDialogAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    this.dialog.open(LevelsAddComponent, dialogConfig);
  }

}
