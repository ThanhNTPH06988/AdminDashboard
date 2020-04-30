import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { LevelsService } from "src/app/services/levels.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-levels-add",
  templateUrl: "./levels-add.component.html",
  styleUrls: ["./levels-add.component.scss"],
})
export class LevelsAddComponent implements OnInit {
  constructor(
    public dialog: MatDialogRef<LevelsAddComponent>,
    public lvs: LevelsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.resetForm();
  }

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
    this.lvs.createLevels(data);
    this.resetForm(form);
    this.snackBar.open("Added !!!", "Tạo xong r bạn ơi !!", {
      duration: 3000,
      verticalPosition: "bottom",
    });
  }
}
