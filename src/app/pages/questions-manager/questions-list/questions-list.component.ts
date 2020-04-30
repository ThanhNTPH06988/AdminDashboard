import { QuestionsEditComponent } from './../questions-edit/questions-edit.component';
import { QuestionsService } from './../../../services/questions.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from "rxjs/operators";
import { Questions } from 'src/app/models/questions';
import { QuestionsAddComponent } from '../questions-add/questions-add.component';
@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {

  questions: any;
  lessonsMap: Map<string, any> = new Map<string, any>();

  constructor(
    public ques: QuestionsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    ques.refresh().subscribe((m: any) => {
      this.getList();
    });
  }

  ngOnInit() {
    this.getList();
  }

  getList = () => {
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
        data.forEach(element => {
          this.lessonsMap.set(element.id, element);
        });
      });

    this.ques
      .getAllQuestions()
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
        this.questions = data;
        console.log(this.questions);
      });
  };

  deleteQuestion(id: string) {
    this.ques.deleteQuestions(id);
    console.log(id);
    this.snackBar.open("Deleted !!", "Xoá rồi đấy", {
      duration: 3000,
      verticalPosition: "bottom",
    });
    this.getList();
  }

  onDialogEdit(que: Questions) {
    this.ques.formQuestions = Object.assign({}, que);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "35%";
    this.dialog.open(QuestionsEditComponent, dialogConfig);
  }

  onDialogAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "35%";
    this.dialog.open(QuestionsAddComponent, dialogConfig);
  }
}
