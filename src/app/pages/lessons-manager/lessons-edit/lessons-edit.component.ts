import { Levels } from "./../../../models/levels";
import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { LessonsService } from "src/app/services/lessons.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { NgForm } from "@angular/forms";
import { map } from "rxjs/operators";

@Component({
  selector: "app-lessons-edit",
  templateUrl: "./lessons-edit.component.html",
  styleUrls: ["./lessons-edit.component.scss"],
})
export class LessonsEditComponent implements OnInit {
  levels: any;

  constructor(
    public dialog: MatDialogRef<LessonsEditComponent>,
    public les: LessonsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getLevels();
  }

  getLevels = () => {
    this.les
      .getLevels()
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

  onClose() {
    this.dialog.close();
    this.les.filter("click");
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.les.formLessons = {
      id: null,
      lessonCode:"",
      levelId: null,
      description: "",
    };
  }

  onSubmit(form: NgForm) {
    let data = form.value;
    console.log(data.id);
    this.les.updateLessons(data.id, data);
    this.resetForm(form);
    this.snackBar.open("updated !!", "Sửa xong r bạn ơi !!", {
      duration: 3000,
      verticalPosition: "bottom",
    });
  }
}
