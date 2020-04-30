import { Levels } from "src/app/models/levels";
import { LessonsService } from "./../../../services/lessons.service";
import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { NgForm } from "@angular/forms";
import { map } from "rxjs/operators";

@Component({
  selector: "app-lessons-add",
  templateUrl: "./lessons-add.component.html",
  styleUrls: ["./lessons-add.component.scss"],
})
export class LessonsAddComponent implements OnInit {

  levels: any;

  constructor(
    public dialog: MatDialogRef<LessonsAddComponent>,
    public les: LessonsService,
    private snackBar: MatSnackBar,
  ) {}


  ngOnInit() {
    this.resetForm();
    this.getLevels()
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
    this.les.createLessons(data);
    this.resetForm(form);
    this.snackBar.open("Added !!!", "Tạo xong r bạn ơi !!", {
      duration: 3000,
      verticalPosition: "bottom",
    });
  }
  
}
