import { Component, OnInit } from "@angular/core";
import { LessonsService } from "src/app/services/lessons.service";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Lessons } from "src/app/models/lessons";
import { LessonsAddComponent } from "../lessons-add/lessons-add.component";
import { LessonsEditComponent } from "../lessons-edit/lessons-edit.component";
import { map } from "rxjs/operators";
import { from } from "rxjs";
@Component({
  selector: "app-lessons-list",
  templateUrl: "./lessons-list.component.html",
  styleUrls: ["./lessons-list.component.scss"],
})
export class LessonsListComponent implements OnInit {
  lessons: any;
  levelsMap: Map<string, any> = new Map<string, any>();
  constructor(
    public les: LessonsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    les.refresh().subscribe((m: any) => {
      this.getList();
    });
  }

  ngOnInit() {
    this.getList();
  }

  getList = () => {
    this.les.getLevels()
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
        data.forEach(element => {
          this.levelsMap.set(element.id, element);
        });
      });

    this.les
      .getAllLessons()
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
        this.lessons = data;
        console.log(this.lessons);
      });
  };

  deleteLessons(id: string) {
    this.les.deleteLessons(id);
    console.log(id);
    this.snackBar.open("Deleted !!", "Xoá rồi đấy", {
      duration: 3000,
      verticalPosition: "bottom",
    });
    this.getList();
  }

  onDialogEdit(les: Lessons) {
    this.les.formLessons = Object.assign({}, les);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    this.dialog.open(LessonsEditComponent, dialogConfig);
  }

  onDialogAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    this.dialog.open(LessonsAddComponent, dialogConfig);
  }
}
