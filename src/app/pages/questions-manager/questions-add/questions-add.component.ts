import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { NgForm } from "@angular/forms";
import { map } from "rxjs/operators";
import { QuestionsService } from "src/app/services/questions.service";
import { stringify } from "querystring";
@Component({
  selector: "app-questions-add",
  templateUrl: "./questions-add.component.html",
  styleUrls: ["./questions-add.component.scss"],
})
export class QuestionsAddComponent implements OnInit {
  lessons: any;

  constructor(
    public dialog: MatDialogRef<QuestionsAddComponent>,
    public ques: QuestionsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.resetForm();
    this.getLessons();
  }

  getLessons = () => {
    this.ques
      .getLessons()
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

  onClose() {
    this.dialog.close();
    this.ques.filter("click");
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.ques.formQuestions = {
      id: null,
      lessonId: null,
      content: "",
      answers: null,
      correctAnswer: 0,
    };
  }

  onSubmit(form: NgForm) {
    let data = form.value;
    this.ques.createQuestions(data);
    this.resetForm(form);
    this.snackBar.open("Added !!!", "Tạo xong r bạn ơi !!", {
      duration: 3000,
      verticalPosition: "bottom",
    });
  }
}
