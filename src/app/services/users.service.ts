import { Users } from './../models/users';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  formUsers: Users;

  usersCollection: AngularFirestoreCollection<Users> = null;
  constructor(private firestore: AngularFirestore) {
    this.usersCollection = firestore.collection("users");
   }

   /// load all ds kèm id
  getAllUsers(): AngularFirestoreCollection<Users> {
    return this.usersCollection;
  }

  // lấy chi tiết một level theo id
  findID(id): Observable<Users> {
    const levelsFound = this.firestore
      .collection("users")
      .doc(id)
      .valueChanges();
    return <Observable<Users>>levelsFound;
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

  createUsers(user: Users) {
    this.firestore.collection("users").add(user);
  }

  /// Sửa câu hỏi

  updateUsers(usersId: string, user: Users) {
    this.firestore.doc("users/" + usersId).update(user);
  }

  deleteUsers(usersId: string) {
    this.firestore.doc("users/" + usersId).delete();
  }

  private listner = new Subject<any>();
  refresh(): Observable<any> {
    return this.listner.asObservable();
  }

  filter(filterBy: String) {
    this.listner.next(filterBy);
  }
}
