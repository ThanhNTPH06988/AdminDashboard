import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Staffs } from "../models/staffs";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class StaffsService {
  formStaffs: Staffs;

  staffsCollection: AngularFirestoreCollection<Staffs> = null;

  constructor(private firestore: AngularFirestore) {
    this.staffsCollection = firestore.collection("staffs");
  }

  /// load all ds kèm id
  getAllStaffs(): AngularFirestoreCollection<Staffs> {
    return this.staffsCollection;
  }

  // lấy chi tiết một level theo id
  findID(id): Observable<Staffs> {
    const levelsFound = this.firestore
      .collection("staffs")
      .doc(id)
      .valueChanges();
    return <Observable<Staffs>>levelsFound;
  }

  // searchUsers(searchValue) {
  //   return this.firestore
  //     .collection("levels", (ref) =>
  //       ref
  //         .where("levelName", ">=", searchValue)
  //         .where("levelName", "<=", searchValue + "\uf8ff")
  //     )
  //     .snapshotChanges();
  // }

  createStaffs(st: Staffs) {
    this.firestore.collection("staffs").add(st);
  }

  /// Sửa câu hỏi

  updateStaffs(staffsId: string, st: Staffs) {
    this.firestore.doc("staffs/" + staffsId).update(st);
  }

  deleteStaffs(staffsId: string) {
    this.firestore.doc("staffs/" + staffsId).delete();
  }

  private listner = new Subject<any>();
  refresh(): Observable<any> {
    return this.listner.asObservable();
  }

  filter(filterBy: String) {
    this.listner.next(filterBy);
  }
}
