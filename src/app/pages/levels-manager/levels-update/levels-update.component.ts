import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LevelsService } from 'src/app/services/levels.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-levels-update',
  templateUrl: './levels-update.component.html',
  styleUrls: ['./levels-update.component.scss']
})
export class LevelsUpdateComponent implements OnInit {
  constructor(
    public dialog: MatDialogRef<LevelsUpdateComponent>,
    public lvs: LevelsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  onClose() {
    this.dialog.close();
    this.lvs.filter("click");
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.lvs.formLevels = {
      id: null,
      levelCode: "",
      levelName: "",
      description: "",
    };
  }

  onSubmit(form: NgForm) {
    let data = form.value;
    this.lvs.updateLevels(data.id,data);
    this.resetForm(form);
    this.snackBar.open("updated !!", "Sửa xong r bạn ơi !!", {
      duration: 3000,
      verticalPosition: "bottom",
    });
  }

}
